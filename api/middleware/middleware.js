const express = require('express')
const Car = require('../cars/car-model')


const validatePost = (req, res, next) => {
    if (!req.body) {
      res.status(400).json({ message: "Car required" });
    } else if (!req.body.VIN) {
      res.status(400).json({ message: "VIN required" });
    } else if (!req.body.make) {
      res.status(400).json({ message: "make required" });
    } else if (!req.body.model) {
      res.status(400).json({ message: "model required" });
    } else if (!req.body.mileage) {
      res.status(400).json({ message: "mileage required" });
    }else {
      next();
    }
  };
  
  const uniqueVIN = async (req, res, next) => {
    try {
      const data = await Car.getAll();
      data.forEach(car => {
        if(car.VIN == req.body.VIN) {
          res.status(400).json({ message: "Error: VIN # already exists, try again " })
        }
      })
      next();
    } catch {
      res.status(500).json({ message: "Server error" });
    }
  }
  
  const validatePostId = async (req, res, next) => {
    try {
      const data = await Car.getById(req.params.id);
      if (!data) {
        res.status(404).json({ message: "Invalid ID, try again " })
      } else {
        next();
      }
   } catch {
      res.status(500).json({ message: "Server error, cannot find car" });
   }
  }
  

  module.exports = {
      validatePost,
      uniqueVIN,
      validatePostId,
  }