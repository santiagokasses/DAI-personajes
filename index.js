var express = require('express')
import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js";

var app = express()

// Creamos una ruta para el camino por defecto
app.get('/', function(req, res) {
    res.send('Soy la Home Page!');
})


app.get('/about', function(req, res) {
    res.send('Soy la pagina del about!');
})


// Iniciamos el servidor
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})

// Ejecutamos la app escribiendo en la consola: node index.js

// Vamos al explorador y escribimos este link: http://localhost:3000


var deleteid = 6
var id = 1
//deleteById(deleteid)
//getAll()
getById(id)
async function deleteById(deleteid){
    let svc = new PersonajeService();
    let data;

    data = await svc.deleteById(deleteid)
    console.log(data);

}
async function getAll(){
    let svc = new PersonajeService();
    let data;

    data = await svc.getAll()
    console.log(data);
}
async function getById(id){
    let svc = new PersonajeService();
    let data;

    data = await svc.getById(id)
    console.log(data);

}