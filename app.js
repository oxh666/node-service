import express from 'express'
import {mountMethodDemo} from './routes/index.js'
import RouterDemo from "./routes/routerDemo/router-demo.js";
const PROT =3000 //设置端口号
const app= express() //创建express实例

app.use(express.json())
app.use(RouterDemo)

app.use((req, res, next) => {
  const { method, path, query, body, headers } = req
  console.log(`[${method}] ${path}`)
  console.log('query:', query)
  console.log('headers:', headers)
  console.log('body:', body)
  next()
})

mountMethodDemo(app)
app.use('/demo', RouterDemo)
// //创建一个 GET /hello路由
// app.get('/hello',(req,res)=>{
//   res.send('<h1>Hello Express</h1>')
//
// })
//
// //创建一个 GET /hello/:id路由
// app.get('/hello/:id', (req, res) => {
//   const { params } = req
//   console.log('params', params)
//   res.json(params)
// })


app.listen(PROT,()=>{
  console.log(`server is running at http://localhost:${PROT}`)
})
