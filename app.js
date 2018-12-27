//var fs = require('fs');

// fs.stat("mytext.txt",function(err,state){
//     if(err)
//     {
//         return console.log(err);
//     }
//     console.log(state.isFile());
//     console.log(state.isDirectory());
//     console.log(state);
// });

// fs.readdir("f:/software/",function(err,files){
//     if(err)
//     {
//         return "error: "+console.error(err);
//     }
//     files.forEach(file => {
//         console.log(file);
//     });
// });

// debugger;
// //var QRCode = require('qrcode')
// var qr = require('qr-image');
// var qr_svg = qr.image('tops technologies', { type: 'png',size:20 }).pipe(require('fs').createWriteStream('img1.png'));
 
var http = require('http');
var express = require('express');
var server = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write("hi!");

    res.end();

});

server.listen(8080);