// backend/controllers/carController.js
const Car = require("../models/car");

exports.getAllCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

exports.getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) return res.status(404).json({ message: "Car not found" });
  res.json(car);
};

exports.createCar = async (req, res) => {
  const newCar = new Car(req.body);
  await newCar.save();
  res.status(201).json(newCar);
};

exports.updateCar = async (req, res) => {
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedCar);
};

exports.deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: "Car deleted successfully" });
};
