const path = require('path')
const express = require('express')
const morgan = require('morgan')

const handlebars = require('express-handlebars')

const app = express()
const port = 3008;

app.use(express.static(path.join(__dirname, 'public')))

console.log("PATH", path.join(__dirname, 'resources/views'))

// HTTP logger
app.use(morgan('combined'))


// Templates engine
app.engine('hbs', handlebars.engine({ 
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})