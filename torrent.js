 let lookup = {}

 const hostname = '0.0.0.0';
 const port = process.env.PORT || 0;

 var Server = require('bittorrent-tracker').Server

 var server = new Server({
     udp: false,
     http: true, 
     ws: true, 
     stats: true, 
 })

 server.on('error', function (err) {
 })

 server.on('warning', function (err) {
 })

 server.on('listening', function () {
     console.log('Signal server http port:' + server.http.address().port)
     console.log('Signal server ws port:' + server.ws.address().port)
 })

 server.on('start', function (addr) {
     console.log('got start message from ' + addr)
     Object.keys(server.torrents).forEach(hash => {
         lookup[server.torrents[hash].infoHash] = server.torrents[hash].peers.length
     })
 })

 server.on('complete', function (addr) {})
 server.on('stop', function (addr) {})

 server.listen(port, hostname, 'listening')