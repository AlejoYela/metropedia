// functions/db.js
import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://andresalejoyela:990224Aayb++@metropedia-certificates.xuusk.mongodb.net/?retryWrites=true&w=majority&appName=metropedia-certificates';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));

export default mongoose;
