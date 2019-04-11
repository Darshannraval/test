#!/bin/bash
apt -y update
apt install -y nodejs
apt install -y npm
npm install -y pm2 -g
cd /home/ubuntu
git clone https://github.com/Darshannraval/test.git




