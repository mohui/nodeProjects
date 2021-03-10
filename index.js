// let {app} = require('./src/app');


//引入http模块
const http = require("http");
//设置主机名
const hostName = '127.0.0.1';
//设置端口
const port = 1011;
//创建服务
const server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end("hello nodejs");

});
server.listen(port,hostName,function(){
    console.log(`服务器运行在http://${hostName}:${port}`);
});