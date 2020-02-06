var http = require('http');
var os = require("os");

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var hostname = os.hostname();
    response.write('Machine hostname: ' + hostname);
    response.end();   
}

http.createServer(onRequest).listen(3000);