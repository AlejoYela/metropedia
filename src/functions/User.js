// functions/User.js
import mongoose from './db.js';

const CertificateSchema = new mongoose.Schema({
    course: String,
    duration: Number,
    certificate: String,
    date: String,
});

const UserSchema = new mongoose.Schema({
    name: String,
    id: Number,
    certificates: [CertificateSchema],
});

// Usar una variable estática para evitar redefiniciones
const User = mongoose.models.User || mongoose.model('User', UserSchema, 'metropedia');

export default User;
