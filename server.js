/*IMPORTING PACKAGES */
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

// database connectivity
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB CONNECTED SUCCESSFULLY');
  });

// database
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  }
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'The forest hiker',
  rating: 4.7,
  price: 497
});

testTour
  .save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => {
    console.log('ERROR');
  });

const app = require('./app');

/*SERVER SETUP */
// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
