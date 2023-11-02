const fs = require('fs'); // 文件模块
let rawdata = fs.readFileSync("utils/blogimg/json/filesName.json"); // blog-img仓库
let filesName = JSON.parse(rawdata);
let str = fs.readFileSync("docs/随笔/HighLight.md", 'utf8')
for (let i = 0; i < filesName.length; i++) {
  const content = `
## ${filesName[i].slice(0, 4)}-${filesName[i].slice(4, 6)}-${filesName[i].slice(6, 8)} (${filesName[i].slice(8)})
<p align=center>
<video width="850" height="400" controls>
  <source src="https://cdn.staticaly.com/gh/ckhr516/blog-img@main/${filesName[i]}.mp4" type="video/mp4">
</video>
</p>
`
  str += content
}
fs.writeFile('docs/随笔/HighLight.md', str, function (err) {
  if (err) {
    console.log("读取失败" + err);
  } else {
    console.log("上传成功");
  }
})
