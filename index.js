import PersonajeService from "./src/services/Personajes-services.js"
import PeliculasService from "./src/services/Peliculas-services.js";

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