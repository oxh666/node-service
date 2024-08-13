/**
 * 返回数组
 * type: Array
 * 第一个参数是 Node 在机器上的位置，
 * 第二个参数是执行文件的绝对路径，
 *
 * [
 *   '/Users/oyh/.nvm/versions/node/v20.11.0/bin/node',
 *   '/Users/oyh/Desktop/oyh/nodejs-projects/node-service/test/global/process.js'
 * ]
 */
console.log(process.argv)

/**
 * 返回当前工作目录 :/Users/oyh/Desktop/oyh/nodejs-projects/node-service
 */
console.log(process.cwd())

/**
 * 返回环境变量(对象形式)
 */
console.log('env',process.env)

/**
 * 返回当前 Node.js 的版本
 */
console.log(process.version)



console.log('hello')

// process.exit()

// 下面这行代码不会执行
console.log('world')


console.log('返回进程的 PID',process.pid)//返回进程的 PID (进程 ID)；
console.log('返回运行 Node.js 的操作系统平台；',process.platform)//返回运行 Node.js 的操作系统平台；
console.log('获取 CPU 架构信息',process.arch)//获取 CPU 架构信息
console.log('标准输出流，常用 process.stdout.write 进行数据写入',process.stdout)//标准输出流，常用 process.stdout.write 进行数据写入。
console.log()
