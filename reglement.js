const mangoose = require('mongoose');

const reglementSchema = mangoose.Schema({
    id_reglement : {type : Number, required: true},
    date_reglement : {type : Date, required: true, default: Date.now},
    montant_total : {type : Number, required: true},
    details : {type : String, required: false}
});

module.exports = mongoose.model('Reglement',reglementSchema);