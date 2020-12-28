const mangoose = require('mongoose');

const clientSchema = mangoose.Schema({
    id_client : {type : String, required: true},
    nom_client : {type : String, required: true},
    prenom_client : {type : String, required: true},
    email : {type : String, required: true, default: Date.now},
    adresse_client : {type : String},
    tel : {type : Number}
});

module.exports = mongoose.model('Client',clientSchema);