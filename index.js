import express from "express"
import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js"
import index from "./src/pages/index.js"; 
import Personaje from "./src/models/Personaje.js";
var app = express()

const getPeliculas = async() => JSON.stringify(await new PeliculasService().getAll())
const getPersonajes = async() => JSON.stringify(await new PersonajeService().getAll())
app.get('/', async(req, res) => res.send(index(await getPeliculas(), await getPersonajes())))



app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})



var personaje = new Personaje
personaje = {Nombre : "Hanz landa", Imagen: "https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/06/20/hans-landa.jpeg", Edad: "46", Peso: "70", Historia: "Nazi", peliserie: "breaking bad", IDd: `${id}`}
var deleteid = 6
var id = 1
//deleteById(deleteid)
//getAll()
//getById(id)
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
async function Update(id){
    let svc = new PersonajeService();
    let data;
    getById(id)
    data = await svc.update(personaje)
    console.log(data);
}


// Ejecutamos la app escribiendo en la consola: node index.js
// Vamos al explorador y escribimos este link: http://localhost:3000
