const http = require('http')
const port = process.env.PORT || 1227
const server = http.createServer(function (req, res) {
  res.setHeader(
    ('Content-type', 'application/json'),
    res.end(JSON.stringify({ text: 'Shalome', numbers: [1, 2, 3] }))
  )
})

server.listen(port)
console.log(`Server listening on port ${port}`)
