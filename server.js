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

const app = require('./app');

/*SERVER SETUP */
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
