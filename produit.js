const mangoose = require('mongoose');

const produitSchema = mangoose.Schema({
    id_commande : {type : Number, required: true},
    nom_produit : {type : String, required: true},
    description : {type : String, required: true},
    prix : {type : Number, required: true},
    image : {data: Buffer, contentType: String, required: true},
    quantite_stock : {type : Number, required: true},
    fournisseur : {type : String, required: true}
});

module.exports = mongoose.model('Produit',produitSchema);