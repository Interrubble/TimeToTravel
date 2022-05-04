const express = require("express");
const router = express.Router();
const { Location, Traveller, Trip } = require("../models/");
// Find all travellers
router.get("/",(req,res)=>{
    Traveller.findAll({

    })
    .then(dbTrav=>{
        res.json(dbTrav);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});
// Find one Traveller
router.get("/:id",(req,res)=>{
    Traveller.findByPk(req.params.id,{
        
    })
    .then(dbTrav=>{
        res.json(dbTrav);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});
// Create a Traveller
router.post("/",(req, res)=>{
    Traveller.create(req.body)
    .then(newTrav=>{
        res.json(newTrav);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});
// Delete a Traveller
router.delete("/:id",(req, res)=>{
    Traveller.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(delTrav=>{
        res.json(delTrav);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"An Error Occured",err});
    });
});

module.exports = router;