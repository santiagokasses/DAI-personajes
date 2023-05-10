import express from "express"
import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js"
import index from "./src/pages/index.js"; 
import peliculas from "./src/pages/peliculas.js";
import personajes from "./src/pages/personajes.js";
import Personajes from "./src/services/Personajes-services.js";
var app = express()

const getPeliculas = async() => JSON.stringify(await new PeliculasService().getAll())
const getPersonajes = async() => JSON.stringify(await new PersonajeService().getAll())
app.get('/', async(req, res) => res.send(index(await getPeliculas(), await getPersonajes())))
app.get('/GET/movies', async(req, res) => res.send(peliculas(await getPeliculas())))
app.get('/characters', async(req, res) => res.send(personajes(await getPersonajes())))

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

let Kitty = new Personajes
Kitty = {id: '10', imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', nombre:'Kitty', edad:'10',peso:'15kg',historia:'es un gato',peliserie:'Hello Kitty' }
AddPersonaje(Kitty);

var deleteid = 6
var id = 6
var personaje = new Personajes
personaje = {Nombre : "Hanz landa", Imagen: "https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/06/20/hans-landa.jpeg", Edad: "46", Peso: "70", Historia: "Nazi", peliserie: "breaking bad", IDd: `${id}`}
console.log(personaje)
//deleteById(deleteid)
//getAll()
//getById(10)
//Update(id)
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
async function AddPersonaje(PersonajeNuevo){
    let svc = new PersonajeService();
    let data;
    data = await svc.insert(PersonajeNuevo)
    console.log(data);
}
async function Update(id){
    let svc = new PersonajeService();
    let data;
    let idPersonaje
    idPersonaje = getById(id)
    data = await svc.update(personaje)
    console.log(data);
}

////////////////PELICULAS//////////////////
async function AddPelicula(PeliculaNueva){
    let svc = new PeliculasService();
    let data;
    data = await svc.insert(PeliculaNueva)
    console.log(data);
}


// Ejecutamos la app escribiendo en la consola: node index.js
// Vamos al explorador y escribimos este link: http://localhost:3000
