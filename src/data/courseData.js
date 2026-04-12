import { block1 } from './block1.js';
import { block2 } from './block2.js';
import { block3 } from './block3.js';
import { block4 } from './block4.js';
import { block5 } from './block5.js';

export const courseData = {
    blocks: [
        block1,
        block2,
        block3,
        block4,
        block5
    ],
    vocabulary: {
        id: "vocab",
        title: "Repaso Vocabulario y Palabras",
        description: "Repaso de palabras clave y traducciones del cántabru.",
        categories: [
            {
                name: "Palabras Varias",
                words: [
                    { castellano: "Pero", cantabru: "Piru", example: "" },
                    { castellano: "Como", cantabru: "Cumu", example: "" },
                    { castellano: "Así", cantabru: "Asina", example: "" },
                    { castellano: "Sin", cantabru: "Ensín", example: "" },
                    { castellano: "Mucho/En grandes cantidades", cantabru: "Asgaya", example: "" },
                    { castellano: "Todo seguido/Uno tras otro", cantabru: "Arronti", example: "" },
                    { castellano: "O", cantabru: "U", example: "" },
                    { castellano: "Aquí", cantabru: "Equí", example: "" },
                    { castellano: "Desde", cantabru: "Dendi", example: "" },
                    { castellano: "Tengo", cantabru: "Teno", example: "" },
                    { castellano: "Tengo que", cantabru: "Teno de/Tengo de", example: "" },
                    { castellano: "Sí", cantabru: "Jí", example: "" },
                    { castellano: "Comprar", cantabru: "Mercáu", example: "" },
                    { castellano: "Fútbol", cantabru: "Júrbul", example: "" }
                ]
            },
            {
                name: "Colores",
                words: [
                    { castellano: "Rojo", cantabru: "Encarnáu/Coloráu/Roju", example: "" },
                    { castellano: "Verde", cantabru: "Verdi", example: "" },
                    { castellano: "Amarillo", cantabru: "Amarillu", example: "" },
                    { castellano: "Azul", cantabru: "Azul", example: "" },
                    { castellano: "Morado", cantabru: "Moráu", example: "" },
                    { castellano: "Gris", cantabru: "Pedrés", example: "" },
                    { castellano: "Marrón", cantabru: "Pardu", example: "" },
                    { castellano: "Blanco", cantabru: "Brancu", example: "" },
                    { castellano: "Negro", cantabru: "Negru", example: "" },
                    { castellano: "Rosa", cantabru: "Rosa", example: "" },
                    { castellano: "Naranja", cantabru: "Naranja", example: "" }
                ]
            },
            {
                name: "Pueblo",
                words: [
                    { castellano: "Prado", cantabru: "Práu", example: "" },
                    { castellano: "Bosque", cantabru: "Monti", example: "" },
                    { castellano: "Cartel", cantabru: "Endicaor/Rétulu", example: "" },
                    { castellano: "Árbol", cantabru: "Árbul", example: "" },
                    { castellano: "Brote", cantabru: "Armuellu", example: "" },
                    { castellano: "Huerta", cantabru: "Güerta", example: "" },
                    { castellano: "Suelo/Prado", cantabru: "Verdi", example: "" },
                    { castellano: "Empinado", cantabru: "Pindiu", example: "" },
                    { castellano: "Vacío/Abismo", cantabru: "Abizu", example: "" },
                    { castellano: "Zarza", cantabru: "Barda", example: "" },
                    { castellano: "Roble", cantabru: "Cajiga", example: "" },
                    { castellano: "Acacia", cantabru: "Acaciu", example: "" },
                    { castellano: "Abedul", cantabru: "Abidul", example: "" },
                    { castellano: "Arbusto", cantabru: "Setu", example: "" },
                    { castellano: "Muro", cantabru: "Moiru", example: "" },
                    { castellano: "Valla", cantabru: "Cierru", example: "" },
                    { castellano: "Valla de alambre", cantabru: "Estacáu", example: "" },
                    { castellano: "Tronco", cantabru: "Tueru", example: "" },
                    { castellano: "El puente", cantabru: "La puenti", example: "" },
                    { castellano: "Día", cantabru: "Diya", example: "" },
                    { castellano: "Piedra", cantabru: "Cantu", example: "" }
                ]
            },
            {
                name: "Calle",
                words: [
                    { castellano: "Santnader", cantabru: "Sanander", example: "" },
                    { castellano: "Torrelavega", cantabru: "Torlavega", example: "" },
                    { castellano: "Adoquín", cantabru: "Aduquín", example: "" },
                    { castellano: "Hormigón", cantabru: "Jormigón", example: "" },
                    { castellano: "Taxi", cantabru: "Tasis", example: "" },
                    { castellano: "Cómic/Tira cómica", cantabru: "Chisti", example: "" },
                    { castellano: "Grava", cantabru: "Grija", example: "" },
                    { castellano: "Botón", cantabru: "Butón/Bötón", example: "" }
                ]
            },
            {
                name: "Animales",
                words: [
                    { castellano: "Tejón", cantabru: "Tasugu", example: "" },
                    { castellano: "Cerdo", cantabru: "Chon", example: "" },
                    { castellano: "Gallina", cantabru: "Picasuelos", example: "" },
                    { castellano: "Cuervo", cantabru: "Corvatu", example: "" },
                    { castellano: "Murciélago", cantabru: "Sapulatu", example: "" },
                    { castellano: "Conejo", cantabru: "Lapín", example: "" },
                    { castellano: "Saltamontes", cantabru: "Saltapraos", example: "" },
                    { castellano: "Avispa", cantabru: "Brispa", example: "" },
                    { castellano: "Gusano", cantabru: "Bujanu", example: "" },
                    { castellano: "Tortuga", cantabru: "Turtúa", example: "" },
                    { castellano: "Cobaya", cantabru: "Coín", example: "" },
                    { castellano: "Oveja", cantabru: "Uveja", example: "" },
                    { castellano: "Calamar", cantabru: "Maganu", example: "" },
                    { castellano: "Pulpo", cantabru: "Pulpe", example: "" }
                ]
            }
        ]
    }
};
