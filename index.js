import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/peliculas-services.js";


getAll()

async function getAll(){
    let svc = new PeliculasService();
    let data;

    data = await svc.getAll()
    console.log(data);

    //console.log(data[0].Id);
    //console.log(data[0].id);s
    //console.log(data[0].Id);
}