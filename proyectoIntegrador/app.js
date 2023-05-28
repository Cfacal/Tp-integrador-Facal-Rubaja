var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

const productosRouter = require('./routes/productos')
const indexRouter = require('./routes/index')
const usuariosRouter = require('./routes/usuarios')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter)

app.use(session({ 
  secret: "Mensaje secreto",
  resave: false,
  saveUninitialized: false}));

app.use(function(req, res, next){
  // console.log(req.cookies.recordarme)
  if(req.session.usuario !== undefined){
    res.locals.Logueado = true
    res.locals.usuario = req.session.usuario
  } else {
    res.locals.Logueado = false
  }
  return next()
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
