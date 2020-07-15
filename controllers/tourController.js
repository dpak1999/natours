/*IMPORTING PACKAGES */
const Tour = require('./../models/tourModel');

/*MIDDLEWARES */

// Params middleware

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
  next();
};

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
exports.createTour = (req, res) => {
  // res.status(201).json({
  //   status: 'success',
  //   data: {
  //     tour: newTour
  //   }
  // });
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
