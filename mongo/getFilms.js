/**
 * Created by pusti on 28.08.2017.
 */
let state = require('./state');
module.exports = (res)=> {
    const collection = state.db.collection('films');
    collection.find().toArray((err,arr)=> {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            else res.send(arr);
        }
    );
};