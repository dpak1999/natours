// PACKAGES
const express = require('express');

const app = express();

// ROUTES
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is working fine', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('this is the post route');
});

// SERVER SETUP
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
