/**
 * Created by pusti on 20.08.2017.
 */
var multer  = require('multer');
var upload = multer();

module.exports = (app, db) => {
    app.get('/films', (req,res) =>
        db.getFilms(res)
    );
    app.post('/films',upload.fields([]),(req,res)=>
        db.addFilm(db,req,res)
    );
    app.delete('/films/:id',  (req, res) =>
        db.deleteFilm(db,req.params.id,res)
    );
};
