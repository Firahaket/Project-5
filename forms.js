const http = require("http");
const fs = require('fs').promises;
const express = require('express')
const app = express();

const requestListener = function(req, res){
    fs.readFile(__dirname + "html/contact.html")
    .then(contents =>
        {
            res.setHeader("Content-Type", "multipart/form-data");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

app.listen(3005, () => {
  console.log('Server listening on http://localhost:3005 ...');
});