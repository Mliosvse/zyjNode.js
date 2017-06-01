const http=require('http');
const fs=require('fs');
const path =require('path');
const url=require('url');
const server =http.createServer((res,rep)=>{
  if(res.url=='/favicon.ico'){
    return;
  }
  const pathName=url.parse(res.url).pathname;
  const extName=path.parse(pathName).ext;
  getMime(extName,function(mimeName){
    
    fs.readFile(path.join(__dirname,'demo',pathName),(err,data)=>{
      if(!err){
        rep.writeHead(200,{'Content-Type':`${mimeName};cahrset=utf-8`});
        rep.end(data);
      }else{
        rep.end();
      }
      
    })
  })
});
server.listen(80);

function getMime(extname,callback){
  fs.readFile(path.join(__dirname,'demo','mime.json'),(err,data)=>{
    const jsonObj=JSON.parse(data.toString());
    const mimeName=jsonObj[extname];
    callback(mimeName);
  })
}