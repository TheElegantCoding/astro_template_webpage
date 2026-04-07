terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.92"
    }
  }

  required_version = ">= 1.2"
}

provider "aws" {
  alias  = "virginia"
  region = var.region
}

resource "aws_acm_certificate" "cert" {
  provider                  = aws.virginia
  domain_name               = var.domains[0]
  validation_method         = "DNS"
  subject_alternative_names = var.domains

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_s3_bucket" "s3_bucket" {
  bucket        = var.bucket_name
  force_destroy = true

  tags = {
    Environment = var.environment
    Project     = var.project
  }
}

resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "oac-${var.bucket_name}"
  description                       = "OAC para el bucket ${var.bucket_name}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = var.distribution_name
  http_version        = "http2and3"
  default_root_object = "index.html"
  # aliases             = var.domains

  # viewer_certificate {
  #   acm_certificate_arn      = aws_acm_certificate_validation.cert_validation.certificate_arn
  #   ssl_support_method       = "sni-only"
  #   minimum_protocol_version = "TLSv1.2_2021"
  # }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  origin {
    domain_name              = aws_s3_bucket.s3_bucket.bucket_regional_domain_name
    origin_id                = "s3-${aws_s3_bucket.s3_bucket.bucket}"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  ordered_cache_behavior {
    path_pattern     = "/_astro/*"
    target_origin_id = "s3-${aws_s3_bucket.s3_bucket.bucket}"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    cache_policy_id            = data.aws_cloudfront_cache_policy.caching_optimized.id
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.security_headers.id

    viewer_protocol_policy = "redirect-to-https"
    compress               = true
  }

  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "s3-${aws_s3_bucket.s3_bucket.bucket}"
    viewer_protocol_policy     = "redirect-to-https"
    compress                   = true
    cache_policy_id            = data.aws_cloudfront_cache_policy.caching_optimized.id
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.security_headers.id

    function_association {
      event_type   = "viewer-request"
      function_arn = data.aws_cloudfront_function.existing_redirect.arn
    }
  }

  custom_error_response {
    error_code            = 404
    response_code         = 404
    response_page_path    = "/404.html"
    error_caching_min_ttl = 10
  }

  custom_error_response {
    error_code            = 403
    response_code         = 403
    response_page_path    = "/404.html"
    error_caching_min_ttl = 10
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = var.environment
    Project     = var.project
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_cloudfront" {
  bucket = aws_s3_bucket.s3_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.s3_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}

resource "aws_budgets_budget" "cost_limit" {
  name         = "budget-${var.project}"
  budget_type  = "COST"
  limit_amount = "10.0"
  limit_unit   = "USD"
  time_unit    = "MONTHLY"

  cost_filter {
    name   = "TagKeyValue"
    values = ["Project$${var.project}"]
  }

  tags = {
    Environment = var.environment
    Project     = var.project
  }

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 5
    threshold_type             = "ABSOLUTE_VALUE"
    notification_type          = "ACTUAL"
    subscriber_email_addresses = [var.astralys_email]
  }

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 9
    threshold_type             = "ABSOLUTE_VALUE"
    notification_type          = "FORECASTED"
    subscriber_email_addresses = [var.astralys_email]
  }
}
