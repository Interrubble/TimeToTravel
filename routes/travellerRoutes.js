const express = require("express");
const router = express.Router();
const { Traveller, Trip } = require("../models");
// Find all travellers
router.get("/",(req,res)=>{
    try{
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// Find one Traveller
router.get("/:id",(req,res)=>{
    try{
        const travellerData = await Traveller.findByPk(req.params.id,{
            include: [{ model: Trip }],
        });
        res.status(200).json(travellerData);
        } catch (err) {
            res.status(500).json(err);
        }
});
// Create a Traveller
router.post("/",(req, res)=>{
    try{
        const travellerData = await Traveller.create(req.body);
        res.status(200).json(travellerData);
        } catch (err) {
            res.status(500).json(err);
        }
});
// Delete a Traveller
router.delete("/:id",(req, res)=>{
    try{
        const travellerData = await Traveller.destroy({
            where: {id: req.params.id}
        });
        res.status(200).json(travellerData);
        } catch (err) {
            res.status(500).json(err);
        }
});

module.exports = router;