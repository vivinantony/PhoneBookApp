var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    fname: String,
    lname: String,
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var Contact = mongoose.model('Contact', contactSchema);

function createDefaultContacts() {
    Contact.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Contact.create({fname: 'Blessina', lname: 'Nissi'});
            Contact.create({fname: 'Vivin', lname: 'Antony'});
        }
    })
}

exports.createDefaultContacts = createDefaultContacts;