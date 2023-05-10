import express from "express"
import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js"
import index from "./src/pages/index.js"; 
import peliculas from "./src/pages/peliculas.js";
import personajes from "./src/pages/personajes.js";
var app = express()

const getPeliculas = async() => JSON.stringify(await new PeliculasService().getAll())
const getPersonajes = async() => JSON.stringify(await new PersonajeService().getAll())
app.get('/', async(req, res) => res.send(index(await getPeliculas(), await getPersonajes())))
app.get('/peliculas', async(req, res) => res.send(peliculas(await getPeliculas())))
app.get('/personajes', async(req, res) => res.send(personajes(await getPersonajes())))

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

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
async function AddPersonaje(PersonajeNuevo){
    let svc = new PersonajeService();
    let data;
    data = await svc.insert(PersonajeNuevo)
    console.log(data);
}
async function AddPelicula(PeliculaNueva){
    let svc = new PeliculasService();
    let data;
    data = await svc.insert(PeliculaNueva)
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


// Ejecutamos la app escribiendo en la consola: node index.js
// Vamos al explorador y escribimos este link: http://localhost:3000
