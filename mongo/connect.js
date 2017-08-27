/**
 * Created by pusti on 28.08.2017.
 */
const MongoClient = require('mongodb').MongoClient;
let state = require('./state');

module.exports = function(url,done){
    if(state.db){
        return done();
    }
    MongoClient.connect(url,function(err,db){
        if(err){
            return done(err);
        }
        state.db = db;
        done();
    });
}