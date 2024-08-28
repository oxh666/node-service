import * as http from "http";

const server =http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
})
server.listen(3238, () => {
  console.log("Server running at http://localhost:3238/");
});
