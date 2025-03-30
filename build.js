const fs = require('fs');
const path = require('path');

// 读取HTML文件
const htmlPath = path.join(__dirname, 'daohang.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 替换CSS引用
html = html.replace(
    '<!-- <link href="/dist/output.css" rel="stylesheet"> -->',
    '<link href="/dist/output.css" rel="stylesheet">'
);

// 移除CDN引用
html = html.replace(
    '<script src="https://cdn.tailwindcss.com"></script>',
    ''
);

// 写入HTML文件
fs.writeFileSync(htmlPath, html);

console.log('Build completed successfully!'); 