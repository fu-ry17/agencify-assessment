#! /bin/bash

echo Enter git commit message
read message

git status
git add .
git commit -m "$message"
git branch -M main
git push -u origin main