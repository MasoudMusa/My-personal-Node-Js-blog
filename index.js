var express = require('express'),
    app = express(),
    logger = require('morgan'),
    PORT = 3000,
    path = require('path'),
    indexRouter = require('./routes/index');

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use('/', indexRouter);

app.use(function (req, res, next) {
    var err = new Error("Not found!");
    err.status = 404;
    next(err);
});

app.listen(PORT, function () {
    console.log(`${app.get('env')} server running on http://127.0.0.1:${PORT}/ \nPress CTR+C to quit.`);
});