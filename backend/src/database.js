const mongoose = require('mongoose');

// cadena de conexion
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://locahost/db_test';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexion a la base de datos con exito');
})

module.exports = connection;
