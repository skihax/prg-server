const express = require('express');
const app = express();
const port = 5002;
const Gamedig = require('gamedig');
const ips = {"deagle":'63.251.42.42'};

app.get('/servers', (req, res) => {
    let serverName = req.query.server;
    let serverIp = ips[serverName];
    Gamedig.query({
        type: 'csgo',
        host: serverIp
    }).then((state) => {
        res.send(state);
    }).catch((error) => {
        res.send(error);
    });
})

app.listen(port, () => {
  console.log(`prg server listening at http://localhost:${port}`)
})