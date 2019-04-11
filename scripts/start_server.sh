#!/bin/bash
pwd
cd /home/ubuntu
git clone https://github.com/Darshannraval/test.git
cd /home/ubuntu/test
pm2 start -f app.js 

