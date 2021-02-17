const express = require('express')
const router = express.Router()
const Car = require('./car-model')
const db = require('../../data/dbConfig')

router.get('/', (req,res) => {
    db('cars')
        .then((cars) => {
            res.json(cars)
        })
        .catch((err) => {
            res.status(500).json({message: 'failed to receive cars'})
        })
})



router.get('/:id', (req,res) => {
    const { id } = req.params
    db('cars').where({id}).first()
    .then((cars) => { 
        res.json(cars)
    })
    .catch((err) => {
        req.status(500).json({message: 'failed receiving cars '})
    })
})

router.post('/', (req,res) => {
    const carData = req.body
    db('cars').insert(carData)
    .then((ids) => {
        return db('cars').where({id: ids[0]})
    })
    .catch((err) => {
        res.status(500).json({message: 'failed to store data'})
    })
})





module.exports = router;