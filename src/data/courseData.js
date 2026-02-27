export const courseData = {
    blocks: [
        {
            id: "block-1",
            title: "Bloque 1: Introducción y fundamentos del cántabro",
            description: "Aprende los conceptos básicos y la pronunciación.",
            lessons: [
                {
                    id: "b1-l1",
                    title: "Artículos y plurales",
                    theory: "El cántabro (montañés) se caracteriza por tener tres géneros: masculino, femenino y neutro (materia). El plural suele terminar en -s, y hay características de cierre de vocales finales (o -> u, e -> i).",
                    examples: [
                        "El perro -> El perru",
                        "La leche -> La llechi"
                    ],
                    exercises: [
                        {
                            id: "b1-l1-ex1",
                            question: "¿Cómo se escribe 'El perro' en cántabro?",
                            expectedAnswer: "El perru",
                            explanation: "El masculino singular en cántabro a menudo termina en 'u'."
                        }
                    ]
                },
                {
                    id: "b1-l2",
                    title: "Pronombres personales",
                    theory: "Los pronombres personales tienen algunas variantes en cántabro.",
                    examples: [
                        "Nosotros -> Mosotros / Mós",
                        "Vosotros -> Vosotros / Vós"
                    ],
                    exercises: [
                        {
                            id: "b1-l2-ex1",
                            question: "Escribe el pronombre para 'Nosotros'.",
                            expectedAnswer: "Mosotros",
                            explanation: "Se usa a menudo 'mosotros' o 'mós'."
                        }
                    ]
                }
            ]
        },
        {
            id: "block-2",
            title: "Bloque 2: Gramática básica y construcción de frases",
            description: "Formación de oraciones y conjugaciones comunes.",
            lessons: [
                {
                    id: "b2-l1",
                    title: "Verbos y tiempos comunes",
                    theory: "El uso del verbo 'haber' y 'tener'.",
                    examples: [
                        "Tengo hambre -> Tíengu jambri"
                    ],
                    exercises: [
                        {
                            id: "b2-l1-ex1",
                            question: "¿Cómo se diría 'Tengo hambre'?",
                            expectedAnswer: "Tíengu jambri",
                            explanation: "Fíjate en la diptongación y en la j aspirada ('jambri')."
                        }
                    ]
                }
            ]
        },
        {
            id: "block-3",
            title: "Bloque 3: Uso cotidiano, expresiones y situaciones",
            description: "Frases hechas y expresiones útiles del día a día.",
            lessons: [
                {
                    id: "b3-l1",
                    title: "Saludos y despedidas",
                    theory: "Las formas más comunes de saludar en Cantabria.",
                    examples: [
                        "Hola -> Jola",
                        "Hasta luego -> Jasta lueu"
                    ],
                    exercises: [
                        {
                            id: "b3-l1-ex1",
                            question: "Escribe cómo decir 'Hasta luego'.",
                            expectedAnswer: "Jasta lueu",
                            explanation: "La 'h' inicial suele aspirarse como 'j'."
                        }
                    ]
                }
            ]
        }
    ],
    vocabulary: {
        id: "vocab",
        title: "Vocabulario",
        description: "Repaso de palabras clave y su traducción.",
        categories: [
            {
                name: "Naturaleza",
                words: [
                    { cantabru: "Prau", castellano: "Prado", example: "Tengo las vacas en el prau." },
                    { cantabru: "Llar", castellano: "Hogar/Cocina", example: "Tamos al calor del llar." }
                ]
            },
            {
                name: "Cuerpo",
                words: [
                    { cantabru: "Cáscara", castellano: "Cabeza", example: "Me duele la cáscara." },
                    { cantabru: "Gargüelu", castellano: "Garganta", example: "Tengo mal el gargüelu." }
                ]
            }
        ]
    }
};
