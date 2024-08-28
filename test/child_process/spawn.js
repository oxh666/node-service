import ChildProcess from 'child_process'

const {spawn, spawnSync} = ChildProcess

const pwd = spawnSync('pwd')
console.log('pwd',pwd.stdout.toString())

const ls = spawn('ls', ['-lh'])
console.log(ls.stdout.toString())
