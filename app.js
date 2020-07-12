/*PACKAGES*/
const fs = require('fs');
const express = require('express');

/*VARIABLES*/
const app = express();
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

/*MIDDLEWARES */
app.use(express.json());

/*ROUTES*/

// Getting all tours
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  });
});

// Creating a tour
app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
});

/*SERVER SETUP*/
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
