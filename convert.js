function utf8ToHex(str) {
  // 创建一个 Buffer 从给定的字符串
  let buffer = Buffer.from(str, 'utf8');
  // 将 Buffer 转换为 16 进制字符串
  return buffer.toString('hex');
}

// 使用示例
let chineseText = "洞";
let utf8EncodedText = utf8ToHex(chineseText);
console.log(utf8EncodedText); // 输出转换后的 UTF-8 字符串
