const http = require("http");
const fs = require('fs');

let PORT = process.argv[2]
const hostname = '127.0.0.1';

// Check if PORT defined
if (!PORT) {
    PORT = 4242
}

// Execute HTTP Server
const server = http.createServer((req, res) => {
    
    res.statusCode = 200
    const exe = fs.readFileSync('./index.html', 'utf-8')
    res.write(exe)
    res.end()
})

server.listen(PORT, hostname, () => {
    console.log(`Server started at http://${hostname}:${PORT}`)
})