const http = require('http')

let server = http.createServer( (req, res) => {
 switch(req.url) {
   case '/1.html':
    res.write('1')
    break
   case '/2.html':
    res.write('2')
    break
   default:
    res.write('404')
    break
 }
 res.end()
})

server.listen(8000)