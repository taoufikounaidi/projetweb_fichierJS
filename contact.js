const mangoose = require('mongoose');

const contactSchema = mangoose.Schema({
    id_contact : {type : String, required: true},
    message : {type : String, required: true}
});

module.exports = mongoose.model('Contact',contactSchema);