import fs from 'fs'
import {txtUrl} from './index.js'
const imgUrl=process.cwd()+'/test/logo.jpeg'
// fs.writeFileSync(txtUrl, '123hello world')
// 读取一个图片
const imgBuf = fs.readFileSync(imgUrl)

console.log(111,fs.statSync(imgUrl))
const fileInfo = fs.statSync(imgUrl)
// 判断是文件还是目录
console.log(1,fileInfo.isFile(),2, fileInfo.isDirectory())
try {
  // 查询一个不存在的文件/目录信息（会抛出异常，需要自行捕获）
  fs.statSync('not_exist.txt')
} catch (e) {
  console.log('文件不存在',e)
}
process.exit()
// console.log('isBuffer', Buffer.isBuffer(imgBuf), 'bufferSize', imgBuf.length)

// 写入到新文件
fs.writeFileSync('newLogo.jpeg', imgBuf, 'binary')
