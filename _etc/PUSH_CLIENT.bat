@echo off
cd /d "%~dp0.."

git add --all
git commit -F "%~dp0_COMMIT_MSG_CLIENT.md"
git push

cd /d "%~dp0..\.."
git add client
git commit -F "%~dp0_COMMIT_MSG_CLIENT.md"
git push
