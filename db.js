const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
let state = {
    db: null
};

exports.deleteFilm = function(db,id,res){
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


exports.addFilm = function(db,req,res){
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

exports.getFilms = (res)=> {
    const collection = state.db.collection('films');
    collection.find().toArray((err,arr)=> {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            } else res.send(arr);
        }
    );
};
exports.connect = function(url,done){
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