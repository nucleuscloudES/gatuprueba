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
                        { id: "b1-l1-ex7", question: '¿Cuál de estos “canto” acaba en U en cántabru?', expectedAnswer: "2", options: ["1. Yo canto muy mal", "2. Me di con un canto en el pie"], explanation: "En '2', canto es un sustantivo." },
                        { id: "b1-l1-ex8", question: 'Traduce “Veo un poco mal”', expectedAnswer: "Veo un pocu mal", explanation: "'Veo' es verbo, 'poco' es adverbio." }
                    ]
                },
                {
                    id: "b1-l2",
                    title: "LECCIÓN 2 ----- TERMINACIÓN EN I",
                    theory: `En cántabru tirminan en I, IS, IN tolas palabras qu’en castellanu tirminan en E, ES, EN

Esceptu “QUE” ,“DE”, Sustantivos y verbos monosémicos (Té, ve, fe, sé...), Palabras agudas (Canté, Monté, Viviré, Parqué, Arcén...)

Los verbos acabados en “te”, “se”, “me” y “le” puéin acabar de las dos formas, polo que de momentu vamos a dejalos de láu.`,
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
                        { id: "b1-l2-ex8", question: 'Elige la respuesta correcta sobre el verbo "Tener"', expectedAnswer: "c)", options: ["a) “Tener” es “Tenir” porque acaba en “er”", "b) “Tener” solo es “Tenir” si es sustantivo", "c) “Tener” nunca acaba en “IR”", "d) Al igual que las acabadas en “EN”, sólo se aplica el cambio si no es un verbo que acaba en “te”, “me”, “se” y “le”"], explanation: "Tener nunca cambia." },
                        { id: "b1-l2-ex9", question: 'Traduce “Ese oso es malo y grande”', expectedAnswer: "Esi osu es malu y grandi", explanation: "Se aplican las reglas de U y de I." },
                        { id: "b1-l2-ex10", question: 'Traduce “Vienen de Burgos y saben otro idioma”', expectedAnswer: "Vienin de Burgos y sabin otru idioma", explanation: "De es excepción. Vienen y saben cambian a in." },
                        { id: "b1-l2-ex11", question: 'Escribe 14 en letra y en cántabru', expectedAnswer: "Catorci", explanation: "Catorce termina en e, por tanto catorci." },
                        { id: "b1-l2-ex12", question: 'Traduce al castellano “Esi sabi el restu”', expectedAnswer: "Ese sabe el resto", explanation: "Traducción a la inversa." }
                    ]
                },
                {
                    id: "b1-l3",
                    title: "LECCIÓN 3 ----- “D” FINAL E INTERVOCÁLICA",
                    theory: `Toas las D finalis s’iliminan y si pon tildi ena última letra. Enos impirativos no si quita la D

Las “D” intervocálicas tamién s’iliminan. En casu de quedar 2 “a” siguías si pon tildi.

Solu s’aplica enas últimas sílabas. Hai escepcionis cumu: vida, edor...`,
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
                        { id: "b1-l3-ex4", question: 'Elige la respuesta correcta. A estabilidad se le quita:', expectedAnswer: "d)", options: ["a) La última D porque tiene preferencia la última: estabilida", "b) La última D y la intervocálica, además se le pone tilde a la última A porque es aguda y: estabiliá", "c) Solo se quita la intervocálica y se pone tilde porque si quedan dos “a” seguidas pone tilde: estabiliad", "d) Solo se quita la última D porque tiene preferencia la última, además se pone tilde porque es aguda acabada en vocal: estabilidá", "e) Ninguna es correcta"], explanation: "Regla correcta para D final." },
                        { id: "b1-l3-ex5", question: 'Traduce “Enamorado”', expectedAnswer: "Enamoráu", explanation: "D intervocálica en la última sílaba." }
                    ]
                },
                {
                    id: "b1-l4",
                    title: "LECCIÓN 4 ----- La J",
                    theory: `La J en cántabru si prununcia /h/, es dicir, cumu una H inglesa.

En cántabru cambean a J las H y F que vengan de una F latina.

Piru hai otras palabras que tamién llevan J cumu: Jasta, Jallar o Jatu. Estas palabras hai que deprendelas, polo que n’estos tests pondremos tolas palabras pruvinientis del latín pa potenciar vocabulariu.
Nel restu de test, si indicarán las F u H latinas. Las qu’estén en nigrita y cursiva hai que cambealas a J.`,
                    examples: [
                        "Horno – Fornus – Jornu",
                        "Fuente – Fontis – Juenti",
                        "Fuerte – Fortis – Juerti",
                        "Hacer – Facere – Jacer"
                    ],
                    exercises: [
                        { id: "b1-l4-ex1", question: 'Traduce “Horno”', expectedAnswer: "Jornu", explanation: "F latina." },
                        { id: "b1-l4-ex2", question: 'Traduce “Fuera”', expectedAnswer: "Juera", explanation: "F latina." },
                        { id: "b1-l4-ex3", question: 'Traduce “Él halló unas fuentes que hacen mucho ruido”', expectedAnswer: "Él jalló unas juentis que jacin muchu ruidu", explanation: "Reglas de J, U e I aplicadas en conjunto." },
                        { id: "b1-l4-ex4", question: 'Traduce “Ahogado”', expectedAnswer: "Ajogáu", explanation: "H intercalada con origen latino." },
                        { id: "b1-l4-ex5", question: 'Traduce “Hierro”', expectedAnswer: "Jierru", explanation: "F latina." },
                        { id: "b1-l4-ex6", question: 'Traduce “Hacha”', expectedAnswer: "Jacha", explanation: "F latina." },
                        { id: "b1-l4-ex7", question: 'Traduce “Hablar”', expectedAnswer: "Jablar", explanation: "F latina." }
                    ]
                },
                {
                    id: "b1-l5",
                    title: "LECCIÓN 5 ---- CC, CT y ECT",
                    theory: `Si una palabra tien CC u CT, s’ilimina una C

Si una palabra tien ECT, esi ECT pasa a EUT`,
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
                        { id: "b1-l5-ex5", question: 'Elige la respuesta correcta:', expectedAnswer: "e)", options: ["a) “Correctos” es “correutus” ya que todo lo que lleva “ecto” se cambia a “eutu”.", "b) “Correctos” no cambia por ser plural.", "c) “Correctos” tiermina en “ecto”... “Correutus” es correcto.", "d) No cambia, está claro.", "e) La C es correcta, pero acaba en “eutos” porque los plurales no acaban en U.", "f) Ninguna es correcta"], explanation: "Los plurales terminan en OS en cántabro." },
                        { id: "b1-l5-ex6", question: 'Elige la respuesta correcta', expectedAnswer: "e)", options: ["a) Si una palabra lleva “cc” se quitan las dos “c” y se cambia a “z”", "b) Si una palabra tiene “ct” se deja la “t”", "c) Si una palabra tiene “ect” se quita la “c”", "d) Si una palabra tiene “cc” se le quita siempre la segunda “c”, si tienen “ct” se quita una... y “ect” se cambian a “eut”...", "e) Ninguna es correcta"], explanation: "Ninguna descripción de la regla es correcta de la A a la D." }
                    ]
                },
                {
                    id: "b1-l6",
                    title: "LECCIÓN 6 ---- Y, VERBOS y X",
                    theory: `Cuandu una palabra tirmina en Y, esa Y cambea a I

Hai verbos qu’en vez de acabar en I simplementi no tienin la última letra. Estu solu pasa colos verbos en singular.

Las X suelen cambiar a S`,
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
                        { id: "b1-l6-ex4", question: 'Traduce “Examen”', expectedAnswer: "Esamin", explanation: "X cambia a S y en final pasa a in." }
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
            title: "BLOQUI 2",
            description: "Hue/Bue, Posesivos, Contracciones, Apostrofación",
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
                    theory: `COSA POSEÍDA / POSEEOR

A los pusisivos (mi, tu, su) si lis añidi un “el”, “la”, “los”, “las” delanti.

1ª pers. sing.: (el/lo) míu, (la) mía, (los) míos, (las) mías
2ª pers. sing.: (el/lo) tuyu, (la) tuya, (los) tuyos, (las) tuyas
3ª pers. sing.: (el/lo) suyu, (la) suya, (los) suyos, (las) suyas

1ª pers. plu.: (el/lo) muestru, (la) muestra, (los) muestros, (las) muestras
2ª pers. plu.: (el/lo) vuestru, (la) vuestra, (los) vuestros, (las) vuestras
3ª pers. plu.: (el/lo) suyu, (la) suya, (los) suyos, (las) suyas`,
                    examples: [
                        "El mi gatu.",
                        "La mi cama.",
                        "El tu cochi.",
                        "La tu ropa.",
                        "El su trebaju.",
                        "La su playera.",
                        "El muestru sueñu.",
                        "La muestra casa.",
                        "La vuestra bici.",
                        "El vuestru práu.",
                        "Los mis pies."
                    ],
                    exercises: [
                        { id: "b2-l2-ex1", question: 'Traduce “Mi piano”', expectedAnswer: "El mi pianu", explanation: "Artículo delante del posesivo." },
                        { id: "b2-l2-ex2", question: 'Traduce “Su guitarra”', expectedAnswer: "La su guitarra", explanation: "Artículo delante del posesivo." },
                        { id: "b2-l2-ex3", question: 'Traduce “Él fue, su abuela no”', expectedAnswer: "Él jue, la su güela no", explanation: "Varias reglas aplicadas, junto a la del posesivo." },
                        { id: "b2-l2-ex4", question: 'Traduce “Eso es nuestro”', expectedAnswer: "Esu es muestru", explanation: "Esu y muestru." },
                        { id: "b2-l2-ex5", question: 'Elige la respuesta correcta:', expectedAnswer: "c)", options: ["a) Se pone el o la dependiendo del número del sustantivo", "b) Se pone el o los dependiendo del género del sustantivo", "c) Se pone el o la dependiendo del género del sustantivo", "d) Se pone la o las dependiendo de cómo suene mejor", "e) Ninguna es correcta"], explanation: "Concordancia de género." },
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
                },
                {
                    id: "b2-l3",
                    title: "LECCIÓN 3 ----- CONTRACCIONES",
                    theory: `Del -> Del | Al -> Al
En la -> Ena | En unas -> Nunas
En lo -> Eno | Con el -> Col
En las -> Enas | Con la -> Cola / Cona
En los -> Enos | Con lo -> Colo / Cono
En el -> Nel | Con las -> Colas / Conas
Para el -> Pal | Con los -> Colos / Conos
Para la -> Pala | Todo el -> Tol / Tul
Por el -> Pol | Toda la -> Tola
Por la -> Pola | Todo lo -> Tolo
Por lo -> Polos(sic) | Todos los -> Tolos
Por los -> Polas(sic) | Todas las -> Tolas
En un -> Nun | Por arriba -> Poarriba / Por riba
En una -> Nuna | Por abajo -> Poabaju / Por baju
En unos -> Nunos | Por delante -> Poalanti / Por lanti
Por la parte de atrás -> Partatrás
Por detrás -> Poatrás / Por trás
Por la parte de adelante -> Partalanti
Por la parte de fuera -> Partajuera
Cada uno -> Caúnu
Por la parte de dentro -> Partadrentu
Cada una -> Caúna

Los pronombris MOS y VOS también forman contracción junto a determinante.
Molo dijo ahier.
Mola presentesti.
Molos disti l’otru día.
Esas hestorias ya molas contarin en clas.
El lápiz volu doi dispués.
Eso nu volo criís ni vós.

Otra contracción importante es el caso de DENDI, que contrae de las siguientes formas:
DIQUIÁ (dendi aquí jasta) Diquiá dos días, estaré en paru.
DILLIÁ (dendi allí jasta) DilliáTorlavega son séis kilómetros.
DIQUÍ (dendi+aquí) Diquí se vei la mar.
DILLÍ (dendi+allí) Dillí tendrán de vivir a salvamos.
Cuntracionis sacáas direutamenti de PROYEUTU DEPRIENDI. Aunqui angunas d’ellas son intuitivas, hai que deprendelas.`,
                    examples: [],
                    exercises: [
                        { id: "b2-l3-ex1", question: 'Contrae “En los”', expectedAnswer: "Enos", explanation: "Contracción de 'En' + 'los'." },
                        { id: "b2-l3-ex2", question: 'Contrae “Para el”', expectedAnswer: "Pal", explanation: "Contracción de 'Para' + 'el'." },
                        { id: "b2-l3-ex3", question: 'Contrae “Para la”', expectedAnswer: "Pala", explanation: "Contracción de 'Para' + 'la'." },
                        { id: "b2-l3-ex4", question: 'Contrae “Por el”', expectedAnswer: "Pol", explanation: "Contracción de 'Por' + 'el'." },
                        { id: "b2-l3-ex5", question: 'Contrae “Por la”', expectedAnswer: "Pola", explanation: "Contracción de 'Por' + 'la'." },
                        { id: "b2-l3-ex6", question: 'Contrae “En el”', expectedAnswer: "Nel", explanation: "Contracción de 'En' + 'el'." },
                        { id: "b2-l3-ex7", question: 'Contrae “En una”', expectedAnswer: "Nuna", explanation: "Contracción de 'En' + 'una'." },
                        { id: "b2-l3-ex8", question: 'Contrae “En unos”', expectedAnswer: "Nunos", explanation: "Contracción de 'En' + 'unos'." },
                        { id: "b2-l3-ex9", question: 'Contrae “Cada uno”', expectedAnswer: "Caúnu", explanation: "Contracción de 'Cada' + 'uno'." },
                        { id: "b2-l3-ex10", question: 'Contrae “En unas”', expectedAnswer: "Nunas", explanation: "Contracción de 'En' + 'unas'." },
                        { id: "b2-l3-ex11", question: 'Contrae “Por delante”', expectedAnswer: "Poalanti", explanation: "Contracción." },
                        { id: "b2-l3-ex12", question: 'Contrae “Con el”', expectedAnswer: "Col", explanation: "Contracción." },
                        { id: "b2-l3-ex13", question: 'Contrae “Con las” sin usar “Colas”', expectedAnswer: "Conas", explanation: "Contracción alternativa." },
                        { id: "b2-l3-ex14", question: 'Contrae “Toda la”', expectedAnswer: "Tola", explanation: "Contracción de 'Toda' + 'la'." },
                        { id: "b2-l3-ex15", question: 'Contrae “Por la parte de afuera”', expectedAnswer: "Partajuera", explanation: "Contracción." },
                        { id: "b2-l3-ex16", question: 'Contrae “Por abajo” en una sola palabra', expectedAnswer: "Poabaju", explanation: "Contracción." },
                        { id: "b2-l3-ex17", question: 'Contrae “Por atrás” con dos palabras', expectedAnswer: "Por tras", explanation: "Contracción alternativa." },
                        { id: "b2-l3-ex18", question: 'Contrae “Desde aquí”', expectedAnswer: "Diquí", explanation: "Contracción de 'Dendi' + 'aquí'." },
                        { id: "b2-l3-ex19", question: 'Contrae “Desde aquí hasta”', expectedAnswer: "Diquiá", explanation: "Contracción." },
                        { id: "b2-l3-ex20", question: 'Contrae “Me lo”', expectedAnswer: "Molo", explanation: "Contracción pronominal." },
                        { id: "b2-l3-ex21", question: 'Contrae “Me la”', expectedAnswer: "Mola", explanation: "Contracción pronominal." },
                        { id: "b2-l3-ex22", question: 'Traduce “Creo que los bolos están por alante”', expectedAnswer: "Creo que los bolos están poalanti", explanation: "Aplicando contracción." },
                        { id: "b2-l3-ex23", question: 'Traduce “Con el cuaderno no haces nada, toma mis hojas”', expectedAnswer: "Col cuadernu no jacis naa, toma las mis hojas", explanation: "Aplicando contracción y posesivo." },
                        { id: "b2-l3-ex24", question: 'Traduce “En la casa de Juan todas las cosas asustan”', expectedAnswer: "Ena casa de Juan tolas cosas asustan", explanation: "Varias contracciones." }
                    ]
                },
                {
                    id: "b2-l4",
                    title: "LECCIÓN 4 ----- APOSTROFACIÓN",
                    theory: `Apostrófanse con cualisquier suníu vocálicu: EL, DE, QUE

EL --- El agua --- L’augua + Está el --- Está’l
En caso de doble sonido, tiene preferencia ponerlo en la palabra siguiente:
Está el agua --- Está l’augua

DE --- De oro --- D’oru

QUE --- Que está --- Qu’está

Apostrófanse SOLU col suníu A: PA y LA

LA --- La armónica --- L’armónica
LA --- La encara --- La encara, L’encara ESTÁ MAL

PA --- Pa acerrar --- P’acerrar
PA --- Pa empezar --- Pa empezar, P’empezar ESTÁ MAL

El QUE tien anguna regla especial:
Que+sonido vocálico: qu’estabas, q’hai.
Que+el: que’l.
Que+el+vocálicu: que l’armariu (siempre la palabra de después)
Que+él: qu’él.`,
                    examples: [],
                    exercises: [
                        { id: "b2-l4-ex1", question: 'Traduce y apostrofa donde sea necesario: El editor es muy bueno', expectedAnswer: "L’editor es mui güenu", explanation: "Apostrofación de 'El'." },
                        { id: "b2-l4-ex2", question: 'Traduce y apostrofa donde sea necesario: La actuación fue larga', expectedAnswer: "L’atuación jue larga", explanation: "Apostrofación de 'La'." },
                        { id: "b2-l4-ex3", question: 'Traduce y apostrofa donde sea necesario: Dijo que el prado es llano', expectedAnswer: "Dijo que’l práu es llanu", explanation: "Apostrofación de 'que el'." },
                        { id: "b2-l4-ex4", question: 'Traduce y apostrofa donde sea necesario: Sabes que él no fue', expectedAnswer: "Sabis qu’él no jue", explanation: "Apostrofación de 'que él'. Y reglas j/f." },
                        { id: "b2-l4-ex5", question: 'Traduce y apostrofa donde sea necesario: Hacha de oro y de esmeraldas', expectedAnswer: "Jacha d'oru y d'esmeraldas", explanation: "Apostrofación de 'de'." },
                        { id: "b2-l4-ex6", question: 'Traduce y apostrofa donde sea necesario: Pa’ Ana el grande de ayer', expectedAnswer: "P'Ana el grandi d'ahier", explanation: "Apostrofación de 'Pa'." },
                        { id: "b2-l4-ex7", question: 'Traduce y apostrofa donde sea necesario: La iglesia del pueblo es grande', expectedAnswer: "La iglesia del pueblu es grandi", explanation: "Sin apostrofación de LA al empezar la siguiente palabra con i." },
                        { id: "b2-l4-ex8", question: 'Traduce y apostrofa donde sea necesario: Sigue el rastro', expectedAnswer: "Sigue’l rastru", explanation: "Apostrofación de 'el' en la palabra anterior." },
                        { id: "b2-l4-ex9", question: 'Traduce y apostrofa donde sea necesario: Sigue el aire', expectedAnswer: "Sigue l’airi", explanation: "Apostrofación de 'el' en la siguiente palabra (doble contacto de vocal)." },
                        { id: "b2-l4-ex10", question: 'Traduce y apostrofa donde sea necesario: Que hay', expectedAnswer: "Qu’hai", explanation: "Apostrofación de 'Que' con 'hai'." }
                    ]
                }
            ]
        },
        {
            id: "block-3",
            title: "BLOQUI 3",
            description: "Cierre vocálico, Neutro de materia, Complementos y enclisis",
            lessons: [
                {
                    id: "b3-l1",
                    title: "Lección 1---- Cierre vocálico",
                    theory: `En cántabru asistin 3 tipos de cierri vocálicu. El TÓNICU, el POST-TÓNICU y el PRETÓNICU. Nel cántabru estándar úsase solu el PRETÓNICO. Los otros dos estarán dispuniblis juturamenti ena istinsión de dialeutos.

El cierri vocálicu ajunciona de la siguienti manera:
Cuandu la SÍLABA TÓNICA tien una vocal acerráa (i, u), tolas “o” y “e” aciérranse a “u” e “i” jasta la propia tónica u jasta qu’haya una “a”. Por ejemplu:
Podría --- Tónica en “ní”, polo que “o” --> “u” --- Pudría
Femenino --- Tónica en “ni” polo que “e” --> “i” --- Fimininu
Menú --- Tónica en “ú” polo que “e” --> “i” --- Minú

Tamién aplícasi el cierri cuandu la tónica es unu de los siguientis diptongos: “io” “ue” “ie”
Sesión --- Tónica en “ió” polo que “e” --> “i” --- Sisión
Teruel --- Tónica en “ue” polo que “e” --> “i” --- Tiruel
Comienzo -- Tónica en “ie” polo que “o” --> “u” --- Cumienzo`,
                    examples: [],
                    exercises: [
                        { id: "b3-l1-ex1", question: 'Traduce: Metió', expectedAnswer: "Mitió", explanation: "Tónica en ió, cierra la e en i." },
                        { id: "b3-l1-ex2", question: 'Traduce: Diorita', expectedAnswer: "Diurita", explanation: "Tónica en ri, cierra la o en u." },
                        { id: "b3-l1-ex3", question: 'Traduce: Lección', expectedAnswer: "Lición", explanation: "Tónica en ió, cierra e." },
                        { id: "b3-l1-ex4", question: 'Traduce: Perdiera', expectedAnswer: "Pirdiera", explanation: "Tónica en ie, cierra e." },
                        { id: "b3-l1-ex5", question: 'Traduce: Vendría', expectedAnswer: "Vindría", explanation: "Tónica en i, cierra e." },
                        { id: "b3-l1-ex6", question: 'Traduce: Tercio', expectedAnswer: "Tercio", explanation: "La vocal tónica es una E!!" },
                        { id: "b3-l1-ex7", question: 'Traduce: Comí', expectedAnswer: "Cumí", explanation: "Tónica en i, cierra o." },
                        { id: "b3-l1-ex8", question: 'Traduce: Cementerio', expectedAnswer: "Cementerio", explanation: "La vocal tónica es una E!!" },
                        { id: "b3-l1-ex9", question: 'Traduce: Insolación', expectedAnswer: "Insulación", explanation: "Tónica en o no cierra, pero aquí la tónica no cierra, espera... 'Insolación' es Insulación porque la a corta el cierre? Ah no, la tónica es 'ción'. 'a' no cierra. Pero el usuario dio esa respuesta." },
                        { id: "b3-l1-ex10", question: 'Traduce: Bebí', expectedAnswer: "Bibí", explanation: "Tónica en i, cierra e." },
                        { id: "b3-l1-ex11", question: 'Traduce: Bebía', expectedAnswer: "Bibía", explanation: "Bibía = Verbo /// Bibida = Sustantivo" },
                        { id: "b3-l1-ex12", question: 'Traduce: Comía', expectedAnswer: "Cumía", explanation: "Cumía = Verbo /// Cumida = Sustantivo" },
                        { id: "b3-l1-ex13", question: 'Traduce: Tónico', expectedAnswer: "Tónicu", explanation: "Acaba en U." },
                        { id: "b3-l1-ex14", question: 'Traduce: Sentir', expectedAnswer: "Sintir", explanation: "Tónica en i, cierra e." },
                        { id: "b3-l1-ex15", question: 'Traduce: Cosucas', expectedAnswer: "Cusucas", explanation: "Tónica en u, cierra o." },
                        { id: "b3-l1-ex16", question: 'Traduce: Mozuco', expectedAnswer: "Muzucu", explanation: "Tónica en u, cierra o." },
                        { id: "b3-l1-ex17", question: 'Traduce: Escribe', expectedAnswer: "Iscribi", explanation: "Tónica en i, cierra e." },
                        { id: "b3-l1-ex18", question: 'Traduce: Prohibido', expectedAnswer: "Pruhibíu", explanation: "Tónica en i, cierra o." },
                        { id: "b3-l1-ex19", question: 'Traduce: Decir', expectedAnswer: "Dicir", explanation: "Tónica en i, cierra e." },
                        { id: "b3-l1-ex20", question: 'Traduce: Pregunta', expectedAnswer: "Prigunta", explanation: "Tónica en u, cierra e." }
                    ]
                },
                {
                    id: "b3-l2",
                    title: "LECCIÓN 2 ---- NEUTRO DE MATERIA",
                    theory: `Pa emplear el neutru de materia hai que tener en cuenta si l’ojetu es contabli u incontabli.

SI ES CONTABLI:
El ajitivu y pronombri concuerda en géneru, por ejemplu: “Un boti suciu”, cumu boti es contabli, l’ajitivu concuerda siendo masculinu, además el su pronombri tamién: “lávalu”. Estu aplica en fimininu tamién: “La moneda doráa” ,“Dámela”
-Boti (Contable), Suciu (Masculino, que concuerda con “bote”), Lávalu (Masculino, el cual acaba en “u”)
-Moneda (Contable), Doráa (Femenino), Dámela (Femenino, acabado en “a”)

SI ES INCONTABLI:
Si es incontabli la cosa cambea, indipindientimenti de ser masculinu u fimininu, si l’jetu es INCONTABLI, l’ajitivu es masculinu ( ACABÁU EN “U”) y el pronombri es neutru (ACABÁU EN “O”)
El barru pringosu, sáltalo:
Barru (incontable), Pringosu (Masculino), Sáltalo (Neutro, el cual acaba en “o”)
La ropa suciu, tiéndilo:
Ropa (Incontable), Suciu (Masculino), Tiéndilo (Neutro, acabado en “o”)`,
                    examples: [],
                    exercises: [
                        { id: "b3-l2-ex1", question: 'Traduce sintagma (ropa/mojada): La ropa mojada', expectedAnswer: "La ropa mojáu", explanation: "Ropa es incontable. Adjetivo acaba en u." },
                        { id: "b3-l2-ex2", question: 'Traduce sintagma: La arena revuelta', expectedAnswer: "L’arena regüeltu", explanation: "Arena incontable." },
                        { id: "b3-l2-ex3", question: 'Traduce: Lava ese pantalón y dóblalo', expectedAnswer: "Lava esi pantalón y dóblalu", explanation: "Pantalón es contable." },
                        { id: "b3-l2-ex4", question: 'Traduce: Lava esa camiseta y dóblala', expectedAnswer: "Lava esa camiseta y dóblala", explanation: "Camiseta contable femenina." },
                        { id: "b3-l2-ex5", question: 'Traduce: Lava esa ropa y dóblala', expectedAnswer: "Lava esa ropa y dóblalo", explanation: "Ropa incontable -> pronombre acabado en o." },
                        { id: "b3-l2-ex6", question: 'Traduce: El coche no lo cogió', expectedAnswer: "El cochi no lu cugió", explanation: "Coche es contable." },
                        { id: "b3-l2-ex7", question: 'Traduce: Esa pregunta no la entendió', expectedAnswer: "Esa prigunta no la entendió", explanation: "Pregunta es contable." },
                        { id: "b3-l2-ex8", question: 'Traduce: El asco no lo sintió nunca', expectedAnswer: "L’ascu no lo sintió nunca", explanation: "Asco incontable." },
                        { id: "b3-l2-ex9", question: 'Traduce: Hay sopa hecha allí', expectedAnswer: "Hai sopa jechu allí", explanation: "Sopa es incontable." },
                        { id: "b3-l2-ex10", question: 'Traduce: Piedra seca', expectedAnswer: "Piedra secu", explanation: "Piedra como elemento genérico." },
                        { id: "b3-l2-ex11", question: 'Escoge la respuesta correcta: ¿Si un objeto es femenino incontable, como son el adjetivo y pronombre?', expectedAnswer: "c)", options: ["a) Adjetivo femenino y pronombre neutro", "b) Depende si el objeto es sujeto o no dentro de la oración", "c) Adjetivo masculino y pronombre neutro", "d) Adjetivo neutro y el pronombre acabado en “u” porque es singular", "e) Como he leído varias veces la teoría... la plural...", "f) Igual que en asturiano, todo neutro"], explanation: "Adjetivo en u (masc.), pronombre en o (neutro)." },
                        { id: "b3-l2-ex12", question: 'Elige la respuesta correcta: El viento es...', expectedAnswer: "b)", options: ["a) Incontable masculino, es decir, adjetivo masculino y pronombre masculino", "b) Incontable masculino, es decir, adjetivo masculino y pronombre neutro", "c) Contable femenino", "d) Para esa palabra no se aplica el neutro de materia", "e) Neutral, adjetivo femenino y pronombre neutro"], explanation: "Adjetivo masculino, pronombre neutro." }
                    ]
                },
                {
                    id: "b3-l3",
                    title: "LECCIÓN 3 ----- COMPLEMENTO DIRECTO E INDIRECTO Y ENCLISIS",
                    theory: `La inclisis cunsiste en poner un pronombri dimpués d’un verbu
Me dijo --- Díjome
Me trajo --- Tríjome
Se trae --- Traise

Si al jormar la inclisis la palabra riquier d’una tilde pa no perder la su tónica original, es obligatoriu ponela
-Me dijo – Dijome (esdrújula) -- Díjome
-Se metió -- MItiose (mantiene tilde) -- Mitióse
-Se requiere – Riquiersi (aguda -> llana, sin tilde).

Las inclisis úsanse sobri tou al iniciu de las uracionis. Son libris de usu pa cuandu sueni bien.
A los verbos con pronombris, se lis quita la “r”
Verte --- Vete | Cogerlo --- Cogelo | Darte --- Date

Distinción entre “SE”:
SE direutu --- SE | SE indireutu --- SI | SE impersonal --- SI | SÉ --- SÉ`,
                    examples: [
                        "Vino a dame. / Vino a dami las llavis.",
                        "Quier vete. / Quier veti la cara.",
                        "Pasó a recogelu. / Pasó a recogeli las cosas.",
                        "Van a traela. / Van a traeli un café."
                    ],
                    exercises: [
                        { id: "b3-l3-ex1", question: 'Traduce (no uses enclisis): Vengo a pintarte el brazo', expectedAnswer: "Vengo a pintati’l brazu", explanation: "Se quita la r a pintar frente a ti/te." },
                        { id: "b3-l3-ex2", question: 'Traduce (no uses enclisis): Me puse allí', expectedAnswer: "Me pusi allí", explanation: "Me directo." },
                        { id: "b3-l3-ex3", question: 'Traduce (no uses enclisis): Me puse una pulsera en el brazo', expectedAnswer: "Mi pusi una pulsera nel brazu", explanation: "Mi indirecto (me puse algo)." },
                        { id: "b3-l3-ex4", question: 'Se sabe por el color (Utiliza enclisis)', expectedAnswer: "Sábisi pol color", explanation: "Se impersonal -> si. Tónica pasa a esdrújula." },
                        { id: "b3-l3-ex5", question: 'Voy a peinarme (No uses enclisis)', expectedAnswer: "Voi a peiname", explanation: "Pronombre me." },
                        { id: "b3-l3-ex6", question: 'Va a peinarte el pelo (No uses enclisis)', expectedAnswer: "Va a peinati el pelu", explanation: "Te indirecto -> ti." },
                        { id: "b3-l3-ex7", question: 'Voy a ponerme los calcetines (No uses enclisis)', expectedAnswer: "Voi a ponemi los calcitinis", explanation: "Me indirecto." },
                        { id: "b3-l3-ex8", question: 'Me golpeó el brazo (Utiliza enclisis)', expectedAnswer: "Golpeómi’l brazu", explanation: "Enclisis." },
                        { id: "b3-l3-ex9", question: 'Hay que representarla bien (No uses enclisis)', expectedAnswer: "Hai que representala bien", explanation: "Quitar r al verbo." },
                        { id: "b3-l3-ex10", question: 'Para este tema, hay que representarles un eje para que lo entiendan (No uses enclisis)', expectedAnswer: "Pa esti tema, hai que representales un eji pa que lu intiendan", explanation: "Representales quitando la r, eji y cierre vocálico intiendan." },
                        { id: "b3-l3-ex11", question: 'Se cayó (Utiliza enclisis)', expectedAnswer: "Cayóse", explanation: "Enclisis." },
                        { id: "b3-l3-ex12", question: 'Se cayó su móvil al suelo (Utiliza enclisis)', expectedAnswer: "Cayósi’l su móvil al suelu", explanation: "Enclisis." },
                        { id: "b3-l3-ex13", question: 'Te voy a dar un regalo', expectedAnswer: "Ti voi a dar un regalu", explanation: "Indirecto." }
                    ]
                }
            ]
        },
        {
            id: "block-4",
            title: "BLOQUI DE VOCABULARIU Y VERBOS",
            description: "Verbos irregulares, conjugaciones y nuevo vocabulario.",
            lessons: [
                {
                    id: "b4-l1",
                    title: "LECCIÓN 1 ---- VERBOS",
                    theory: `VERBO SER
Yo soi/ero | Tú eris | Él/Ella es | Nós semos | Vós séis | Ell@s son
Yo juí | Tú juisti | Él/Ella jué | Nós juimos | Vós juístis | Ell@s juerin

CONJUGACIONES
En verbos como merecer, cunducir, la 1ª persona del singular: Yo merezo, yo cunduzo. La tercera persona: Ella merez, él cunduz.
En subjuntivo: Que ella cunduza.
El imperativo singular termina en I en 2ª y 3ª conjugación: poni, sali.
El imperativo plural adopta las terminaciones -ái -éi -íi para las 1ª, 2ª y 3ª: marcái, sobái, cogéi, jacéi, viníi, subíi.

INDEFINIDO: Verbo Echar.- Yo eché / Tú echesti / Ella echó / Nós echemos / Vós echestis / Ellas echarin. Verbo Comer.- Yo cumí / Tú cumisti / Ella cumió / Nós cumimos / Vós cumistis / Ellas cumierin.

VERBOS IRREGULARES
Sobar.- suebo, suebi, sobamos...
Coger.- cuejo, cuejis...
Coser.- cueso, cuesis...
Correr.- cuerro, cuerris...
Doler.- duelgo, duelis, duel...`,
                    examples: [],
                    exercises: []
                },
                {
                    id: "b4-l2",
                    title: "LECCIÓN 2 --- VOCABULARIO",
                    theory: `Repaso de palabras de vocabulario incluidas en este bloque:

- Pero - Piru
- Como - Cumu
- Agua - Augua
- Pequeño - Chicu
- Coger - Pescar
- Caber - Coger
- Cubo – Calderu/Tangarru
- Cartel – Endicaor/Rétulu
- Pulpo - Pulpe
- Empinado - Pindiu
- Uno detras de otro - Arronti
- Mucho - Asgaya
- Sin - Ensín
- Así - Asina
- Gris - Pedrés
- El puente – La puenti
- Arenisca - Ariniza
- Hablar – Parlar/Jablar
- Bonito – Guapu
- Piedra – Cantu
- Grava – Grija
- Marrón - Pardu
- Maullar – Miagar
- Maullido -- Miaguíu
- Pez – Peji
- Comer – Gandumiar
- Conejo -- Lapín
- Murciélago -- Sapulatu`,
                    examples: [],
                    exercises: []
                }
            ]
        },
        {
            id: "block-5",
            title: "BLOQUI D’ESTRAS",
            description: "Palatalización, Tres y Verbos en A.",
            lessons: [
                {
                    id: "b5-l1",
                    title: "LECCIÓN 1 ---- PALATALIZACIÓN",
                    theory: `A vecis, cuandu hai una “n” con una “i”, si palataliza en “ñ”
Nieve -- Ñevi
Nidal -- Ñial`,
                    examples: [],
                    exercises: []
                },
                {
                    id: "b5-l2",
                    title: "LECCIÓN 2 ----- TRES",
                    theory: `Cuandu hai “trans” nuna palabra, cambea a “tres”
Transportar – Tresportar
Teletransporte – Teletresporti`,
                    examples: [],
                    exercises: []
                },
                {
                    id: "b5-l3",
                    title: "LECCIÓN 3 ---- VERBOS EN A",
                    theory: `Angunos verbos cumienzan por “a” en cántabru:
Funcionar - Ajuncionar
Rascar - Arrascar
Cerrar - Acerrar
Juntar – Ajuntar
Rozar - Arrozar`,
                    examples: [],
                    exercises: []
                }
            ]
        }
    ],
    vocabulary: {
        id: "vocab",
        title: "Repaso Vocabulario y Palabras",
        description: "Repaso de palabras clave y traducciones del cántabru.",
        categories: [
            {
                name: "Palabras y Expresiones",
                words: [
                    { cantabru: "Pero", castellano: "Piru", example: "" },
                    { cantabru: "Como", castellano: "Cumu", example: "" },
                    { cantabru: "Agua", castellano: "Augua", example: "" },
                    { cantabru: "Pequeño", castellano: "Chicu", example: "" },
                    { cantabru: "Coger", castellano: "Pescar", example: "" },
                    { cantabru: "Caber", castellano: "Coger", example: "" },
                    { cantabru: "Calderu/Tangarru", castellano: "Cubo", example: "" },
                    { cantabru: "Endicaor/Rétulu", castellano: "Cartel", example: "" },
                    { cantabru: "Pulpe", castellano: "Pulpo", example: "" },
                    { cantabru: "Pindiu", castellano: "Empinado", example: "" },
                    { cantabru: "Arronti", castellano: "Uno detras de otro/Todo seguido", example: "" },
                    { cantabru: "Asgaya", castellano: "Mucho/En grandes cantidades", example: "" },
                    { cantabru: "Ensín", castellano: "Sin", example: "" },
                    { cantabru: "Asina", castellano: "Así", example: "" },
                    { cantabru: "Pedrés", castellano: "Gris", example: "" },
                    { cantabru: "La puenti", castellano: "El puente", example: "" },
                    { cantabru: "Ariniza", castellano: "Arenisca", example: "" },
                    { cantabru: "Parlar/Jablar", castellano: "Hablar", example: "" },
                    { cantabru: "Guapu", castellano: "Bonito", example: "" },
                    { cantabru: "Cantu", castellano: "Piedra", example: "" },
                    { cantabru: "Grija", castellano: "Grava", example: "" },
                    { cantabru: "Pardu", castellano: "Marrón", example: "" },
                    { cantabru: "Miagar", castellano: "Maullar", example: "" },
                    { cantabru: "Miaguíu", castellano: "Maullido", example: "" },
                    { cantabru: "Peji", castellano: "Pez", example: "" },
                    { cantabru: "Gandumiar", castellano: "Comer", example: "" },
                    { cantabru: "Lapín", castellano: "Conejo", example: "" },
                    { cantabru: "Sapulatu", castellano: "Murciélago", example: "" }
                ]
            }
        ]
    }
};
