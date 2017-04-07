var express = require('express')
var app = express()
var path = require('path')

// template engine configs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// routers
var indexRouter = require('./routers/index')
var usersRouter = require('./routers/users')

app.use('/', indexRouter)
app.use('/users', usersRouter)

// custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('something broke!')
})

app.listen(3000)
