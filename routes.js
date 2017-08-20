/**
 * Created by pusti on 20.08.2017.
 */
module.exports = (app, db) => {
    app.get('/films', (req,res) =>
        db.getFilms(res)
    );
    app.post('/films/add',(req,res)=>
        db.addFilm(req,res)
    );
};
