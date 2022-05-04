const express = require("express");
const router = express.Router();
const { Trip } = require("../models");

// Create a trip
router.post("/",(req, res)=>{
    try{
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData);
        } catch (err) {
            res.status(500).json(err);
        }
});
// Delete a trip
router.delete("/:id",(req, res)=>{
    try{
        const tripData = await Trip.destroy({
            where: {id: req.params.id}
        });
        res.status(200).json(tripData);
        } catch (err) {
            res.status(500).json(err);
        }
});


module.exports = router;