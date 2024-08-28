import util from 'util'
import {stringify} from "javascript-stringify";

// 复杂对象
const testObj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, 5],
    e: () => {
      console.log(6)
    }
  },
  f: '7',
  g: [{ 8: [{ 9: 10 }] }],
  h() {
    console.log(11)
  }
}
//普通打印--嵌套的数组和函数无法显示完整
console.log(testObj)

// JSON.stringify()--函数会消失
console.log(JSON.stringify(testObj))

//until.inspect()--可以看到深的数组和函数，但是函数显示不完整
console.log(util.inspect(testObj,{depth:Math.Infinity}))

//stringify--可以获取全部
console.log(stringify(testObj,null,2))
