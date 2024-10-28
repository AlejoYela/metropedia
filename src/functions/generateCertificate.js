import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://andresalejoyela:990224Aayb++@metropedia-certificates.xuusk.mongodb.net/?retryWrites=true&w=majority&appName=metropedia-certificates";
const client = new MongoClient(uri);

export async function post(context) {
    const { request } = context;
    const { query } = await request.json();

    if (!query) {
        return new Response(JSON.stringify({ message: 'Ingrese un parámetro de búsqueda válido' }), {
            status: 400,
        });
    }

    try {
        await client.connect();
        const database = client.db('nombreDeTuBD'); // Cambia esto por el nombre de tu BD
        const collection = database.collection('nombreDeTuColección'); // Cambia esto por el nombre de tu colección

        const result = await collection.findOne({
            $or: [
                { cedula: query },
                { certificado: query }
            ]
        });

        if (!result) {
            return new Response(JSON.stringify({ message: 'No se encontró ningún certificado.' }), {
                status: 404,
            });
        }

        return new Response(JSON.stringify(result), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error al realizar la búsqueda' }), {
            status: 500,
        });
    } finally {
        await client.close();
    }
}
