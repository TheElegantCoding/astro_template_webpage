output "bucket_name" {
  value = aws_s3_bucket.s3_bucket.id
}

output "cloudfront_id" {
  value = aws_cloudfront_distribution.s3_distribution.id
}
