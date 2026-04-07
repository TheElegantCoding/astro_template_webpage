import { execSync } from 'node:child_process';

const BUCKET_NAME = execSync('terraform -chdir=infrastructure output -raw -no-color bucket_name').toString().trim();
const DIST_ID = execSync('terraform -chdir=infrastructure output -raw -no-color cloudfront_id').toString().trim();

execSync('npm run build', { stdio: 'inherit' });

execSync(`aws s3 sync dist/ s3://${BUCKET_NAME}/ --delete`, { stdio: 'inherit' });
execSync(`aws s3 cp s3://${BUCKET_NAME}/manifest.webmanifest s3://${BUCKET_NAME}/manifest.webmanifest --content-type application/manifest+json --metadata-directive REPLACE`, { stdio: 'inherit' });
execSync(`aws cloudfront create-invalidation --distribution-id ${DIST_ID} --paths "/*"`, { stdio: 'inherit' });
