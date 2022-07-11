const http=require('http');
const fs=require('fs');
const _=require('lodash');

const server=http.createServer((req,res)=>{

    const num=_.random(0,20);
    console.log(num);
    res.setHeader('Content-Type','text/html');
    let path='./views/';

    switch(req.url){
        case '/':
            path+='index.html';
            break;
        case '/about':
            path+='about.html';
            break;
        default:
            path+='404.html';
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    });
});

server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
})
