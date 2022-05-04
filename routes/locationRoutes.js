const express = require("express");
const router = express.Router();
const {Location, Trip} = require("../models/");
// Find all locations
router.get("/",(req,res)=>{
    try{
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// Find one location
router.get("/:id",(req,res)=>{
    try{
        const locationData = await Location.findByPk(req.params.id,{
            include: [{ model: Trip }],
        });
        res.status(200).json(locationData);
        } catch (err) {
            res.status(500).json(err);
        }
});
// Create a location
router.post("/",(req, res)=>{
    try{
        const locationData = await Location.create(req.body);
        res.status(200).json(locationData);
        } catch (err) {
            res.status(500).json(err);
        }
});
// Delete a location
router.delete("/:id",(req, res)=>{
    try{
        const locationData = await Location.destroy({
            where: {id: req.params.id}
        });
        res.status(200).json(locationData);
        } catch (err) {
            res.status(500).json(err);
        }
});


module.exports = router;