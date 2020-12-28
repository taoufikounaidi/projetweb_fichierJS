const mangoose = require('mongoose');

const categorieSchema = mangoose.Schema({
    id_categorie : {type : Number, required: true},
    nom_categorie : {type : String, required: true},
    description : {type : String, required: true}
});

module.exports = mongoose.model('Categorie',categorieSchema);