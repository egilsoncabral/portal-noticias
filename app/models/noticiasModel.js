module.exports = function (){

    this.getNoticias = (connection, callback) => {
        connection.query('SELECT * FROM NOTICIAS', callback);
    }

    this.getNoticia = (connection, callback) => {
        connection.query('SELECT * FROM NOTICIAS where id_noticia = 1', callback);
    }

    return this;

}