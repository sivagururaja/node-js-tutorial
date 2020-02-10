var http = require('http');

http.createServer(function (request, response) {

    if(request.url === '/hello') {
        response.writeHead(200); //Status code in header
        response.write("Hello"); //Response body
        response.end(); //Close the connection
    }
    else if(request.url === '/hai') {
        response.writeHead(200); //Status code in header
        response.write("Hai"); //Response body
        response.end(); //Close the connection
    }
    else {
        response.writeHead(200); //Status code in header
        response.write("Introduction"); //Response body
        response.end(); //Close the connection
    }
}).listen(8080); //Port in which node will listen for connections

console.log('Listening on port 8080...');

/* Run the following cmd to start node and run the server
 node '01 - Introduction part 2.js'
 */

/* Run the following cmd to make an HTTP request to your local server (you should get a response)
 curl http://localhost:8080
 curl http://localhost:8080/hai
 curl http://localhost:8080/hello
 */