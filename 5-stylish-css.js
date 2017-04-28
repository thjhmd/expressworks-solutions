let express = require('express')
let app = express()
let path = require('path')

app.use(require('stylus').middleware('public'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.argv[2])
