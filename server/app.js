const express = require('express')
const cors = require('cors')
const app = express()
const port = 31415

const users = [
  {
    id: 0,
    name: 'test1',
    cardNumber: '00000231',
    cardType: 'ID-card'
  },
  {
    id: 1,
    name: 'test2',
    cardNumber: '00000232',
    cardType: 'ID-card'
  },
  {
    id: 2,
    name: 'test3',
    cardNumber: '00000233',
    cardType: 'ID-card'
  },
  {
    id: 3,
    name: 'test3',
    cardNumber: '00000234',
    cardType: 'ID-card'
  }
]

app.use(cors())

app.get('/users', (req, res) => res.json({users}))
app.get('/config', (req, res) => res.json({
  adminName: 'The Dark Lord',
  permissions: ['The Ring Of Power Owner', 'Master Of The Mordor']
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))