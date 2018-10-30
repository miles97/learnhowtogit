var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
    //得到查询部分，由于写了true，那么就是一个对象
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.end("服务器收到了表单请求" + name + age + sex+"并写入了芒果数据库"+"<br>");
});

server.listen(3000,"127.0.0.1");

