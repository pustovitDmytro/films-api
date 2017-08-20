/**
 * Created by pusti on 20.08.2017.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./db.js');
const url = require('./secret.js').url;
require('./routes.js')(app, db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('server running on port ' + port);
    db.connect(url, err =>
        (err)?
            console.log('Unable to connect to the mongoDB server. Error:', err):
            console.log('Connection established'));
    });