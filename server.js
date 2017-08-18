const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./db.js');
const url = require('./secret.js').url;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 8080;

// app.get("/quiz/:id", function(req,res){
// 	db.getQuestion(Number(req.params.id),res)
// })
//
// app.get("/quiz",function(req,res){
// 	db.getAll(res);
// })
//

//
// app.post('/quiz/answer',function(req,res){
// 	db.takeIntoAccount(Number(req.body.id), Number(req.body.answer),res);
// })
app.get('/',function(req,res){
	console.log('This Api was created by pustovitDmytro');
	db.addFilm(req);
});

app.listen(port, () => {
	console.log('We are live on ' + port);
		db.connect(url, function (err) {
  			if (err) {
   				console.log('Unable to connect to the mongoDB server. Error:', err);
  			}else{
    			console.log('Connection established');
    		}
		})
});