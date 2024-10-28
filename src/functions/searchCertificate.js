import db from './db.js'; // Configuración de conexión a MongoDB
import Certificate from './models/Certificate.js'; // Esquema de certificados

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ message: 'Se requiere un número de cédula o certificado' });
    }

    try {
        await db.connect();
        
        // Buscar por cédula o número de certificado
        const user = await Certificate.findOne({
            $or: [
                { id: query }, // Búsqueda por cédula
                { 'certificates.certificate': query } // Búsqueda por número de certificado
            ]
        });
        
        if (!user) {
            return res.status(404).json({ message: 'Certificado no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al buscar el certificado' });
    }
}
