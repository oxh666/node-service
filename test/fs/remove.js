import fs from 'fs'

// 删除 test-dir 目录（包含其子文件）
fs.rmSync('test-dir', { recursive: true })
