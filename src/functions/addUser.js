// src/functions/addUser.js
import User from './User.js';
import { addPersonCertificate } from './certificatesFunctions.js';

async function addUserToDB(name, courseTitle, id) {
    const newPerson = addPersonCertificate(name, courseTitle);
    newPerson.id = id; // Asignar el ID recibido al nuevo objeto de persona

    try {
        let user = await User.findOne({ id: newPerson.id });

        if (!user) {
            user = new User(newPerson);
        } else {
            user.certificates = newPerson.certificates;
        }        

        await user.save();
        
        // Log para verificar la creación del usuario
        console.log(`Usuario ${name} guardado con éxito. Datos:`, user);
        
    } catch (err) {
        console.error(`Error al guardar usuario en la base de datos: ${err}`);
    }
}

export default addUserToDB;
