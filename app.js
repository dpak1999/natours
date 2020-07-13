/*PACKAGES*/
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

/*VARIABLES*/
const app = express();

/*MIDDLEWARES */
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Middlewares working fine');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/*ROUTES*/

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

/*EXPORTS*/
module.exports = app;
