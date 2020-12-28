const mangoose = require('mongoose');

const compteSchema = mangoose.Schema({
    id_compte : {type : String, required: true},
    adresse_facturation : {type : String, required: true},
    date_creation : {type : Date, required: true, default: Date.now},
    date_fermeture : {type : Date, required: true, default: Date.now},
    is_fermer : {type : Boolean, required: true}
});

module.exports = mongoose.model('Compte',compteSchema);