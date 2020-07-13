/*IMPORTING PACKAGES */
const app = require('./app');

/*SERVER SETUP */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
