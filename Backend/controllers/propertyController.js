const express = require('express')

const router = express.Router();
const property = require('../Models/property_model')

router.post('/', async (req, res) => {

  const posting = new property({
    income: req.body.income,
    tax: req.body.tax,
    grocery: req.body.grocery,
    water: req.body.water,
    travel: req.body.travel,
    other: req.body.other

  })

  try {
    const testing = await posting.save()
    res.json(testing)
    console.log(req.body.grocery)
    console.log(req.body.water)
    console.log(req.body.travel)
    console.log(req.body.other)
  } catch (error) {
    res.json({ message: error.message })
  }
})

// router.get('/getAll', async (req, res) => {
//   try {
//     const reader = await property.find();

//     res.json(reader)
//   } catch (error) {
//     res.json({ message: error.message })
//   }
// })

module.exports = router;