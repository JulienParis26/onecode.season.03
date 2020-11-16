const http = require('http')

const PORT = process.argv[2]

// Check if PORT defined
if (!PORT) {
  console.log('usage: node e02.js <PORT>')
  process.exit(0)
}

// Execute HTTP Server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")

    if (req.method === 'GET') {
        res.write('<h1> Hello World!</h1>')
    } else if (req.method === 'POST') {
        res.write('Heisenberg')
    }
   
    res.end()
})

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})

// node 03.js 4242 => Server started...

// curl localhost:4242 => <h1>Hello World!</h1>

// curl -d "" localhost:4242 => Heisenberg