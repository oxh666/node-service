import fs from 'fs'

// console.log(process.cwd()+'/test/test.txt')
export const txtUrl=process.cwd()+'/test/test.txt'
// 同步读取
const syncData = fs.readFileSync(txtUrl, 'utf-8')
console.log('====sync read====')
console.log(syncData)


// 回调形式 异步读取
fs.readFile(txtUrl, 'utf-8', (err, callbackData) => {
  if (!err) {
    console.log('====callback read====')
    console.log(callbackData)
  }else{
    console.log(err)
  }
})

// promise形式 异步读取
fs.promises.readFile(txtUrl, 'utf-8').then((promiseData) => {
  console.log('====promise read====')
  console.log(promiseData)
})

// promise 形式还可以是如下写法（常用）
import fs1 from 'fs/promises'
fs1.readFile(txtUrl, 'utf-8').then((promiseData) => {
  console.log('====promise read====')
  console.log(promiseData)
})
