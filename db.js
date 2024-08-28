const { Client } = require('pg');

// Configuración de la conexión
const client = new Client({
    host: 'tunelessly-cerebral-labrador.data-1.use1.tembo.io',
    port: 5432,  
    user: 'postgres',  
    password: '4ywsmRNPTe32TkA2',  
    database: 'disenio',
    ssl: {
        rejectUnauthorized: false, 
    },  
});

// Conectar al cliente
client.connect()
    .then(() => console.log('Conectado a la base de datos PostgreSQL'))
    .catch(err => console.error('Error de conexión a la base de datos', err.stack));

// Exportar el cliente para usarlo en otras partes de la aplicación
module.exports = client;
