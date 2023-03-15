echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build 

echo "Deploying files to server"
scp -r build/* test@95.179.222.249:/var/www/95.179.222.249/

echo "Done"