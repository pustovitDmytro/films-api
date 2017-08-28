/**
 * Created by pusti on 28.08.2017.
 */
let state = require('./state');

module.exports = function(req,res){
    const {title,year,format,stars} = req.body;
    let collection = state.db.collection('films');
    collection.count({title,year,format,stars}, (err, count) => {
        if (count > 0)
            return res.sendStatus(409);//Conflict: Film already exist
        else {
            try {
                collection.insertOne({title, year, format, stars});
            }
            catch (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(201);//OK: New film has been successfully added
        }
    });
};