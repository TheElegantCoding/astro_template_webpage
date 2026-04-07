variable "project" {
  description = "The name of the project"
  type        = string
}

variable "astralys_email" {
  description = "The email address to receive budget notifications"
  type        = string
}

variable "domain" {
  description = "The domain names for the cloudfront distribution"
  type        = list(string)
}

variable "distribution_name" {
  description = "The name of the cloudfront distribution"
  type        = string
}

variable "bucket_name" {
  description = "The name of the S3 bucket to create"
  type        = string
}

variable "region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "The environment for the resources (e.g., dev, staging, prod)"
  type        = string
  default     = "dev"
}

data "aws_cloudfront_function" "existing_redirect" {
  name  = "redirect_www_to_non_www"
  stage = "LIVE"
}

data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

data "aws_cloudfront_response_headers_policy" "security_headers" {
  name = "Managed-SecurityHeadersPolicy"
}
