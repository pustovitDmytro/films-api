/**
 * Created by pusti on 20.08.2017.
 */
const express = require('express');
const app = express();

const url = require('./secret.js');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

require('./routes.js')(app);

const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log('server running on port ' + port);
    require('./mongo/connect')(url, err =>
        (err)?
            console.log('Unable to connect to the mongoDB server. Error:', err):
            console.log('Connection established'));
    });