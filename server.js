/*IMPORTING PACKAGES */
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// console.log(process.env);

/*SERVER SETUP */
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
