import fs from 'fs'

/**
 * readdirSync读取目录
 * @params {string ,object{encoding:string,withFileTypes:boolean}}
 * @paramsChinese 目录路径，可选参数{是否返回编码类型，是否返回参数类型}
 */
const dir =fs.readdirSync('./',{encoding:'utf-8',withFileTypes:true})
console.log('顶级目录',dir)
console.log('顶级目录map',dir.map((f)=>({name:f.name,isDirectory:f.isDirectory()})))
