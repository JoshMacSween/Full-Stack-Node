const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const members = require('./Members')

const logger = require('./middleware/logger')

const app = express()

//Use middleware
// app.use(logger)

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Homepage route
app.get('/', (req, res) => res.render('index', {
  title: "Members Only App",
  members
}))

//Body Parser Middleware
app.use(express.json())

//Handle form submissions
app.use(express.urlencoded({ extended: false }))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/members', require('./routes/api/members'))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
