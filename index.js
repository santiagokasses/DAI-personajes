import express from "express"
import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js"
import index from "./src/pages/index.js"
import peliculas from "./src/pages/peliculas.js"
import personajes from "./src/pages/personajes.js"
import Personaje from "./src/models/Personaje.js"
import Peliculas from "./src/models/Peliserie.js"
var app = express()

const getPeliculas = async() => JSON.stringify(await new PeliculasService().getAll())
const getPersonajes = async() => JSON.stringify(await new PersonajeService().getAll())
app.get('/', async(req, res) => res.send(index(await getPeliculas(), await getPersonajes())))
app.get('/GET/movies', async(req, res) => res.send(peliculas(await getPeliculas())))
app.get('/characters', async(req, res) => res.send(personajes(await getPersonajes())))
app.get('/characters/?t=' + Nombre, async(req, res) => res.send(personajes(await getPersonajesPORnombre(Nombre))))
app.get('/characters/?y=' + Edad, async(req, res) => res.send(personajes(await getPersonajesPORedad(Edad))))
app.get('/characters/?i=' + Id, async(req, res) => res.send(personajes(await getByIdPersonaje(Id))))

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})


var personaje = new Personaje()
personaje = {Nombre : "Hanz landa", Imagen: "https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/06/20/hans-landa.jpeg", Edad: "46", Peso: "70", Historia: "Nazi", peliserie: "breaking bad"}

var Kitty = new Personaje()
Kitty = {id: 10, imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', nombre:'Kitty', edad:10,peso:15,historia:'es un gato',peliserie:'Hello Kitty' }

var KittyDOS = new Personaje()
KittyDOS = {id: 10, imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', nombre:'Kitty EL GATO', edad:10,peso:15,historia:'es un gato FELIZ',peliserie:'Hello Kitty :)' }

////////////////Personajes//////////////////
async function getAllPersonaje(){
    let svc = new PersonajeService()
    let data
    data = await svc.getAll()
    console.log(data)
}
//getAllPersonaje()

async function getByIdPersonaje(id){
    let svc = new PersonajeService()
    let data
    data = await svc.getById(id)
    console.log(data)
}
getByIdPersonaje(5)

async function AddPersonaje(PersonajeNuevo){
    let svc = new PersonajeService()
    let data
    data = await svc.insert(PersonajeNuevo)
    console.log(data)
}
AddPersonaje(Kitty)

async function UpdatePersonaje(personajeModificado){
    let svc = new PersonajeService()
    let data
    data = await svc.update(personaje)
    console.log(data)
}
UpdatePersonaje(KittyDOS)

async function deleteByIdPersonaje(id){
    let svc = new PersonajeService()
    let data
    data = await svc.deleteById(id)
    console.log(data)
}
deleteByIdPersonaje(6)

////////////////PELICULAS//////////////////
let HelloKitty = new Peliculas
HelloKitty = {id: '10', imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', titulo: 'Hello Kitty', fechaCreacion: '20/02/2009', calificacion:'10', PersonajesAsociados: '10'}

let HelloKittyDOS = new Peliculas
HelloKittyDOS = {id: '10', imagen: 'https://static.wikia.nocookie.net/doblaje/images/b/b5/Kitianime.jpg/revision/latest/thumbnail/width/360/height/450?cb=20171001023505&path-prefix=es', titulo: 'Hello Kitty DOS', fechaCreacion: '20/02/2010', calificacion:'9', PersonajesAsociados: '10'}

async function getAllPelicula(){
    let svc = new PeliculasService()
    let data
    data = await svc.getAll()
    console.log(data)
}
//getAllPelicula()

async function getByIdPelicula(id){
    let svc = new PeliculasService()
    let data
    data = await svc.getById(id)
    console.log(data)
}
getByIdPelicula(5)

async function AddPelicula(PeliculaNueva){
    let svc = new PeliculasService()
    let data
    data = await svc.insert(PeliculaNueva)
    console.log(data)
}
AddPelicula(HelloKitty)

async function UpdatePelicula(peliculaModificada){
    let svc = new PeliculasService()
    let data
    data = await svc.update(personaje)
    console.log(data)
}
UpdatePelicula(HelloKittyDOS)

async function deleteByIdPelicula(id){
    let svc = new PeliculasService()
    let data
    data = await svc.deleteById(id)
    console.log(data)
}
deleteByIdPelicula(6)

// Ejecutamos la app escribiendo en la consola: node index.js
// Vamos al explorador y escribimos este link: http://localhost:3000
