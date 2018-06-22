const http = require('http');
var url = require('url');
var qs = require('querystring');
const hostname = '127.0.0.1';
const port = 3000;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    // res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader('Accept', '*/*')
    res.setHeader("Vary", "Origin");
    res.setHeader("Transfer-Encoding", "chunked");
    process.on('uncaughtException', function(err) {
        //打印出错误 //打印出错误的调用栈方便调试
        console.log(err);
        console.log(err.stack);
    });
    res.statusCode = 200;
    if (req.method.toUpperCase() == 'GET') {
        var query = url.parse(req.url, true).query;
        var CallBack = require('./' + query.router + '.js');
        var obj = new CallBack();
        obj.call(connection, res, query);
    };
    if (req.method.toUpperCase() == 'POST') {
        var postData = "";
        req.addListener("data", function(data) {
            postData += data;
        });
        req.addListener("end", function() {
            console.log("postdata:", postData);
            var query = qs.parse(postData);
            var CallBack = require('./' + query.router + '.js');
            var obj = new CallBack();
            obj.call(connection, res, query);
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});