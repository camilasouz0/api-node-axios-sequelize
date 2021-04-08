const http = require('http')
const fs = require('fs')

module.exports = http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin' : '*'
    })
  let readStream = fs.createReadStream(__dirname + '/../view/index.html')
  readStream.pipe(res)
})