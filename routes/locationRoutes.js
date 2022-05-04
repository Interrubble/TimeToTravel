const express = require("express");
const router = express.Router();
const {Location,Traveller,Trip} = require("../models/");
// Find all locations
router.get("/",(req,res)=>{
    Location.findAll({

    })
    .then(dbLoc=>{
        res.json(dbLoc);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});
// Find one location
router.get("/:id",(req,res)=>{
    Location.findByPk(req.params.id,{
        
    })
    .then(dbLoc=>{
        res.json(dbLoc);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});
// Create a location
router.post("/",(req, res)=>{
    Location.create(req.body)
    .then(newLoc=>{
        res.json(newLoc);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});
// Delete a location
router.delete("/:id",(req, res)=>{
    Location.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(delLoc=>{
        res.json(delLoc);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});

module.exports = router;