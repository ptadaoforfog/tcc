var opentype = require('opentype.js');

// 函数用于将汉字转换为SVG
async function convertCharToSVG(char, fontPath) {
  try {
    const font = await opentype.load(fontPath);
    const path = font.getPath(char, 0, 150, 72);
    return path.toSVG();
  } catch (error) {
    console.error("Error in converting character to SVG:", error);
    throw error;
  }
}

// 使用示例
const fontPath = 'fonts/OTF/SimplifiedChinese/SourceHanSansSC-Normal.otf';  // 替换为字体文件的路径
const char = '汉';

convertCharToSVG(char, fontPath)
  .then(svg => console.log(svg))
  .catch(error => console.error(error));
