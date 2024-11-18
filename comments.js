// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');

// 2. Create server
http.createServer(function(req, res) {
    // 3. Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/html'});

    // 4. Set the response body
    fs.readFile('comments.html', function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }

        // 5. Send the response body
        res.end();
    });

}).listen(8080);

console.log('Server running at http://localhost:8080/');

// 6. Output the server address
//console.log('Server running at http://