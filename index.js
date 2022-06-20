const express = require('express')
const studentData = require('./studentResults.json')
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Students Lists')

})

app.get('/students', (req, res) => {
  res.send(studentData)
})

app.listen(port, () => {
  console.log('app is listening to port 3000')
})