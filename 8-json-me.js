var express = require('express')
var fs = require('fs')
var app = express()

var port = process.argv[2]
var filepath = process.argv[3]

app.get('/books', (req, res) => {
  fs.readFile(filepath, 'utf-8', (err, content) => {
    if(err) {
      console.log(err)
    } else {
      let jsonData = JSON.parse(content)
      res.json(jsonData)
    }
  })
})

app.listen(port)

// Official solution

/*
app.get('/books', (req, res) => {
  fs.readFile(filepath, (err, content) => {
    if(err) {
      return res.sendStatus(500)
    }
    try {
      let books = JSON.parse(content)
    } catch(err) {
      return res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(port)
*/
