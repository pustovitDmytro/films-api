/**
 * Created by pusti on 28.08.2017.
 */
let state = require('./state');
const ObjectID = require('mongodb').ObjectID;

module.exports = function(id,res){
    let collection = state.db.collection('films');
    const obj= {_id:ObjectID(id)};
    try {
        collection.deleteOne(obj)
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.sendStatus(200);
};