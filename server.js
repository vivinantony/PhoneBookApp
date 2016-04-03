var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

require('./app/config/mongoose');
require('./app/model/contact');
require('./app/route/contact')(app);

app.get('*', function(req, res) {
    res.sendfile('./app/index.html');
});

var port = "3000";
app.listen(port);
console.log("Magic happens at " + port);