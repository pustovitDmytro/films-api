/**
 * Created by pusti on 20.08.2017.
 */
module.exports = (app, db) => {
    app.get('/films',function(req,res){
        db.getFilms(res);
    });

};
