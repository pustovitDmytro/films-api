/**
 * Created by pusti on 20.08.2017.
 */
const multer  = require('multer');
const upload = multer();

module.exports = (app) => {
    app.get('/films', (req,res) =>
        require('./mongo/getFilms')(res)
    );
    app.post('/films',upload.fields([]),(req,res)=>
        require('./mongo/addFilm')(req,res)
    );
    app.delete('/films/:id',  (req, res) =>
        require('./mongo/deleteFilm')(req.params.id,res)
    );
};
