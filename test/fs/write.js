import fs from 'fs'
const txtUrl='../test.txt'
const imgUrl='../logo.jpeg'
fs.writeFileSync(txtUrl, 'bye bye world')


// 读取一个图片
const imgBuf = fs.readFileSync(imgUrl)

console.log('readImage',fs.statSync(imgUrl))
const fileInfo = fs.statSync(imgUrl)
// 判断是文件还是目录
console.log('是否是文件',fileInfo.isFile(),'是否是目录', fileInfo.isDirectory())


try {
  // 查询一个不存在的文件/目录信息（会抛出异常，需要自行捕获）
  fs.statSync('not_exist.txt')
} catch (e) {
  console.log('文件不存在')
}
process.exit()
// console.log('isBuffer', Buffer.isBuffer(imgBuf), 'bufferSize', imgBuf.length)

// 写入到新文件
fs.writeFileSync('newLogo.jpeg', imgBuf, 'binary')
