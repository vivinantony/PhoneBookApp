var mongoose = require('mongoose'),
    contactModel = require('../model/contact');

mongoose.connect('mongodb://localhost/contactdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db not connected...'));
db.once('open', function callback() {
    console.log('(contactdb) db opened');
});

contactModel.createDefaultContacts();