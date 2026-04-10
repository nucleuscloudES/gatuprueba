export const block1 = {
    id: "block-1",
    title: "BLOQUI 1",
    description: "Terminaciones U, I, D final, J, CC/CT/ECT, Y/Verbos/X ._.",
    lessons: [
        {
            id: "b1-l1",
            title: "LECCIÓN 1 --- TERMINACIÓN EN U",
            theory: `Pa deprender correutamenti cúmu ajunciona la tirminación en U, poemos tener en cuenta las siguientis reglas.

En cántabru acábanse en U tolos SUSTANTIVOS, ADJITIVOS, ADVERBIOS y PRONOMBRIS singularis acabaos en O en castellanu (Sin ser agudas).

ATINCIÓN:
Los pluralis NO acaban en U enl cántabru estándar. (El cántabru estándar es una generalización del cántabru vivo que se ha reglamentizado para lograr el reconocimiento como lengua).

ATINCIÓN:
Solu acaban en U los verbos en participiu, el restu NO (Siempre con tilde).`,
            examples: [
                "Toro -- Toru",
                "Malo -- Malu",
                "Cuando -- Cuandu",
                "Mío -- Míu",
                "No – Nu",
                "Nacido -- Nacíu",
                "Visto -- Vistu",
                "Viviendo -- Viviendo (gerundio)",
                "Veo -- Veo (presente)",
                "Acabado -- Acabáu"
            ],
            exercises: [
                { id: "b1-l1-ex1", question: 'Traduce “Poco”', expectedAnswer: "Pocu", explanation: "" },
                { id: "b1-l1-ex2", question: 'Traduce el verbo “Paso”', expectedAnswer: "Paso", explanation: "" },
                { id: "b1-l1-ex3", question: 'Traduce “Enseño cántabro”', expectedAnswer: "Enseño cántabru", explanation: "" },
                { id: "b1-l1-ex4", question: 'Traduce “Pelo claro”', expectedAnswer: "Pelu claru", explanation: "" },
                { id: "b1-l1-ex5", question: 'Traduce “Solo”', expectedAnswer: "Solu", explanation: "" },
                { id: "b1-l1-ex6", question: 'Traduce “Un perro y dos gatos”', expectedAnswer: "Un perru y dos gatos", explanation: "" },
                { id: "b1-l1-ex7", question: '¿Cuál de estos “canto” acaba en U en cántabru?', expectedAnswer: "2. Me di con un canto en el pie", options: ["1. Yo canto muy mal", "2. Me di con un canto en el pie"], explanation: "1. Yo canto muy mal\n2. Me di con un canto en el pie" },
                { id: "b1-l1-ex8", question: 'Traduce “Veo un poco mal”', expectedAnswer: "Veo un pocu mal", explanation: "" }
            ]
        },
        {
            id: "b1-l2",
            title: "LECCIÓN 2 ----- TERMINACIÓN EN I",
            theory: `En cántabru tirminan en I, IS, IN tolas palabras qu'en castellanu tirminan en E, ES, EN

Esceptu “QUE” ,“DE”, Sustantivos y verbos monosémicos (Té, ve, fe, sé...), Palabras agudas (Canté, Monté, Viviré, Parqué, Arcén...)

Los verbos acabados en “te”, “se”, “me” y “le” puéin acabar de las dos formas, polo que de momentu vamos a dejalos de láu.`,
            examples: [
                "Verde – Verdi",
                "Vienen – Vienin",
                "Papeles – Papelis",
                "Le – Li"
            ],
            exercises: [
                { id: "b1-l2-ex1", question: 'Traduce “Siete”', expectedAnswer: "Sieti", explanation: "" },
                { id: "b1-l2-ex2", question: 'Traduce “Mueven”', expectedAnswer: "Muevin", explanation: "" },
                { id: "b1-l2-ex3", question: 'Traduce “Vienen siete coches”', expectedAnswer: "Vienin sieti cochis", explanation: "" },
                { id: "b1-l2-ex4", question: 'Traduce “Este”', expectedAnswer: "Esti", explanation: "" },
                { id: "b1-l2-ex5", question: 'Traduce “¿Qué dices?”', expectedAnswer: "¿Qué dicis?", explanation: "" },
                { id: "b1-l2-ex6", question: 'Traduce “Lee y bebe un té”', expectedAnswer: "Lei y bebi un té", explanation: "" },
                { id: "b1-l2-ex7", question: 'Traduce “Aparqué por ese monte”', expectedAnswer: "Aparqué por esi monti", explanation: "" },
                { id: "b1-l2-ex8", question: 'Elige la respuesta correcta:', expectedAnswer: "c) Tener nunca acaba en IR.", options: ["a) Tener es Tenir porque acaba en er.", "b) Tener solo es Tenir si es sustantivo.", "c) Tener nunca acaba en IR.", "d) Al igual que las acabadas en EN, sólo se aplica el cambio si no es un verbo que acaba en te, me, se y le"], explanation: "c) Tener nunca acaba en IR." },
                { id: "b1-l2-ex9", question: 'Traduce “Ese oso es malo y grande”', expectedAnswer: "Esi osu es malu y grandi", explanation: "" },
                { id: "b1-l2-ex10", question: 'Traduce “Vienen de Burgos y saben otro idioma”', expectedAnswer: "Vienin de Burgos y sabin otru idioma", explanation: "" },
                { id: "b1-l2-ex11", question: 'Escribe 14 en letra y en cántabru', expectedAnswer: "Catorci", explanation: "" },
                { id: "b1-l2-ex12", question: 'Traduce al castellano “Esi sabi el restu”', expectedAnswer: "Ese sabe el resto", explanation: "" }
            ]
        },
        {
            id: "b1-l3",
            title: "LECCIÓN 3 ----- “D” FINAL E INTERVOCÁLICA",
            theory: `Toas las D finalis s'iliminan y si pon tildi ena última letra. Enos impirativos no si quita la D

Las “D” intervocálicas tamién s'iliminan. En casu de quedar 2 “a” siguías si pon tildi.

Solu s'aplica enas últimas sílabas. Hai escepcionis cumu: vida, edor...`,
            examples: [
                "Verdad -- Verdá",
                "Velocidad -- Velocidá",
                "Madrid -- Madrí",
                "Parad – Parad (Imperativo)",
                "Nacido -- Nacíu",
                "Patada -- Patáa",
                "Todo – Tou",
                "Enredadera – Enredaera (Solo se quita la última D)",
                "Adobado -- Adobáu (Solo se quita la última D)",
                "Adicional – Adicional (La D intervocálica está en las primeras sílabas)"
            ],
            exercises: [
                { id: "b1-l3-ex1", question: 'Traduce “Manada”', expectedAnswer: "Manáa", explanation: "" },
                { id: "b1-l3-ex2", question: 'Traduce “Bajad a Madrid”', expectedAnswer: "Bajad a Madrí", explanation: "" },
                { id: "b1-l3-ex3", question: 'Traduce “El pasado español es grandioso. Ese poder era inmenso ”', expectedAnswer: "El pasáu español es grandiosu. Esi poer era inmensu", explanation: "" },
                { id: "b1-l3-ex4", question: 'Elige la respuesta correcta. A estabilidad se le quita:', expectedAnswer: "d) Solo se quita la última D porque tiene preferencia la última, además se pone tilde porque es aguda acabada en vocal: estabilidá", options: ["a) La última D porque tiene preferencia la última: estabilida", "b) La última D y la intervocálica, además se le pone tilde a la última A porque es aguda y: estabiliá", "c) Solo se quita la intervocálica y se pone tilde porque si quedan dos “a” seguidas pone tilde: estabiliad", "d) Solo se quita la última D porque tiene preferencia la última, además se pone tilde porque es aguda acabada en vocal: estabilidá", "e) Ninguna es correcta"], explanation: "d) Esa es la regla correcta." },
                { id: "b1-l3-ex5", question: 'Traduce “Enamorado”', expectedAnswer: "Enamoráu", explanation: "" }
            ]
        },
        {
            id: "b1-l4",
            title: "LECCIÓN 4 ----- La J",
            theory: `La J en cántabru si prununcia /h/, es dicir, cumu una H inglesa.

En cántabru cambean a J las H y F que vengan de una F latina.

Piru hai otras palabras que tamién llevan J cumu: Jasta, Jallar o Jatu. Estas palabras hai que deprendelas, polo que n'estos tests pondremos tolas palabras pruvinientis del latín pa potenciar vocabulariu.
Nel restu de test, si indicarán las F u H latinas. Las qu'estén en nigrita y cursiva hai que cambealas a J.`,
            examples: [
                "Horno – Fornus – Jornu",
                "Fuente – Fontis – Juenti",
                "Fuerte – Fortis – Juerti",
                "Hacer – Facere – Jacer"
            ],
            exercises: [
                { id: "b1-l4-ex1", question: 'Traduce “Horno”', expectedAnswer: "Jornu", explanation: "" },
                { id: "b1-l4-ex2", question: 'Traduce “Fuera”', expectedAnswer: "Juera", explanation: "" },
                { id: "b1-l4-ex3", question: 'Traduce “Él halló unas fuentes que hacen mucho ruido”', expectedAnswer: "Él jalló unas juentis que jacin muchu ruidu", explanation: "" },
                { id: "b1-l4-ex4", question: 'Traduce “Ahogado”', expectedAnswer: "Ajogáu", explanation: "" },
                { id: "b1-l4-ex5", question: 'Traduce “Hierro”', expectedAnswer: "Jierru", explanation: "" },
                { id: "b1-l4-ex6", question: 'Traduce “Hacha”', expectedAnswer: "Jacha", explanation: "" },
                { id: "b1-l4-ex7", question: 'Traduce “Hablar”', expectedAnswer: "Jablar", explanation: "" }
            ]
        },
        {
            id: "b1-l5",
            title: "LECCIÓN 5 ---- CC, CT y ECT",
            theory: `Si una palabra tien CC u CT, s'ilimina una C
Ejemplos:
Acción -- Ación
Actuar – Atuar

Si una palabra tien ECT, esi ECT pasa a EUT
Ejemplo:
Perfecto – Perfeutu
Trayecto – Trayeutu
Conectan – Coneutan`,
            examples: [],
            exercises: [
                { id: "b1-l5-ex1", question: 'Traduce “Octogenario”', expectedAnswer: "Otogenariu", explanation: "" },
                { id: "b1-l5-ex2", question: 'Traduce “Adicción”', expectedAnswer: "Adición", explanation: "" },
                { id: "b1-l5-ex3", question: 'Traduce “El proyecto de la otra clase”', expectedAnswer: "El proyeutu de la otra clasi", explanation: "" },
                { id: "b1-l5-ex4", question: 'Traduce “Aspectos”', expectedAnswer: "Aspeutos", explanation: "" },
                { id: "b1-l5-ex5", question: 'Elige la respuesta correcta (Aspecto -> Aspeutu, Perfecto -> Perfeutu, etc):', expectedAnswer: "e) La C es correcta, y perfectos es perfeutos", options: ["a) Los plurales acaban en u", "b) Aspectos es Aspeutes", "c) La regla no aplica en plurales para la u final", "d) Actúan es Actuan", "e) La C es correcta, y perfectos es perfeutos", "f) Ninguna de las anteriores"], explanation: "e) La C es correcta, pero el plural acaba en 'os' porque los plurales no acaban en U (Perfeutos)." },
                { id: "b1-l5-ex6", question: 'Elige la respuesta correcta:', expectedAnswer: "e) Ninguna es correcta", options: ["a) Acción es Aczión", "b) Perfecto es Perfectu", "c) Actuar es Aztuar", "d) Trayecto es Trayectu", "e) Ninguna es correcta"], explanation: "e) Ninguna es correcta" }
            ]
        },
        {
            id: "b1-l6",
            title: "LECCIÓN 6 ---- Y, VERBOS y X",
            theory: `Cuandu una palabra tirmina en Y, esa Y cambea a I
Ejemplos:
Hay – Hai
Estoy – Estoi

Hai verbos qu'en vez de acabar en I simplementi no tienin la última letra. 
Ejemplos;
Viene – Vien
Tiene – Tien
Hace – Jaz
Pone – Pon
Estu solu pasa colos verbos en singular.

Las X suelen cambiar a S`,
            examples: [],
            exercises: [
                { id: "b1-l6-ex1", question: 'Traduce “El Rey tiene mucho poder”', expectedAnswer: "El Rei tien muchu poer", explanation: "" },
                { id: "b1-l6-ex2", question: 'Traduce “Hace un calor insoportable”', expectedAnswer: "Jaz un calor insoportabli", explanation: "" },
                { id: "b1-l6-ex3", question: 'Traduce “Él no hiere”', expectedAnswer: "Él nu jier", explanation: "" },
                { id: "b1-l6-ex4", question: 'Traduce “Examen”', expectedAnswer: "Esamin", explanation: "" }
            ]
        },
        {
            id: "b1-l7",
            title: "REPASO",
            theory: `Abora vamos a jacer test de repasu con tolo dau nel bloqui 1.`,
            examples: [],
            exercises: [
                { id: "b1-l7-ex1", question: 'Traduce: Ese prado es mío', expectedAnswer: "Esi práu es míu", explanation: "" },
                { id: "b1-l7-ex2", question: 'Traduce: Viene mañana', expectedAnswer: "Vien mañana", explanation: "" },
                { id: "b1-l7-ex3", question: 'Traduce: Para hacer eso, no hagas nada', expectedAnswer: "Pa jacer esu, nu jagas naa", explanation: "" },
                { id: "b1-l7-ex4", question: 'Traduce: La noche tiene a la luna', expectedAnswer: "La nochi tien a la luna", explanation: "" },
                { id: "b1-l7-ex5", question: 'Traduce: No sé nada del temario dado con anterioridad', expectedAnswer: "Nu sé naa del temariu dáu con anterioridá", explanation: "" },
                { id: "b1-l7-ex6", question: 'Traduce: No pongo tildes nunca, creo que son inútiles', expectedAnswer: "Nu pongo tildis nunca, creo que son inútilis", explanation: "" },
                { id: "b1-l7-ex7", question: 'Traduce: El horno no va bien', expectedAnswer: "El jornu nu va bien", explanation: "" },
                { id: "b1-l7-ex8", question: 'Traduce: Eres muy alto', expectedAnswer: "Eris mui altu", explanation: "" },
                { id: "b1-l7-ex9", question: 'Traduce: Paso el paso y canto con un canto', expectedAnswer: "Paso el pasu y canto con un cantu", explanation: "" },
                { id: "b1-l7-ex10", question: 'Traduce: Que', expectedAnswer: "Que", explanation: "" },
                { id: "b1-l7-ex11", question: 'Traduce: Hay que accionar el chisme ese', expectedAnswer: "Hai que acionar el chismi esi", explanation: "" },
                { id: "b1-l7-ex12", question: 'Traduce: Ese aspecto da miedo', expectedAnswer: "Esi aspeutu da miedu", explanation: "" },
                { id: "b1-l7-ex13", question: 'Traduce: Oswald tiene un supermercado fuera de la ciudad', expectedAnswer: "Oswald tien un supermercáu juera de la ciudá", explanation: "" },
                { id: "b1-l7-ex14", question: 'Traduce: El primero fue aburrido', expectedAnswer: "El primeru jue aburríu", explanation: "" },
                { id: "b1-l7-ex15", question: 'Traduce: Ese cuadro es muy feo', expectedAnswer: "Esi cuadru es mui feu", explanation: "" },
                { id: "b1-l7-ex16", question: 'Traduce: El tejado es alto', expectedAnswer: "El tejáu es altu", explanation: "" },
                { id: "b1-l7-ex17", question: 'Traduce: Este monte no es verde, es amarillo', expectedAnswer: "Esti monti nu es verdi, es amarillu", explanation: "" },
                { id: "b1-l7-ex18", question: 'Traduce: El llavero está muy caro', expectedAnswer: "El llaveru está mui caru", explanation: "" },
                { id: "b1-l7-ex19", question: 'Traduce: El bote de tomate', expectedAnswer: "El boti de tomati", explanation: "" },
                { id: "b1-l7-ex20", question: 'Traduce: El teclado no va', expectedAnswer: "El tecláu nu va", explanation: "" },
                { id: "b1-l7-ex21", question: 'Traduce: ¿“El Prado”? Eso es el museo de Madrid', expectedAnswer: "¿”El Prado”? Esu es el museu de Madrí", explanation: "" },
                { id: "b1-l7-ex22", question: 'Traduce: Hay mucho plástico', expectedAnswer: "Hai muchu plásticu", explanation: "" },
                { id: "b1-l7-ex23", question: 'Traduce: Puedes ganar el premio gordo', expectedAnswer: "Puéis ganar el premiu gordu", explanation: "" },
                { id: "b1-l7-ex24", question: 'Traduce: El portátil es demasiado viejo', expectedAnswer: "El portátil es demasiáu vieju", explanation: "" },
                { id: "b1-l7-ex25", question: 'Traduce: Unos gatos sueltos por ahí roban mucho', expectedAnswer: "Unos gatos sueltos por ahí roban muchu", explanation: "" },
                { id: "b1-l7-ex26", question: 'Traduce: Ese salce es muy alto', expectedAnswer: "Esi salci es mui altu", explanation: "" },
                { id: "b1-l7-ex27", question: 'Traduce: Voy hasta allí', expectedAnswer: "Voi jasta allí", explanation: "" },
                { id: "b1-l7-ex28", question: 'Traduce: Es perfecto para mí', expectedAnswer: "Es perfeutu pa mí", explanation: "" },
                { id: "b1-l7-ex29", question: 'Traduce: Es muy listo para esos temas', expectedAnswer: "Es mui listu pa estos temas", explanation: "" },
                { id: "b1-l7-ex30", question: 'Traduce: Dicen que tú eres alto', expectedAnswer: "Dicin que tú eris altu", explanation: "" }
            ]
        }
    ]
};
