var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', function (err, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.write('<img src="https://www.lifewire.com/thmb/aGlWdK4PhVJGPM_LXKLJBXycBFs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/404-not-found-error-explained-2622936-Final-387df77f30dd4c9d805012c2ba13fbc5.png">');
        response.end();
    }
});

server.listen(8080);