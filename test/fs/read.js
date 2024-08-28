import fs from 'fs'
 const txtUrl='../test.txt'

const txtContent = fs.readFileSync(txtUrl, 'utf-8')
const buf = fs.readFileSync(txtUrl)

console.log('文件内容',txtContent)
// 打印Buffer大小
console.log(buf.length)

/**
 * 输出修改后的内容
 * @type {string}
 */
buf.write('gg')

// 输出修改后的内容
console.log('修改后内容',buf.toString())
