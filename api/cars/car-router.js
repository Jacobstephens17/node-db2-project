const express = require("express");
const router = express.Router();
const Car = require("./car-model");
const mw = require('../middleware/middleware')


router.get("/", async (req, res) => {
  try {
    const data = await Car.getAll();
        res.status(200).json(data);
    }catch (err) {
        res.status(500).json({ message: err });
    }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Car.getById(req.params.id);
        res.status(201).json(data);
  }catch (err) {
        res.status(500).json({ message: err });
  }
});

router.post("/", mw.validatePost, mw.uniqueVIN, async (req, res) => {
  try {
    const car = req.body;
    const data = await Car.create(car);
        res.status(201).json(data);
  }catch (err) {
        res.status(500).json({ message: err });
  }
});

router.put("/:id", mw.validatePostId, mw.validatePost, async (req, res) => {
  try {
    const changes = req.body;
    const { id } = req.params;
    const data = await Car.update(id, changes);
    const updatedCar = await Car.getById(id);
        if(data < 1) {
            res.status(500).json({ message: "Server Error" });
        } else {
            res.status(201).json(updatedCar);
        }
        }catch (err) {
            res.status(500).json({ message: err });
    }
});

router.delete("/:id", mw.validatePostId, async (req, res) => {
  try {
    const { id } = req.params;
        await Car.deleteItem(id);
        res.status(200).json({ message: `Successfully deleted car with id: ${id}` })
    }catch (err) {
        res.status(500).json({ message: err });
  }
});

module.exports = router;