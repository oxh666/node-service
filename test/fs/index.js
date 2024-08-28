import fs from 'fs'

console.log('process',process.cwd()+'/test/test.txt')
export const txtUrl='../test.txt'
export const txtUrl1=process.cwd()+'/test/test.txt'
// readFileSync同步读取
const syncData = fs.readFileSync(txtUrl, 'utf-8')
console.log('--fs__index.js--')
console.log('====sync read====')
console.log(syncData)
// process.exit()
console.log('end')


// readFileSync回调形式 异步读取
fs.readFile(txtUrl, 'utf-8', (err, callbackData) => {
  if (!err) {
    console.log('====callback read====')
    console.log(callbackData)
    console.log('end')

  }else{
    console.log(err)
  }
})

// promise形式 异步读取
fs.promises.readFile(txtUrl, 'utf-8').then((promiseData) => {
  console.log('====promise read====')
  console.log(promiseData)
  console.log('end')

})

// promise 形式还可以是如下写法（常用）
import fs1 from 'fs/promises'
fs1.readFile(txtUrl, 'utf-8').then((promiseData) => {
  console.log('====promise read====')
  console.log(promiseData)
  console.log('end')

})
