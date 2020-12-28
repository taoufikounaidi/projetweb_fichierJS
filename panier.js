const mangoose = require('mongoose');

const panierSchema = mangoose.Schema({
    date_creation : {type : Date, required: true, default: Date.now},
});

module.exports = mongoose.model('Panier',panierSchema);