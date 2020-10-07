const express = require('express')
const path = require('path')

const app = express()

const members = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'JaneDoe@gmail.com',
    status: 'active',
  },
  {
    id: 2,
    name: 'Jebadiah Doesephius',
    email: 'J.Doesephius@hotmail.com',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'David Icke',
    email: 'LizardBoy@yahoo.com',
    status: 'active',
  },
]

app.get('/api/members', (req, res) => {})

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
