import fs from 'fs'
const txtUrl='../test.txt'
const imgUrl='../logo.jpeg'

fs.appendFileSync(txtUrl, '----hello world')
console.log(fs.readFileSync(txtUrl, 'utf8'))


