const mangoose = require('mongoose');

const commandeSchema = mangoose.Schema({
    id_commande : {type : Number, required: true},
    date_commande : {type : Date, required: true, default: Date.now},
    etat_commande : {type : String, required: true},
    total_commande : {type : Number, required: true}
});

module.exports = mongoose.model('Commande',commandeSchema);