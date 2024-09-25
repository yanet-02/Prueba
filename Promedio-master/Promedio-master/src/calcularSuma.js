// src/calcularSuma.js

// Versión con defecto
function calcularSumaDefecto(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma; // Defecto: si no se pasa un array, podría arrojar un error
}


