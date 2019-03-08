module.exports = function (app) {

    app.get('/noticias', (req, res) =>{
        var connection = app.config.dbConnection()

        connection.query('SELECT * FROM NOTICIAS', (error, result) =>{
            res.render('noticias/noticias', {noticias:result} )
            if(error){
                console.log(error)
            }
        });

    })
}