const fs = require('fs'); // 文件模块
let rawdata = fs.readFileSync("utils/blogimg/filesName.json"); // blog-img仓库
let filesName = JSON.parse(rawdata);
let str = fs.readFileSync("HighLight.md", 'utf8')
for (let i = 0; i < filesName.length; i++) {
  const content = `
<video width="850" height="400" controls>
  <source src="https://cdn.jsdelivr.net/gh/ckhr516/blog-img@main/${filesName[i]}" type="video/mp4">
</video>
`
  str += content
}

fs.writeFile('HighLight.md', str, function (err) {
  if (err) {
    console.log("读取失败" + err);
  } else {
    console.log("上传成功");
  }
})