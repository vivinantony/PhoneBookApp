var mongoose = require('mongoose'),
    Contact = mongoose.model('Contact');

module.exports = function(app) {
    app.get('/api', function(req, res, next) {
        Contact.find().exec(function(err, data) {
            if(err) {
                return next(err);
            }
            res.json(data);
        });
    });

    app.post('/api', function(req, res, next) {
        var contact = new Contact({
            fname: req.body.fname,
            lname: req.body.lname
        });
        contact.save(function(err, data) {
            if(err) {
                return next(err);
            }
            res.status(201).json(data);
        });
    });

    app.get('/api/:id', function(req, res) {
        Contact.findById(req.params.id, function(err, data){
            res.json(data);
        });
    });

    app.delete('/api/:id', function(req, res) {
        Contact.findByIdAndRemove(req.params.id, function(err, data) {
            res.json(data);
        });
    });

    app.put('/api/:id', function(req, res, next) {
        Contact.findById(req.params.id, function(err, data) {
            data.fname = req.body.fname;
            data.lname = req.body.lname;
            data.updated = Date.now();
            data.save(function(err, data) {
                if(err) {
                    return next(err);
                }
                res.status(201).json(data);
            });
        });
    });
};