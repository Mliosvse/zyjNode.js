const http=require('http');
const fs=require('fs');
const server =http.createServer((res,rep)=>{
  
});
server.listen(80);

function getMime(extname,callback){
  fs.readFile(__dirname)
}