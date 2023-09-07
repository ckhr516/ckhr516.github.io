npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ckhr516/ckhr516.github.io.git master:my-blog

cd ..
Remove-Item dist -Recurse -Force