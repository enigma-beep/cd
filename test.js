// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// const http= require('http');
// const server=http.createServer((res,req)=>{
//     if(req.url=="/"){
//         res.write("MEssage");
//         res.end();}
//     if(req.url=="/hello"){
//         res.write("HelloMessage");
//         res.end();
    
//     }
// });server.listen(7894);

const express=require("express")
const app=express()
const port=process.env.PORT||8000
const emp=[{id:1,title:"good"},{id:2,title:"bad"}]
app.listen(port,()=>console.log("Server started"))
app.get("/:id",(req,res)=>{
    const user=emp.find(userid=>userid.id===parseInt(req.params.id))
    res.send(user.title)
})
