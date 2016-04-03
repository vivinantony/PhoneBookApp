var mongoose = require('mongoose'),
    contactModel = require('../model/contact');

mongoose.connect('mongodb://localhost/contactdb');
contactModel.createDefaultContacts();