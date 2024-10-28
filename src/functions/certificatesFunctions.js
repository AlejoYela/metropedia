// src/functions/certificatesFunctions.js

const generatedCertificates = new Set();
const peopleData = []; // Arreglo para almacenar los datos de las personas

const cursos = [
    { titulo: "METROLOGÍA BÁSICA", duracion: 8 },
    { titulo: "VERIFICACIÓN DE MÉTODOS", duracion: 12 },
    { titulo: "REGLAS DE DECISIÓN", duracion: 6 },
    { titulo: "ISO/IEC 10012:2003 SISTEMAS DE GESTIÓN DE LA MEDICIÓN", duracion: 8 },
    { titulo: "VOCABULARIO INTERNACIONAL DE MERTOLOGÍA", duracion: 8 },
    { titulo: "ESTIMACIÓN DE LA INCERTIDUMBRE", duracion: 8 },
];

// Generar un ID único para la persona
function generateId() {
    return Math.floor(1000000000 + Math.random() * 9000000000);
}

// Generar un número de certificado único
function generateCertificate() {
    const prefix = "ME";
    let letters = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 4; i++) {
        letters += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    const number = Math.floor(1000 + Math.random() * 9000);
    const certificateNumber = `${prefix}-${letters}-${number}`;

    if (generatedCertificates.has(certificateNumber)) {
        return generateCertificate();
    } else {
        generatedCertificates.add(certificateNumber);
        return certificateNumber;
    }
}

// Crear el certificado para una persona
function addPersonCertificate(name, courseTitle) {
    const certificateNumber = generateCertificate();
    const course = cursos.find(c => c.titulo === courseTitle);

    if (!course) {
        console.error(`Curso no encontrado: ${courseTitle}`);
        return null;
    }

    let person = peopleData.find(p => p.name === name);
    if (!person) {
        person = {
            name: name,
            id: generateId(),
            certificates: []
        };
        peopleData.push(person);
    }

    const personCertificate = {
        course: courseTitle,
        duration: course.duracion,
        certificate: certificateNumber,
        date: new Date().toISOString()
    };

    person.certificates.push(personCertificate);
    return person;
}

export { addPersonCertificate };
