var http = require('http')

http.createServer( (req, res) =>{
    var categoria = req.url
    res.end("<html><body>Teste de server node</body></html>")
}).listen(3000)