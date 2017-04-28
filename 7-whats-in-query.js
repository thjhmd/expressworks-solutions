let express = require('express')
let app = express()

app.get('/search', (req, res) => {
  let result = req.query
  res.send(result)
})

app.listen(process.argv[2])
