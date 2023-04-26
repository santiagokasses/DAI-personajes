/*
const config = {
    user        : 'Personajes',
    password    : 'Personajes',
    server      : 'A-PHZ2-CEO-008', 
    database    : 'DAI-Personajes',
    options     : {
        trustServerCertificate  : true,
        trustedConnection       : true
    }
}

export default config;
*/

import 'dotenv/config'

const config = {
    user        : process.env.DB_USER,
    password    : process.env.DB_PASSWORD,
    server      : process.env.DB_SERVER,
    database    : process.env.DB_DATABASE,
    options     : {
        trustServerCertificate  : true,
        trustedConnection       : true,
    }
}

export default config;

Archivo .env
    DB_USER    	= "Personajes"
    DB_PASSWORD	= "Personajes"
    DB_SERVER  	= "A-PHZ2-CEO-008" 
    DB_DATABASE	= "DAI-Personajes"
