import config from '../../dbconfig-env.js';
import sql from 'mssql';

class PersonajesService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: PersonajesService.getAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().query("SELECT id, nombre, imagen from Personaje");
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getPersonajesPORnombre = async (Nombre) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajesService.getPersonajesPORnombre(Nombre)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
            .input('pNombre', sql.VarChar(150), Nombre)
            .query('SELECT * FROM Personaje WHERE Nombre = @pNombre');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    getPersonajesPORedad = async (Edad) => {
        let returnEntity = null;
        let returnArray = null;
        console.log('Estoy en: PersonajesService.getPersonajesPORedad(Edad)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
            .input('pEdad', sql.Int, Edad)
            .query('SELECT * FROM Personaje WHERE Edad = @pEdad');
            returnEntity = result.recordsets[0][0];
            returnArray = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajesService.getById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('SELECT * FROM Personaje WHERE id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insert = async (personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajesService.insert(personaje)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .query(`INSERT INTO Personaje (Id, Nombre, Imagen, Edad, Peso, Historia, peliserie)
            VALUES ('${personaje.Id}', '${personaje.Nombre}', '${personaje.Imagen}', ${personaje.Edad}, ${personaje.Peso}, '${personaje.Historia}', '${personaje.Asociadas}')`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (personaje) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajesService.update(personaje)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query(`UPDATE Personaje SET 
                Nombre = '${personaje.Nombre}',
                Imagen = '${personaje.Imagen}',
                Edad = ${personaje.Edad},
                Peso = ${personaje.Peso},
                Historia = '${personaje.Historia}',
                peliserie = '${personaje.Asociadas}'
                WHERE IDd = ${personaje.id}`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PersonajesService.deleteById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('DELETE FROM Personaje WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default PersonajesService;