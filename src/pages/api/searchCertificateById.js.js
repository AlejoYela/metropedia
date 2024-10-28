// src/pages/api/searchCertificate.js
import User from '../path/to/User.js'; // Asegúrate de que la ruta sea correcta

export async function post(context) {
    const { request } = context;
    const { query } = await request.json();

    // Validación de entrada
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
        return new Response(JSON.stringify({ message: 'Ingrese un parámetro de búsqueda válido' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        // Busca un usuario que tenga un certificado o cédula que coincida con la consulta
        const user = await User.findOne({
            $or: [
                { 'certificates.certificate': query },
                { 'id': query } // o cualquier otro campo relevante
            ]
        });

        if (!user) {
            return new Response(JSON.stringify({ message: 'No se encontró ningún certificado.' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Devuelve el usuario encontrado, o puedes extraer solo los certificados si lo prefieres
        return new Response(JSON.stringify(user.certificates), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error al realizar la búsqueda' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
