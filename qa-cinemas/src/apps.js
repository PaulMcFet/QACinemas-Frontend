var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var urlencoder = express.urlencoded({extended:false})

const methodoverride = require('method-override');
app.use(methodoverride('_method'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./models/moviemodel');
require('./models/sessionmodel');
require('./models/bookingmodel');

db_URL = "mongodb://localhost/appdb";
mongoose.connect(db_URL, {useUnifiedTopology: true,  useCreateIndex: true, useNewUrlParser: true}, function(){
    console.log('Successfully connected to db');
});

var movieController = require('./controllers/moviecontroller.js');
var sessionController = require('./controllers/sessioncontroller.js');
var bookingController = require('./controllers/bookingcontroller');

app.get('/movies', movieController.getAll);
app.get('/movies/find', movieController.getByName);
app.get('/movies/movie/:name', movieController.getMovie);

app.get('/sessions', sessionController.getAll);
app.get('/sessions/find', sessionController.findSessions);
app.get('/sessions/:name', sessionController.getSessionByMovie);
app.get('/session', sessionController.getSessionById);

app.post('/booking/add', bookingController.add);
app.get('/mybooking', function(req, res){
    res.render('booking.ejs');
});

app.get('/booking/check', bookingController.getBooking);
app.put('/booking/edit', urlencoder, bookingController.changeSeats);
app.delete('/booking/delete', urlencoder, bookingController.delete);

app.listen('3000');