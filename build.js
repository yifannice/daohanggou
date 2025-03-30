const fs = require('fs');
const path = require('path');

// 创建构建输出目录
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// 复制 index.html 到构建输出目录
const htmlSource = path.join(__dirname, 'index.html');
const htmlDest = path.join(distDir, 'index.html');
fs.copyFileSync(htmlSource, htmlDest);

// 读取并处理 index.html
let html = fs.readFileSync(htmlDest, 'utf8');

// 替换CSS引用
html = html.replace(
    '<!-- <link href="/dist/output.css" rel="stylesheet"> -->',
    '<link href="/output.css" rel="stylesheet">'
);

// 移除CDN引用
html = html.replace(
    '<script src="https://cdn.tailwindcss.com"></script>',
    ''
);

// 写入处理后的 HTML 文件
fs.writeFileSync(htmlDest, html);

console.log('Build completed successfully!'); 