const express = require('express')
const app = express()

//routes
app.get('/', (req, res) =>
 {
    res.send('hello world')
 })

 const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))