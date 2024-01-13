const express = require('express');
const proxy = require('http-proxy-middleware');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const pe = require('parse-error');
const cors = require('cors');
const path = require('path');
const v1 = require('./routes/v1');
const app = express();

const CONFIG = require('./config/config');
const cron = require('./config/cron');
const router = express.Router();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));
//Passport
app.use(passport.initialize());

const TNCUserController = require("./controllers/TncUser.controller");


//Log Env
console.log("Environment:", CONFIG.app)
//DATABASE
const models = require("./models");
models.sequelize.authenticate().then(() => {
  console.log('Connected to SQL database:', CONFIG.db_name);
})
  .catch(err => {
    console.error('Unable to connect to SQL database:', CONFIG.db_name, err);
  });
if (CONFIG.app === 'dev') {
  models.sequelize.sync();//creates table if they do not already exist
  // models.sequelize.sync({ force: true });//deletes all tables then recreates them useful for testing and development purposes
}

// CORS
app.use(cors());

app.use('/v1', v1);

router.get(
  "/sendEmailUser",
  TNCUserController.sendEmailUser
);


app.use('/', function (req, res) {
  res.statusCode = 200;//send the appropriate status code
  res.json({ status: "success", message: "Parcel Pending API", data: {} })
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({ error: err })
});



module.exports = app;

//This is here to handle all the uncaught promise rejections
process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error));
});