import config from '../../dbconfig-env.js';
import sql from 'mssql';
import config from '../../dbconfig-env.js';

class PersonajesService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: PersonajesService.getAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().query("SELECT * from Personajes");
            returnArray = result.recordsets[0];
        }
        catch (error) {
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
            .query('SELECT * FROM Personajes WHERE id = @pId');
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
            .query(`INSERT INTO Personajes (Nombre, Imagen, Edad, Peso, Historia, Asociadas)
            VALUES ('${personaje.Nombre}', '${personaje.Imagen}', ${personaje.Edad}, ${personaje.Peso}, '${personaje.Historia}', '${personaje.Asociadas}')`);
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
                .query(`UPDATE Personajes SET 
                Nombre = '${personaje.Nombre}',
                Imagen = '${personaje.Imagen}',
                Edad = ${personaje.Edad},
                Peso = ${personaje.Peso},
                Historia = '${personaje.Historia}',
                Asociadas = '${personaje.Asociadas}'
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
            .query('DELETE FROM Personajes WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default PersonajesService;