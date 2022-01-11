const express = require('express');
const app = express();
//const https = require('https');
const http = require('http');
const fs = require('fs');
const port = 8080;
var cors = require('cors')
const Gamedig = require('gamedig');
const ips = {"deagle":'51.81.6.196'};

/*var key = fs.readFileSync('/etc/letsencrypt/live/prgaming.net-0001/privkey.pem');
var cert = fs.readFileSync('/etc/letsencrypt/live/prgaming.net-0001/cert.pem');
var options = {
  key: key,
  cert: cert
}; */

app.use(cors())

app.get('/servers', (req, res) => {
    let serverName = req.query.server;
    let serverIp = ips[serverName];
    Gamedig.query({
        type: 'csgo',
        host: serverIp
    }).then((state) => {
        res.send(state);
    }).catch((error) => {
        res.statusCode = 500;
        res.send(error);
    });
})

//var server = https.createServer(options, app);
var server = http.createServer(app);
server.listen(port, () => {
    console.log("server starting on port : " + port)
  });