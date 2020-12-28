const mangoose = require('mongoose');

const utilisateurSchema = mangoose.Schema({
    id_utilisateur : {type : String, required: true},
    nom_utilisateur : {type : String, required: true, index: { unique: true }},
    mdp : {type : String, required: true},
    role : {type : String, enum: ['ADMIN', 'USER'], default: 'USER'}
});

module.exports = mongoose.model('Utilisateur',utilisateurSchema);