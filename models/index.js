const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Location.hasMany(Trip,{
    foreignKey:'location_id',
    unique:false,
});
Traveller.hasMany(Trip,{
    foreignKey:'traveller_id',
    unique:false,
});


module.exports = {
    Location:Location,
    Traveller:Traveller,
    Trip:Trip,
}