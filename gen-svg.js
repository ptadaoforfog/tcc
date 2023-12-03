function utf8ToHex(str) {
  let buffer = Buffer.from(str, 'utf8');
  return buffer.toString('hex');
}

function genSvg(char, utf8Hex) {
  return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#000000"/><text x="50%" y="45%" font-family="Arial" font-size="50" fill="white" dominant-baseline="middle" text-anchor="middle">${char}</text><text x="50%" y="75%" font-family="Arial" font-size="20" fill="white" dominant-baseline="middle" text-anchor="middle">${utf8Hex}</text></svg>`
}

function createDirAndWrite(dir, filename, content) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/${filename}`, content);
}

const fs = require('fs');

fs.readFile('qzw.txt', 'utf8', function(err, data) {
  if (err) throw err;

  const characters = data.split('');
  let index = 0;
  characters.forEach((character) => {
    if (character=='，' || character=='。' || character=='\n') {
      return
    }

    const svgContent = genSvg(character, utf8ToHex(character))
    createDirAndWrite("./dist", index++ + ".svg", svgContent)
  });
});