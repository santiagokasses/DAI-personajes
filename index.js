import express from "express"
import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js"
import index from "./src/pages/index.js"; 
var app = express()




const getPeliculas = async() => JSON.stringify(await new PeliculasService().getAll())
const getPersonajes = async() => JSON.stringify(await new PersonajeService().getAll())
app.get('/', async(req, res) => res.send(index(await getPeliculas(), await getPersonajes())))



app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})


// Ejecutamos la app escribiendo en la consola: node index.js
// Vamos al explorador y escribimos este link: http://localhost:3000
