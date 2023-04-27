npm install
npm run build
az storage blob upload-batch --account-name aadlogintester -d $web -s .\dist