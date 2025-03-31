const fs = require('fs');
const path = require('path');

// 创建构建输出目录
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// 复制 images 文件夹到构建输出目录
const imagesDir = path.join(__dirname, 'images');
const imagesDestDir = path.join(distDir, 'images');
if (fs.existsSync(imagesDir)) {
    if (!fs.existsSync(imagesDestDir)) {
        fs.mkdirSync(imagesDestDir, { recursive: true });
    }
    // 复制所有图片文件
    const files = fs.readdirSync(imagesDir);
    files.forEach(file => {
        const sourcePath = path.join(imagesDir, file);
        const destPath = path.join(imagesDestDir, file);
        fs.copyFileSync(sourcePath, destPath);
    });
}

// 复制 index.html 到构建输出目录
const htmlSource = path.join(__dirname, 'index.html');
const htmlDest = path.join(distDir, 'index.html');
fs.copyFileSync(htmlSource, htmlDest);

// 复制 CSS 文件到根目录
const cssSource = path.join(__dirname, 'dist', 'output.css');
const cssDest = path.join(__dirname, 'output.css');
fs.copyFileSync(cssSource, cssDest);

// 读取并处理 index.html
let html = fs.readFileSync(htmlDest, 'utf8');

// 确保 CSS 引用路径正确
if (!html.includes('href="output.css"')) {
    html = html.replace('</head>', '<link href="output.css" rel="stylesheet">\n</head>');
}

// 写入处理后的 HTML 文件
fs.writeFileSync(htmlDest, html);

console.log('Build completed successfully!'); 