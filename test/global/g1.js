/**
 * commonjs模式
 */
// 分别存在于如下2个文件中
// a/df.js
// df.js
// console.log(__filename)
// console.log(__dirname)


/**
 * esm模式
 */
// 导入 Node.js 内置的 path 模块
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 获取当前模块文件的 URL
const __filename = fileURLToPath(import.meta.url);

// 获取当前模块文件的目录
const metaUrl =import.meta.url;
// console.log('metaUrl:', metaUrl);
// 输出文件名
// console.log('Filename:', __filename);

// 获取当前模块所在的目录
const __dirname = dirname(__filename);

// 输出目录名
// console.log('Dirname:', __dirname);

/**
 * 在 ESM中获取 CMJ模块的全局变量
 */
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
console.log(123,require('../../package.json').name)
