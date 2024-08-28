import fs from 'fs'
import path from 'path'

/**
 * 获取全部文件列表
 *
 */
function getAllFiles(dirPath,arrayOfFiles) {
  // 获取当前目录下的所有文件
  const files= fs.readdirSync(dirPath,{withFileTypes:true})

  arrayOfFiles=arrayOfFiles || []

  files.forEach((file)=>{
    // 判断是否是目录
    if(file.isDirectory()){
      arrayOfFiles=getAllFiles(path.resolve(dirPath,file.name),arrayOfFiles)
    }else{
      arrayOfFiles.push(path.resolve(dirPath,file.name))
    }
  })

  return arrayOfFiles

}

// 获取全部文件列表
console.log(getAllFiles('../../'))
