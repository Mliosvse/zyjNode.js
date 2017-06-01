const http=require('http');
const fs=require('fs');
const path=require('path');
const server=http.createServer((request,respones)=>{
  if(path.extname(request.url)=='.css'){
    respones.writeHead(200,{'Content-Type':'text/css'});
    
  }
  if(path.extname(request.url)=='.js'){
    respones.writeHead(200,{'Content-Type':'application/x-javascript;charset:utf-8'});
   
  }
  if(path.extname(request.url)=='.html'){
    respones.writeHead(200,{'Content-Type':'text/html;charset:utf-8'});
  }
 
  if(request.url=='index.html'){
    fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
     respones.write(data);
      respones.end();
    });
  }else{
    fs.readFile(path.join(__dirname,request.url),(err,data)=>{
       respones.write(data);
      respones.end();
    });
  }
    
   
});
server.listen(80);