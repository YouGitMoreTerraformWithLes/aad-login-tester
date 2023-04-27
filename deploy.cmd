call npm install
call npm run build
call az storage blob delete-batch --account-name aadlogintester -s $web
call az storage blob upload-batch --account-name aadlogintester --overwrite true -d $web -s .\dist 
Start iexplore -private https://aadlogintester.z3.web.core.usgovcloudapi.net/
