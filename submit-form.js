const fs = require('fs');
const path = require('path');

const formDataPath = path.join(__dirname, 'package.json');

// Simuler la réception des données du formulaire
const formData = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD
};

// Sauvegarder les données dans un fichier
fs.writeFileSync(formDataPath, JSON.stringify(formData, null, 2));

console.log('Form data saved successfully.');
