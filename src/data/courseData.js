export const courseData = {
    blocks: [
        {
            id: "block-1",
            title: "BLOQUE 1",
            description: "Terminaciones U, I, D final, J, CC/CT/ECT, Y/Verbos/X",
            lessons: [
                {
                    id: "b1-l1",
                    title: "LECCIÓN 1 --- TERMINACIÓN EN U",
                    theory: "Pa deprender correutamenti cúmu ajunciona la tirminación en U, poemos tener en cuenta las siguientes reglas.\n\nEn cántabru acábanse en U tolos SUSTANTIVOS, ADJITIVOS, ADVERBIOS y PRONOMBRIS singularis acabaos en O en castellanu (Sin ser agudas).\n\nATINCIÓN:\nLos pluralis NO acaban en U enl cántabru estándar. (El cántabru estándar es una generalización del cántabru vivo que se ha reglamentizado para lograr el reconocimiento como lengua).\n\nATINCIÓN:\nSolu acaban en U los verbos en participiu, el restu NO (Siempre con tilde).",
                    examples: [
                        "Toro -- Toru",
                        "Malo -- Malu",
                        "Cuando -- Cuandu",
                        "Mío -- Míu",
                        "Nacido -- Nacíu",
                        "Visto -- Vistu",
                        "Viviendo -- Viviendo (gerundio)",
                        "Veo -- Veo (presente)",
                        "Acabado -- Acabáu"
                    ],
                    exercises: [
                        { id: "b1-l1-ex1", question: 'Traduce “Poco”', expectedAnswer: "Pocu", explanation: "Acabación de sustantivos, adjetivos, adverbios y pronombres." },
                        { id: "b1-l1-ex2", question: 'Traduce el verbo “Paso”', expectedAnswer: "Paso", explanation: "Los verbos que no están en participio no acaban en U." },
                        { id: "b1-l1-ex3", question: 'Traduce “Enseño cántabro”', expectedAnswer: "Enseño cántabru", explanation: "Enseño es verbo (se queda igual), cántabro es sustantivo y pasa a U." },
                        { id: "b1-l1-ex4", question: 'Traduce “Pelo claro”', expectedAnswer: "Pelu claru", explanation: "Sustantivo y adjetivo acaban en U." },
                        { id: "b1-l1-ex5", question: 'Traduce “Solo”', expectedAnswer: "Solu", explanation: "Acaba en U." },
                        { id: "b1-l1-ex6", question: 'Traduce “Un perro y dos gatos”', expectedAnswer: "Un perru y dos gatos", explanation: "Los plurales NO acaban en U." },
                        { id: "b1-l1-ex7", question: '¿Cuál de estos “canto” acaba en U en cántabru?', expectedAnswer: "2. Me di con un canto con el pie", options: ["1. Yo canto muy mal", "2. Me di con un canto con el pie"], explanation: "En 'canto con el pie', canto es un sustantivo." },
                        { id: "b1-l1-ex8", question: 'Traduce “Veo un poco mal”', expectedAnswer: "Veo un pocu mal", explanation: "'Veo' es verbo, 'poco' es adverbio." }
                    ]
                },
                {
                    id: "b1-l2",
                    title: "LECCIÓN 2 ----- TERMINACIÓN EN I",
                    theory: "En cántabru tirminan en I, IS, IN tolas palabras qu’en castellanu tirminan en E, ES, EN\n\nEsceptu “QUE” ,“DE”, Sustantivos y verbos monosémicos (Té, ve, fe, sé...), Palabras agudas (Canté, Monté, Viviré, Parqué, Arcén...)\n\nLos verbos acabados en “te”, “se”, “me” y “le” puéin acabar de las dos formas, polo que de momentu vamos a dejalos de láu.",
                    examples: [
                        "Verde – Verdi",
                        "Vienen – Vienin",
                        "Papeles – Papelis",
                        "Le – Li"
                    ],
                    exercises: [
                        { id: "b1-l2-ex1", question: 'Traduce “Siete”', expectedAnswer: "Sieti", explanation: "Término no monosémico cambia E por I." },
                        { id: "b1-l2-ex2", question: 'Traduce “Mueven”', expectedAnswer: "Muevin", explanation: "EN cambia a IN." },
                        { id: "b1-l2-ex3", question: 'Traduce “Vienen siete coches”', expectedAnswer: "Vienin sieti cochis", explanation: "Se aplican las reglas a todas las palabras." },
                        { id: "b1-l2-ex4", question: 'Traduce “Este”', expectedAnswer: "Esti", explanation: "Término en e." },
                        { id: "b1-l2-ex5", question: 'Traduce “¿Qué dices?”', expectedAnswer: "¿Qué dicis?", explanation: "Que es una excepción. Dices cambia a dicis." },
                        { id: "b1-l2-ex6", question: 'Traduce “Lee y bebe un té”', expectedAnswer: "Lei y bebi un té", explanation: "Té es una excepción (monosémico)." },
                        { id: "b1-l2-ex7", question: 'Traduce “Aparqué por ese monte”', expectedAnswer: "Aparqué por esi monti", explanation: "Aparqué es aguda, por lo que no cambia." },
                        { id: "b1-l2-ex8", question: 'Elige la respuesta correcta:', expectedAnswer: "c) Tener nunca acaba en IR", options: ["a) Tener es Tenir porque acaba en er", "b) Tener solo es Tenir si es sustantivo", "c) Tener nunca acaba en IR", "d) Al igual que las acabadas en EN, sólo se aplica el cambio si no es un verbo que acaba en te, me, se y le"], explanation: "Regla específica de los verbos acabados en R." },
                        { id: "b1-l2-ex9", question: 'Traduce “Ese oso es malo y grande”', expectedAnswer: "Esi osu es malu y grandi", explanation: "Se aplican las reglas de U y de I." },
                        { id: "b1-l2-ex10", question: 'Traduce “Vienen de Burgos y saben otro idioma”', expectedAnswer: "Vienin de Burgos y sabin otru idioma", explanation: "De es excepción. Vienen y saben cambian a in." },
                        { id: "b1-l2-ex11", question: 'Escribe 14 en letra y en cántabru', expectedAnswer: "Catorci", explanation: "Catorce termina en e, por tanto catorci." },
                        { id: "b1-l2-ex12", question: 'Traduce al castellano “Esi sabi el restu”', expectedAnswer: "Ese sabe el resto", explanation: "Traducción a la inversa." }
                    ]
                },
                {
                    id: "b1-l3",
                    title: "LECCIÓN 3 ----- “D” FINAL E INTERVOCÁLICA",
                    theory: "Toas las D finalis s’iliminan y si pon tildi ena última letra. Enos impirativos no si quita la D\n\nLas “D” intervocálicas tamién s’iliminan. En casu de quedar 2 “a” siguías si pon tildi.\n\nSolu s’aplica enas últimas sílabas\nHai escepcionis cumu: vida, edor...",
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
                        { id: "b1-l3-ex1", question: 'Traduce “Manada”', expectedAnswer: "Manáa", explanation: "D intervocálica eliminada, dos aes llevan tilde." },
                        { id: "b1-l3-ex2", question: 'Traduce “Bajad a Madrid”', expectedAnswer: "Bajad a Madrí", explanation: "Bajad es imperativo, por tanto mantiene la D. Madrid pierde la D final." },
                        { id: "b1-l3-ex3", question: 'Traduce “El pasado español es grandioso. Ese poder era inmenso”', expectedAnswer: "El pasáu español es grandiosu. Esi poer era inmensu", explanation: "Aplicación de D intervócalica (pasáu, poer) y reglas de la U/I." },
                        { id: "b1-l3-ex4", question: 'Elige la respuesta correcta. A estabilidad se le quita:', expectedAnswer: "d) Solo se quita la última D porque tiene preferencia la última, además se pone tilde porque es aguda acabada en vocal: estabilidá", options: ["a) La última D porque tiene preferencia la última: estabilida", "b) La última D y la intervocálica, además se le pone tilde a la última A porque es aguda y: estabiliá", "c) Solo se quita la intervocálica y se pone tilde porque si quedan dos “a” seguidas pone tilde: estabiliad", "d) Solo se quita la última D porque tiene preferencia la última, además se pone tilde porque es aguda acabada en vocal: estabilidá", "e) Ninguna es correcta"], explanation: "Regla correcta para D final." },
                        { id: "b1-l3-ex5", question: 'Traduce “Enamorado”', expectedAnswer: "Enamoráu", explanation: "D intervocálica en la última sílaba." }
                    ]
                },
                {
                    id: "b1-l4",
                    title: "LECCIÓN 4 ----- La J",
                    theory: "La J en cántabru si prununcia /h/, es dicir, cumu una H inglesa.\n\nEn cántabru cambean a J las H y F que vengan de una F latina.\n\nPiru hai otras palabras que tamién llevan J cumu: Jasta, Jallar o Jatu. Estas palabras hai que deprendelas, polo que n’estos tests pondremos tolas palabras pruvinientis del latín pa potenciar vocabulariu.\n\nNel restu de test, si indicarán las F u H latinas. Las qu’estén en nigrita y cursiva hai que cambealas a J.",
                    examples: [
                        "**H**orno – **F**ornus – Jornu",
                        "**F**uente – **F**ontis – Juenti",
                        "**F**uerte – **F**ortis – Juerti",
                        "**H**acer – **F**acere – Jacer"
                    ],
                    exercises: [
                        { id: "b1-l4-ex1", question: 'Traduce “**H**orno”', expectedAnswer: "Jornu", explanation: "**F** latina." },
                        { id: "b1-l4-ex2", question: 'Traduce “**F**uera”', expectedAnswer: "Juera", explanation: "**F** latina." },
                        { id: "b1-l4-ex3", question: 'Traduce “Él jalló unas **f**uentes que **h**acen mucho ruido”', expectedAnswer: "Él jalló unas juentis que jacin muchu ruidu", explanation: "Reglas de J, U e I aplicadas en conjunto." },
                        { id: "b1-l4-ex4", question: 'Traduce “A**h**ogado”', expectedAnswer: "Ajogáu", explanation: "**H** intercalada con origen latino." },
                        { id: "b1-l4-ex5", question: 'Traduce “**H**ierro”', expectedAnswer: "Jierru", explanation: "**F** latina." },
                        { id: "b1-l4-ex6", question: 'Traduce “**H**acha”', expectedAnswer: "Jacha", explanation: "**F** latina." }, { id: "b1-l4-ex7", question: 'Traduce “**H**ablar”', expectedAnswer: "Jablar", explanation: "**F** latina." }
                    ]
                },
                {
                    id: "b1-l5",
                    title: "LECCIÓN 5 ---- CC, CT y ECT",
                    theory: "Si una palabra tien CC u CT, s’ilimina una C\n\nSi una palabra tien ECT, esi ECT pasa a EUT",
                    examples: [
                        "Acción -- Ación",
                        "Actuar – Atuar",
                        "Perfecto – Perfeutu",
                        "Trayecto – Trayeutu",
                        "Conectan – Coneutan"
                    ],
                    exercises: [
                        { id: "b1-l5-ex1", question: 'Traduce “Octogenario”', expectedAnswer: "Otogenariu", explanation: "CT pasa a T." },
                        { id: "b1-l5-ex2", question: 'Traduce “Adicción”', expectedAnswer: "Adición", explanation: "CC pasa a C." },
                        { id: "b1-l5-ex3", question: 'Traduce “El proyecto de la otra clase”', expectedAnswer: "El proyeutu de la otra clasi", explanation: "CT vs ECT: proyeutu. Además reglas de U/I." },
                        { id: "b1-l5-ex4", question: 'Traduce “Aspectos”', expectedAnswer: "Aspeutos", explanation: "ECT pasa a EUT." },
                        { id: "b1-l5-ex5", question: 'Elige la respuesta correcta:', expectedAnswer: "e) La C es correcta, pero acaba en “eutos” porque los plurales no acaban en U.", options: ["a) “Correctos” es “correutus” ya que todo lo que lleva “ecto” se cambia a “eutu”.", "b) “Correctos” no cambia por ser plural.", "c) “Correctos” tiermina en “ecto” por lo que tiene “ect”, que independientemente del género y número de la palabra se cambia a “eut” por lo que “Correutus” es correcto.", "d) No cambia, está claro.", "e) La C es correcta, pero acaba en “eutos” porque los plurales no acaban en U.", "f) Ninguna es correcta"], explanation: "Los plurales terminan en OS en cántabro." },
                        { id: "b1-l5-ex6", question: 'Elige la respuesta correcta', expectedAnswer: "e) Ninguna es correcta", options: ["a) Si una palabra lleva “cc” se quitan las dos “c” y se cambia a “z” porque el sonido que queda es /Z/", "b) Si una palabra tiene “ct” se deja la “t”", "c) Si una palabra tiene “ect” se quita la “c” porque a las palabras con “ct” se les quita la “c”.", "d) Si una palabra tiene “cc” se le quita siempre la segunda “c”, si tienen “ct” se quita una y se deja la que mejor suene y las que tienen “ect” se cambian a “eut” independientemente del número, pero no del género.", "e) Ninguna es correcta"], explanation: "Explicaciones de las reglas muy precisas." }
                    ]
                },
                {
                    id: "b1-l6",
                    title: "LECCIÓN 6 ---- Y, VERBOS y X",
                    theory: "Cuandu una palabra tirmina en Y, esa Y cambea a I\n\nHai verbos qu’en vez de acabar en I simplementi no tienin la última letra. Estu solu pasa colos verbos en singular.\n\nLas X suelen cambiar a S",
                    examples: [
                        "Hay – Hai",
                        "Estoy – Estoi",
                        "Viene – Vien",
                        "Tiene – Tien",
                        "Hace – Jaz",
                        "Pone – Pon"
                    ],
                    exercises: [
                        { id: "b1-l6-ex1", question: 'Traduce “El Rey tiene mucho poder”', expectedAnswer: "El Rei tien muchu poer", explanation: "Rei y tien. También 'poer'." },
                        { id: "b1-l6-ex2", question: 'Traduce “Hace un calor insoportable”', expectedAnswer: "Jaz un calor insoportabli", explanation: "Jaz (verbo) y j inicial, además de insoportabli terminando en I." },
                        { id: "b1-l6-ex3", question: 'Traduce “Él no hiere”', expectedAnswer: "Él no jier", explanation: "H a j y verbo en singular pierde terminación." },
                        { id: "b1-l6-ex4", question: 'Traduce “Examen”', expectedAnswer: "Esamin", explanation: "X cambia a S." }
                    ]
                },
                {
                    id: "b1-l7",
                    title: "REPASO",
                    theory: "Abora vamos a jacer test de repasu con tolo dau nel bloqui 1.\nNo hay teoría nueva. ¡Aplica tolo que deprendiste!",
                    examples: [],
                    exercises: [
                        { id: "b1-l7-ex1", question: 'Traduce “Toda la vida haciendo el mismo trayecto”', expectedAnswer: "Toa la vida jaciendo el mismu trayeutu", explanation: "Repaso general aplicando varias reglas del Bloque 1." },
                        { id: "b1-l7-ex2", question: 'Traduce “Estos papeles perfectos y grandes”', expectedAnswer: "Estos papelis perfeutos y grandis", explanation: "Repaso de plurales e is finales." }
                    ]
                }
            ]
        },
        {
            id: "block-2",
            title: "BLOQUE 2",
            description: "Hue, Bue, Posesivos",
            lessons: [
                {
                    id: "b2-l1",
                    title: "LECCIÓN 1 ----- Hue, Bue",
                    theory: "HUE y BUE/VUE cambean a GÜE",
                    examples: [
                        "Huevo -- Güevu",
                        "Abuela -- Güela",
                        "Vuelta -- Güelta"
                    ],
                    exercises: [
                        { id: "b2-l1-ex1", question: 'Traduce “Hueso”', expectedAnswer: "Güesu", explanation: "Hue cambia a Güe." },
                        { id: "b2-l1-ex2", question: 'Traduce “Di una vuelta”', expectedAnswer: "Di una güelta", explanation: "Vue cambia a Güe." }
                    ]
                },
                {
                    id: "b2-l2",
                    title: "LECCIÓN 2 ---- POSESIVOS",
                    theory: "COSA POSEÍDA / POSEEOR\n\nA los pusisivos (mi, tu, su) si lis añidi un “el”, “la”, “los”, “las” delanti.\n\n1ª persona singular: (el/lo) míu, (la) mía, (los) míos, (las) mías\n2ª persona singular: (el/lo) tuyu, (la) tuya, (los) tuyos, (las) tuyas\n3ª persona singular: (el/lo) suyu, (la) suya, (los) suyos, (las) suyas\n\n1ª persona plural: (el/lo) muestru, (la) muestra, (los) muestros, (las) muestras\n2ª persona plural: (el/lo) vuestru, (la) vuestra, (los) vuestros, (las) vuestras\n3ª persona plural: (el/lo) suyu, (la) suya, (los) suyos, (las) suyas",
                    examples: [
                        "El mi perru.",
                        "La mi casa.",
                        "El tu trebaju.",
                        "La tu mesa.",
                        "El su pisu.",
                        "La su cabeza.",
                        "El muestru prau.",
                        "La muestra cama.",
                        "La vuestra bici.",
                        "El vuestru cochi.",
                        "Los mis sacos."
                    ],
                    exercises: [
                        { id: "b2-l2-ex1", question: 'Traduce “Mi piano”', expectedAnswer: "El mi pianu", explanation: "Artículo delante del posesivo." },
                        { id: "b2-l2-ex2", question: 'Traduce “Su guitarra”', expectedAnswer: "La su guitarra", explanation: "Artículo delante del posesivo." },
                        { id: "b2-l2-ex3", question: 'Traduce “Él fue, su abuela no”', expectedAnswer: "Él jue, la su güela no", explanation: "Varias reglas aplicadas, junto a la del posesivo." },
                        { id: "b2-l2-ex4", question: 'Traduce “Eso es nuestro”', expectedAnswer: "Esu es muestru", explanation: "Esu y muestru." },
                        { id: "b2-l2-ex5", question: 'Elige la respuesta correcta:', expectedAnswer: "c) Se pone el o la dependiendo del género del sustantivo", options: ["a) Se pone el o la dependiendo del número del sustantivo", "b) Se pone el o los dependiendo del género del sustantivo", "c) Se pone el o la dependiendo del género del sustantivo", "d) Se pone la o las dependiendo de cómo suene mejor", "e) Ninguna es correcta"], explanation: "Concordancia de género." },
                        { id: "b2-l2-ex6", question: 'Completa la tabla en tercera persona: ___ su gatu', expectedAnswer: "el", explanation: "Gatu es masculino." },
                        { id: "b2-l2-ex7", question: 'Completa la tabla en tercera persona: ___ sus sudaeras', expectedAnswer: "las", explanation: "Sudaeras es femenino plural." },
                        { id: "b2-l2-ex8", question: 'Completa la tabla en tercera persona: las ___ vacas', expectedAnswer: "sus", explanation: "Posesivo 3ª persona plural." },
                        { id: "b2-l2-ex9", question: 'Completa la tabla en tercera persona: la ___ maera', expectedAnswer: "su", explanation: "Posesivo 3ª persona singular." },
                        { id: "b2-l2-ex10", question: 'Completa la siguiente tabla en primera persona: ___ mi práu', expectedAnswer: "el", explanation: "Práu es masculino." },
                        { id: "b2-l2-ex11", question: 'Completa la siguiente tabla en primera persona: ___ mi ropa', expectedAnswer: "la", explanation: "Ropa es femenino." },
                        { id: "b2-l2-ex12", question: 'Completa la siguiente tabla en primera persona: la ___ casa', expectedAnswer: "muestra", explanation: "Primera persona plural, referida a 'casa' (femenino singular)." },
                        { id: "b2-l2-ex13", question: 'Completa la siguiente tabla en primera persona: los ___ trajis', expectedAnswer: "muestros", explanation: "Primera persona plural, referida a 'trajis' (masculino plural)." },
                        { id: "b2-l2-ex14", question: 'Traduce “Vuestra fuerza es grande actualmente”', expectedAnswer: "La vuestra juerza es grandi atualmenti", explanation: "Reglas mixtas para J, E final a I, y posesivos." }
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
