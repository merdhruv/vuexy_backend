const router = require("express").Router()

const Data = require("../model/data")


router.get("/", (req,res)=>{
    Data.findAll({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error " + err))
})
router.get("/sector", (req,res)=>{
    const sector = req.body.sector
    Data.find({sector : sector})
    .then(data =>res.json(data))
    .catch(err => res.status(400).json(err+"id not found"))
})

module.exports = router;