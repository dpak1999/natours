/*IMPORTING PACKAGES */
const Tour = require('./../models/tourModel');

/*ROUTE HANDLERS */

// Getting all tours
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  // res.status(200).json({
  //   status: 'success',
  //   requestedAt: req.requestTime,
  //   results: tours.length,
  //   data: { tours }
  // });
};

// Getting a specific tour
exports.getTour = (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find(e => e.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tours: tour
  //   }
  // });
};

// Creating a tour
exports.createTour = async (req, res) => {
  const newTour = await Tour.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour
    }
  });
};

// Updating a tour
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here..>'
    }
  });
};

// Deleteing a tour
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
