#!/bin/bash

# ci-cd/scripts/deploy.sh

set -e

# SSH details
USER=$SERVER_USER
HOST=$SERVER_HOST
DEPLOY_DIR=/var/www/your-app

# SSH into the server and deploy
ssh -o StrictHostKeyChecking=no $USER@$HOST << 'EOF'
  set -e

  # Pull latest code
  cd $DEPLOY_DIR
  git pull origin main

  # Install dependencies and build
  npm install
  npm run build

  # Restart the application (assuming you're using PM2 or a similar process manager)
  pm2 restart all
EOF

echo "Deployment complete
