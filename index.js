import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js";


getAll()

async function getAll(){
    let svc = new PersonajeService();
    let data;

    data = await svc.getAll()
    console.log(data);

}