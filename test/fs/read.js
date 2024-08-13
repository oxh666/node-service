import fs from 'fs'
import {txtUrl} from './index.js'
// const txtUrl=process.cwd()+'/test/test.txt'

const txtContent = fs.readFileSync(txtUrl, 'utf-8')
const buf = fs.readFileSync(txtUrl)

// 打印Buffer大小
console.log(buf.length)
// 修改前2个字符
buf.write('gg')

// 输出修改后的内容
console.log(buf.toString())
