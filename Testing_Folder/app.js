// var ad = require('./add.js')

// // var http = require('http')

// // http.createServer(function(req, res){
// //     res.writeHead(200, {'Content-Type': 'text/html'})
// //     res.end("Welcome back")
// // }).listen(8080)

// result = ad.abb(4,5)

// console.log("The output is " + result)

// var fs = require('fs')

// // fs.readFile('Testing_Folder/add.js', 'utf8', function(err, data){
// //     console.log(data)
// // })

// // fs.writeFile('Testing_Folder/adds.js', 'console.log("done")', function(err){
// //     console.log('data saved')
// // })

// // fs.appendFile('Testing_Folder/adds.js', 'console.log("done")', function(err){
// //     console.log('data saved again')
// // })

// fs.unlink('Testing_Folder/adds.js', function(err){
//     console.log("Deleted")
// })

const express = require('express')

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/alien', function(req, res){
    const id = req.query.id
    res.send('Welcome back Alien ' + id)
})

app.get('/alien/:id', function(req, res){
    const i = req.params.id
    res.send('Hey No. ' + i)
})

app.listen(3000, function(req, res){
    console.log('Running')
})
