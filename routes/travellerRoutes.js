const express = require("express");
const router = express.Router();
const { Location, Traveller, Trip } = require("../models/");

// Find all trips
router.get("/",(req,res)=>{
    Trip.findAll({

    })
    .then(dbTrip=>{
        res.json(dbTrip);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});
// Find one Trip
router.get("/:id",(req,res)=>{
    Trip.findByPk(req.params.id,{
        
    })
    .then(dbTrip=>{
        res.json(dbTrip);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});
// Create a Trip
router.post("/",(req, res)=>{
    Trip.create(req.body)
    .then(newTrip=>{
        res.json(newTrip);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});
// Delete a Trip
router.delete("/:id",(req, res)=>{
    Trip.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(delTrip=>{
        res.json(delTrip);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});

module.exports = router;