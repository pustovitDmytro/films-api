/**
 * Created by pusti on 28.08.2017.
 */
let state = require('./state');

module.exports = function(req,res){
    const {title,year,format,stars} = req.body;
    let collection = state.db.collection('films');
    collection.count({title,year,format,stars}, (err, count) => {
        if (count > 0)
            return res.send("Film already exist");
        else {
            try {
                collection.insertOne({title, year, format, stars});
            }
            catch (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    });
};