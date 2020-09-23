const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// configure middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // i.e. main.js, or main.css file
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));

  // Express will serve up index.html file
  // if it doesn't recognize the requesting route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // respond with error message
  res.status(err.status || 500);
  res.json({
    error: err.message
  });
});

const port = process.env.PORT || 5000;

// listen to port
app.listen(port, () => console.log(`Server running on port ${port}.`));