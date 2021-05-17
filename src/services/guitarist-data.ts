export interface GuitaristInfo {
  name: string
  style: string
  bio: string
  country: string
  instrument: string
  youtube: string[]
}

export type GuitaristsByCountry = Record<string, GuitaristInfo[]>

export const getAll = async () => {
  const res = await fetch('http://localhost:8000/guitarists')
  return await res.json() as GuitaristInfo[]
}

// export const guitaristsInfo: GuitaristsByCountry = {
//   'Estados Unidos': [
//     {
//       name: 'Sister Rosetta',
//       style: 'Rock, blues, gospel',
//       bio: 'Esta mujer inventó el rock and roll, el flow y hasta las ganas de vivir. Sister Rosetta Tharpe fue la creadora del rock and roll. Hay muchas disputas si Chuck Berry o Little Richard fueron los verdaderos inventores -todos individuos negros-, pero, Sister Tharpe fue anterior a ellos. Elvis Presley, que amaba su feroz manera de tocar la guitarra y Dylan eran sus fans. Tocaba con una personal técnica, pinzando como los músicos de blues pero usando notas de jazz.',
//       youtube: [
//         'https://www.youtube.com/watch?v=jGPx4ancGhg&ab_channel=MikeBizimis',
//         'https://www.youtube.com/watch?v=JeaBNAXfHfQ&ab_channel=AnthonyRamirez'
//       ]
//     },
//     {
//       name: 'Jennifer Batten',
//       style: 'Hard rock, rock, heavy metal, Funk, Jazz fusión.',
//       bio: 'Reina del tapping y habilidad a todos los niveles',
//       youtube: [
//         'https://www.youtube.com/watch?v=j3vWiGcsiu0&ab_channel=TheWomen%27sInternationalMusicNetwork',
//         'https://www.youtube.com/watch?v=dauaFizBu0c'
//       ]
//     },
//     {
//       name: 'Kaki King',
//       style: 'Jazz, Post-rock, Shoegaze, Instrumental, Rock acústico',
//       bio: 'Guitarrista y compositora estadounidense. Es conocida por su percusión y teñido de melodías de jazz, con enérgicos shows en vivo, el uso de afinaciones múltiples en acústica y la guitarra lap steel, y su amplia gama de diferentes géneros.',
//       youtube: [
//         'https://www.youtube.com/watch?v=jDmth1YZI7k&ab_channel=Mouldytone',
//         'https://www.youtube.com/watch?v=irCstf6Rn6k&ab_channel=JamPlay',
//         'https://www.youtube.com/watch?v=xihL_DKxBpQ&ab_channel=teetsea75'
//       ]
//     },
//   ],
//   Serbia: [
//     {
//       name: 'Ana Popović',
//       style: 'Blues',
//       bio: 'Acostumbrados a recibir material estadounidense y británico cuando hablamos de Blues, Serbia parece una procedencia poco habitual. Pero Ana Popovic es ya una conocida para muchos guitarristas, que admiran sus importantes aportaciones al género. Buen gusto y autenticidad son sus señas de identidad.',
//       youtube: [
//         'https://www.youtube.com/watch?v=p-1_Ev5J79U',
//         'https://www.youtube.com/watch?v=H-jLVjnC_eQ'
//       ]
//     },
//   ],
//   Croacia: [
//     {
//       name: 'Ana Vidovic',
//       style: 'Clásico',
//       bio: 'Con una técnica envidiable, la guitarrista croata fue la alumna más joven de la historia en acceder a la Academia Nacional Musical en Zagreb.',
//       youtube: [
//         'https://www.youtube.com/watch?v=inBKFMB-yPg',
//         'https://www.youtube.com/watch?v=aoN9axWAoPU'
//       ]
//     },
//   ],
//   Francia: [
//     {
//       name: 'Tina Setkic ',
//       style: 'Heavy metal',
//       bio: 'Cuando sólo era una adolescente, ya tocaba unas piezas de dificultad más que elevada, haciendo palidecer a más de uno. Actualmente tiene unos 17 años, así que aún tenemos tiempo para ver lo que es capaz de hacer en el futuro.',
//       youtube: [
//         'https://www.youtube.com/watch?v=o6rBK0BqL2w',
//         'https://www.youtube.com/watch?v=XpASSx0ecTU'
//       ]
//     },
//   ],
//   Australia: [
//     {
//       name: 'Orianthi Panagaris',
//       style: 'Hard rock, Rock alternativo, Metal alternativo, pop rock, Pop punk',
//       bio: 'Cantante y guitarrista australiana de ascendencia griega, popular por su trabajo con Michael Jackson como parte de la gira This Is It y con Alice Cooper .Panagaris demostró talento desde su temprana niñez, aprendió a tocar piano a los tres años, la guitarra acústica a los seis años, comenzó a dominar la guitarra eléctrica cuando tenía once años y dejó la escuela a los 15 para centrarse en escribir canciones y tocar.',
//       youtube: [
//         'https://www.youtube.com/watch?v=mK6tcgsKgps&ab_channel=SilentDarkDrummer',
//         'https://www.youtube.com/watch?v=mg4pug1mKJU&ab_channel=jennrogers'
//       ]
//     },
//   ],
//   México: [
//     {
//       name: 'Gabriela Quintero',
//       style: 'Rock, música acústica, folk rock, rock acústico, flamenco rumba, música instrumental',
//       bio: 'Integrante del dúo "Rodrigo y Gabriela" originario de México, que ganó fama en Irlanda y posteriormente en el resto de Europa. Los miembros de la banda son Rodrigo Sánchez y Gabriela Quintero y se han dedicado a crear rock acústico aunque sus composiciones están influidas por la música latina, el flamenco y la música del medio oriente, a la vez que utilizan recursos rítmicos, armónicos y melódicos propios del rock y del heavy metal.',
//       youtube: [
//         'https://www.youtube.com/watch?v=cSwfyGNALxY&ab_channel=WhatWeMakeUp',
//         'https://www.youtube.com/watch?v=8UPHFjHvGvY&ab_channel=TED'
//       ]
//     },
//   ],
//   Mali: [
//     {
//       name: 'Rokia Traoré',
//       style: 'Electroacústico, Afro-beat, Folk',
//       bio: 'Traoré pertenece a la etnia bambara, también llamada bamana. Nació en 1974 en la región de Belidougou, en Malí, cerca de la frontera con Mauritania. Aunque los bambara tienen una importante tradición musical, basada en los griots, músicos profesionales, la familia de Traoré pertenecía a la nobleza, que tiene tradicionalmente prohibido dedicarse a la música. No obstante, Rokia emprendió la carrera musical, contando entre sus primeros maestros al célebre guitarrista maliense Ali Farka Touré.',
//       youtube: [
//         'https://www.youtube.com/watch?v=s91P5AT2p5E&ab_channel=KEXP',
//         'https://www.youtube.com/watch?v=rhNl4xq02y8&ab_channel=KCRW'
//       ]
//     },
//   ],
//   Canadá: [
//     {
//       name: 'Joni Mitchell',
//       style: 'Folk, folk rock, jazz, art rock',
//       bio: 'Cantante y pintora canadiense. Comenzó su carrera musical en Toronto y en el oeste de Canadá, se relacionó luego con la floreciente escena de folk de Nueva York de mediados de los sesenta. Autora de la canción icónica «Woodstock», a lo largo de los años 1970 amplió sus horizontes musicales, dirigiendo su interés hacia el pop y el jazz, para convertirse en una de las cantantes y compositoras más respetadas de finales del siglo XX',
//       youtube: [
//         'https://www.youtube.com/watch?v=GFB-d-8_bvY',
//         'https://www.youtube.com/watch?v=f7MbmXklj3Q&ab_channel=MrGrapeKoolayd'
//       ]
//     },
//   ],
//   Rusia: [
//     {
//       name: 'Anna Likhacheva',
//       style: 'Clásica',
//       bio: 'Anna nace el 13 de noviembre de 1993 en Rostov-on-Don (Rusia). Comenzó con lecciones de guitarra a los 3 años y medio, cuando  apenas tenía 10 años se graduó en la escuela de música. Seguidamente, entre 2007 y 2011 se graduó en la Facultad de Arte de Rostov, para acabar de completar su formación superior en la Academia Rostov llamada S. V. Rachmaninov, en 2015. Actualmente enseña en la Escuela Superior de Artes y Música de Rostov, su localidad natal, donde continúa perfeccionándose con sus alumnos.',
//       youtube: [
//         'https://www.youtube.com/watch?v=MhuyBqeB1SY&ab_channel=AnnaLikhacheva',
//         'https://www.youtube.com/watch?v=mGabfC4Q3s4&ab_channel=AnnaLikhacheva'
//       ]
//     },
//   ],
//   'Reino Unido': [
//     {
//       name: 'Alexandra Whittingham',
//       style: 'Clásica',
//       bio: 'Alexandra Whittingham es una guitarrista clásica británica. Ganó el Concurso de Guitarra de Edimburgo, ocupó el segundo lugar en el Concurso Internacional de Guitarra Juvenil de los Cárpatos y fue nombrada guitarrista del año en el Concurso de Jóvenes Músicos Gregynog. Whittingham estudió música en la Escuela de Música de Chetham en Manchester desde los 11 hasta los 18 años, luego en la Royal Academy of Music de Londres.',
//       youtube: [
//         'https://www.youtube.com/watch?v=P7ZLcUYzvnc&ab_channel=AlexandraWhittingham',
//         'https://www.youtube.com/watch?v=V2F6RswMYpw&ab_channel=AlexandraWhittingham'
//       ]
//     },
//     {
//       name: 'Lita Ford',
//       style: 'Heavy metal, hard rock, Glam metal',
//       bio: 'Es una vocalista y guitarrista británica-estadounidense de rock, que alcanzó la popularidad en la década de 1980 y por haber sido parte de la banda de rock formada exclusivamente por mujeres adolescentes "The Runaways" (1975-1979) desde los 16 años.',
//       youtube: [
//         'https://www.youtube.com/watch?v=qKBElXczQvM&ab_channel=HenrikHansson',
//         'https://www.youtube.com/watch?v=liXzQbTkIAc&ab_channel=DecibelGeek',
//         'https://www.youtube.com/watch?v=tcCPNHIwRK8&ab_channel=GreatGuitarHeroes'
//       ]
//     },
//   ],
//   China: [
//     {
//       name: 'Xuefei Yang',
//       style: 'Clásico',
//       bio: 'Yang nació en Beijing en 1977 y comenzó a tocar la guitarra cuando tenía siete años. Hizo un debut público en el Primer Festival Internacional de Guitarra de China, donde fue aclamada de inmediato. En su debut, uno de los luthiers más respetados, Masaru Kohno, le regaló una guitarra, Pepe de Aria, que fue su primera guitarra extranjera. El siguiente logro que obtuvo fue un segundo premio en el concurso de Guitarra Senior de Beijing cuando solo tenía once años.',
//       youtube: [
//         'https://www.youtube.com/watch?v=U9pYKSH8N8Q&ab_channel=XuefeiYang',
//         'https://www.youtube.com/watch?v=AzLJKk9yXq0&ab_channel=Fargo28'
//       ]
//     },
//   ],
//   'Costa de Marfil': [
//     {
//       name: 'Fatoumata Diawara',
//       style: 'Folk, jazz, soul',
//       bio: 'Actriz y cantante que fusiona el folk Wassoulou con jazz y soul, residente en Francia. Ha colaborado con varios artistas, como la maliense Oumou Sangaré, el etíope Mulatu Astatke, el estadounidense Bobby Womack, el francés Matthieu Chedid y el cubano Roberto Fonseca, así también con la banda británica de rock alternativo Gorillaz con el sencillo Désolé.',
//       youtube: [
//         'https://www.youtube.com/watch?v=2sBqMBEehIs&ab_channel=COLORS',
//         'https://www.youtube.com/watch?v=E82BifytoYY&ab_channel=WorldCircuitRecords'
//       ]
//     },
//   ],
//   Nigeria: [
//     {
//       name: 'Fatou Seidi Ghali',
//       style: 'rock indie, trip hop, dub, soul, reggae, ritmos africanos',
//       bio: 'Guitarrista del grupo "Les Filles de Illighadad", un grupo de un pequeño pueblo llamado Illighadad en la región tuareg del Sahara en el oeste de Níger, Fatou es la primer tuareg que se comvierte en guitarrista profesional.',
//       youtube: [
//         'https://www.youtube.com/watch?v=pgxCIs-SFpk&ab_channel=SahelSounds',
//         'https://www.youtube.com/watch?v=C7swdFFvBQk&ab_channel=TheCedarCulturalCenter',
//         'https://www.youtube.com/watch?v=HIAOG9nhrt8&ab_channel=vprovrijegeluiden'
//       ]
//     },
//     {
//       name: 'Nneka',
//       style: 'rock indie, trip hop, dub, soul, reggae, ritmos africanos',
//       bio: 'Nacida en Nigeria, con 19 años se traslado a Hamburgo, Alemania,para seguir una carrera dedicada al canto, junto con una carrera en Antropología. Sus influencias reflejan sus jóvenes días en Nigeria, así como su estancia en el mundo occidental. La distancia entre ambos brilla a través de su voz.',
//       youtube: [
//         'https://www.youtube.com/watch?v=W1C2D-MzziY&ab_channel=KEXP',
//         'https://www.youtube.com/watch?v=4ytxjppXadM&ab_channel=KEXP'
//       ]
//     },
//   ],
//   Kenia: [
//     {
//       name: 'Naomi Wachira',
//       style: 'Folk',
//       bio: 'La cantautora keniana-estadounidense Naomi Wachira creció cantando música gospel en un coro de familiares y amigos. Inspirada por la música de Tracy Chapman y Miriam Makeba, quiso seguir su ejemplo, hacer del mundo un lugar mejor escribiendo música conmovedora y vivificante. Ha recibido numerosos elogios, incluida la de ser nombrada "Mejor Artista Folk" por Seattle Weekly.',
//       youtube: [
//         'https://www.youtube.com/watch?v=hJMBubNUr1s&ab_channel=NaomiWachira',
//         'https://www.youtube.com/watch?v=8h4NWdsEp3s&ab_channel=TheGarageVideoSessions',
//         'https://www.youtube.com/watch?v=X2U2bmm622M&ab_channel=NaomiWachira'
//       ]
//     },
//   ],
//   Argentina: [
//     {
//       name: 'Espiral de Mujeres Guitarristas',
//       style: 'Música académica y de la música folklórica argentina y latinoamericana',
//       bio: 'Proyecto integrado por las guitarristas: Andrea Zurita, Laura Zilber, Agostina Elzegbe, Soledad Lazarte, Ana Larrubia y María Clara Millán. Desde 2014 el proyecto “Espiral de Mujeres Guitarristas” ofrece ciclos de conciertos con un repertorio heterogéneo nutrido de la música académica y de la música folklórica argentina y latinoamericana en diferentes formaciones. Donde la única constante son: la mujer y la guitarra.',
//       youtube: [
//         'https://www.youtube.com/watch?v=dmkLKfNcYY0&ab_channel=EspiraldeMujeresGuitarristas',
//         'https://www.youtube.com/watch?v=d0X5ZnegfJc&ab_channel=EspiraldeMujeresGuitarristas'
//       ]
//     },
//   ],
//   Cuba: [
//     {
//       name: 'Yarima Blanco',
//       style: 'Son Cubano',
//       bio: 'Desde pequeña muestró su talento estudiando Guitarra en el conservatorio de Música de su ciudad natal, donde participó activamente y obtuvo premios en varios concursos infantiles.',
//       youtube: [
//         'https://www.youtube.com/watch?v=WWBQvPmYaL4&ab_channel=YarimaBlanco',
//         'https://www.youtube.com/watch?v=OQP_binzkgQ&ab_channel=jrdumfries'
//       ]
//     },
//   ],
//   Brasil: [
//     {
//       name: 'Prika Amaral',
//       style: 'Thrash Metal',
//       bio: 'La brasileña Prika Amaral es guitarrista y fundadora de Nervosa, grupo de thrash formado por cuatro mujeres. Las guitarras furiosas y urgentes de Prika les dan paso a letras enfocadas en problemas sociales que asolan el mundo en general, como la corrupción y las crisis políticasn',
//       youtube: [
//         'https://www.youtube.com/watch?v=35Rys0jGnM0&ab_channel=NapalmRecords',
//         'https://www.youtube.com/watch?v=7kB0GV6dC9o&ab_channel=PedroneAmplificadores'
//       ]
//     },
//     {
//       name: 'Badi Assad',
//       style: 'Jazz, worldbeat',
//       bio: 'Proviene de una familia de gran tradición musical. Su padre, Jorge Assad, de ascendencia libanesa, toca el bandolim (mandolina), y sus dos hermanos mayores, Sergio Assad y Odair Assad, son guitarristas y forman el Dúo Assad. Estudió guitarra clásica en la universidad de Río de Janeiro y ganó el Concurso joven de los instrumentistas en Río de Janeiro en 1984. En 1986, se unió a la Orquesta de guitarras de Río de Janeiro, dirigida por el guitarrista Turíbio Santos. En 1987, le nombraron "mejor Guitarrista brasileño" en el Festival internacional Villa-Lobos.',
//       youtube: [
//         'https://www.youtube.com/watch?v=CBMe9foIuR0&ab_channel=melwicca',
//         'https://www.youtube.com/watch?v=5fDYzc6UclI&ab_channel=KUTXAustin'
//       ]
//     },
//   ],
//   'Japón': [
//     {
//       name: 'Kanako Nakayama (中山加奈子)',
//       style: 'J-Pop, J-rock',
//       bio: 'Es una cantante, letrista, compositora y músico japonesa. Fue la guitarrista de las bandas japonesas "Princess Princess" y "VooDoo Hawaiians". Se graduó de la Isogo high school, mientras cursaba sus estudios académicos, ubicada en Isogo-ku (磯子区). En el año 1983 kanako debutó en un concurso de tv de más de 1300 aspirantes, realizado por la empresa TDK Records. ',
//       youtube: [
//         'https://www.youtube.com/watch?v=-ND3fpY8y-Y&ab_channel=Molotov386',
//         'https://www.youtube.com/watch?v=EO92xDw1HXw&ab_channel=cdleite2',
//         'https://www.youtube.com/watch?v=7yRzWjRlXmc&ab_channel=cdleite2'
//       ]
//     },
//   ],
//   'Nueva Zelanda': [
//     {
//       name: 'Emily Edrosa',
//       style: 'Indie rock, Punk',
//       bio: 'Líder de la banda "Street Chant" durante más de diez años y, posteriormente, comenzó su carrera en solitario con el álbum "Another Wave Is Coming"',
//       youtube: [
//         'https://www.youtube.com/watch?v=uB5zb50VWns&ab_channel=ParkTheVan',
//         'https://www.youtube.com/watch?v=SG950RxEAzM&ab_channel=RNZ'
//       ]
//     },
//   ],
//   'Irán': [
//     {
//       name: 'Lily Afshar',
//       style: 'Música académica contemporánea Ver y modificar los datos en Wikidata',
//       bio: 'Lily Afshar nació el 9 de marzo de 1960 en Teherán. De una familia azerí en Irán, comenzó a aprender guitarra a la edad de 10 años y pudo obtener un doctorado en interpretación de Universidad Estatal de Florida como la primera mujer en el mundo. Actualmente, está a cargo de la clase de guitarra en la Universidad de Memphis.',
//       youtube: [
//         'https://www.youtube.com/watch?v=8lQJOWKkS7Q&ab_channel=LilyAfshar',
//         'https://www.youtube.com/watch?v=fE-paUJYupk&ab_channel=MelBayPublications'
//       ]
//     },
//   ],
//   Algeria: [
//     {
//       name: 'Souad Massi',
//       style: 'Rock, country, fado, folk, world music',
//       bio: 'Souad Massi se crio en el barrio de Bab El-Oued. Hija de una humilde familia de melómanos, descubre el chaabi, el rock and roll, el pop, el country, el flamenco, el folk. Tras aprender solfeo y guitarra, aparece en escena dentro del grupo Triana d\'Alger en 1989.1​',
//       youtube: [
//         'https://www.youtube.com/watch?v=U4J6zC7K0Pw&ab_channel=AdilMakhlouki',
//         ''
//       ]
//     },
//   ],
//   India: [
//     {
//       name: 'Kamala Shankar',
//       style: 'Música clásica india',
//       bio: 'Vidushi Dr. Kamala Shankar, una renombrada intérprete de la guitarra clásica india, ha cautivado al mundo con su inmaculada y melodiosa interpretación de la música clásica indostánica. Kamala tiene el mérito de haber inventado la "Shankar Slide Guitar". Es conocida por su enorme control y versatilidad, así como por la profundidad de su instrumento. Tiene una habilidad excepcional y natural para tocar el estilo "Gayaki Ang" y su música se conoce popularmente como "guitarra cantante".',
//       youtube: [
//         'https://www.youtube.com/watch?v=Cpmamamj4ro&ab_channel=RajuAsokan',
//         'https://www.youtube.com/watch?v=L1cOhoSx4pM&ab_channel=tothszabi'
//       ]
//     },
//   ],
//   'Sudáfrica': [
//     {
//       name: 'Alice Phoebe Lou',
//       style: 'Indie Rock, Shoegazing, Folk, Jazz',
//       bio: 'Lou creció en Kommetjie en la costa oeste de la Península del Cabo, en Sudáfrica, donde sus padres trabajaban como documentalistas; cuando era pequeña tomó clases de piano, de adolescente empezó a tocar la guitarra. En 2013 se trasladó finalmente a Berlín, donde ya concurre como una música callejera. En 2014 produjo "Momentum" su primer EP, dos Años más tarde apareció "Orbit" su Álbum debut de estudio.',
//       youtube: [
//         'https://www.youtube.com/watch?v=qcWocdfHfhI&ab_channel=AlicePhoebeLou',
//         'https://www.youtube.com/watch?v=dhz4YfE5lWQ&ab_channel=KizCat',
//         'https://www.youtube.com/watch?v=NPH9j0qVM3A&ab_channel=AlicePhoebeLou'
//       ]
//     },
//   ],
//   'Arabia Saudí': [
//     {
//       name: 'Adwa Aldakheel (أضوى الدخيل‎)',
//       style: 'Pop folk',
//       bio: '325 / 5000\n' +
//         'Resultados de traducción\n' +
//         'Autor, poeta, piloto, músico y empresario de Arabia Saudita. [1] Es la fundadora y directora ejecutiva de Falak, Ns3a y Dar Technology y cofundadora de Social Advisors. También es la fundadora de múltiples y emocionantes nuevas empresas que operan actualmente en la industria de la joyería, la industria de los medios y la industria de la tecnología financiera. ',
//       youtube: [
//         'https://www.youtube.com/watch?v=aISf91HtQk0&ab_channel=LibraProductions',
//         'https://www.youtube.com/watch?v=hAiNl_Sqmwo&ab_channel=LibraProductions',
//         'https://www.youtube.com/watch?v=s-xfIVCdPxw&ab_channel=AdwaAldakheel'
//       ]
//     },
//   ],
//   Egipto: [
//     {
//       name: 'Cherine Amr',
//       style: 'Heavy metal',
//       bio: 'Cherine nació y se crió en Alejandría y se introdujo por primera vez en el metal cuando escuchó a Metallica. En ese momento, no tenía idea de que había músicos y bandas que tocaban en lugares pequeños. Cuando comenzó la universidad fue cuando empezó a conocer el mundo de la música underground de Egipto. ',
//       youtube: [
//         'https://www.youtube.com/watch?v=qu9VAG9ffAQ&ab_channel=MassiveScarEra',
//         'https://www.youtube.com/watch?v=AnVlkZSBeuE'
//       ]
//     },
//   ],
//   Indonesia: [
//     {
//       name: 'Tashea Nicole Delaney ',
//       style: 'Heavy metal, Hard rock',
//       bio: 'Guitarrista y cantante de la banda Indonesia "Pain Killer".',
//       youtube: [
//         'https://www.youtube.com/watch?v=QpyY0tjbgA8&ab_channel=LeviTheFly',
//         'https://www.youtube.com/watch?v=3ZErvTq5hlg&ab_channel=TeguhHadiWijaya',
//         'https://www.youtube.com/watch?v=H1KSGbyga1k&ab_channel=ThePainKillersTrunk'
//       ]
//     },
//     {
//       name: 'Dodo (Diana Widoera)',
//       style: 'Acústico, Folk',
//       bio: 'Guitarrista y cantante de "D\'Cinnamons", una banda acústica de Indonesia nacida en septiembre de 2004. La banda está formada por tres miembros, dos mujeres y un hombre: Dodo (voz principal y guitarra rítmica), Bona (guitarra y voz) y Nana (bajo acústico y voz). Su álbum debut, "Good Morning", fue lanzado a principios de 2007 con su primer sencillo, "Loving You".',
//       youtube: [
//         'https://www.youtube.com/watch?v=pemvfwQ2gKw&ab_channel=PojokKreator',
//         'https://www.youtube.com/watch?v=0XdEry7tskA&ab_channel=BahanaFMJakarta',
//       ]
//     },
//   ],
//   Suecia: [
//     {
//       name: 'Marie Lindberg',
//       style: 'Cantautora',
//       bio: 'Profesora, cantautora y guitarrista sueca. Compitió en el Melodifestivalen 2007 tras mandar una canción por diversión. En Gotemburgo el 10 de febrero de 2007, Lindberg, tocó Trying to Recall, siendo la segunda finalista nombrada en el Melodifestivalen. Siendo la única cantante no profesional del festival, terminó quinta en la final, recibiendo gran puntuación del público, y convirtiéndose en un símbolo de apertura del Melodifestivalen a cualquier sueco.',
//       youtube: [
//         'https://www.youtube.com/watch?v=AsscEelCX1k&ab_channel=escfan1',
//         'https://www.youtube.com/watch?v=-98EgHoyOvA&ab_channel=MonaAndresen'
//       ]
//     },
//   ],
//   España: [
//     {
//       name: 'Marta Robles',
//       style: 'Flamenco',
//       bio: 'Compositora y arreglista, Marta goza de gran versatilidad; además de ser intérprete de guitarra clásica y flamenca, también es creadora de obras de diversos estilos y ámbitos (música, teatro, danza y cine). Como guitarrista solista, ha participado en proyectos como “La Vida Breve” de Falla junto a la Sinfónica de Galicia, y actuado con orquestas como la Nederland Blazers Ensemble o la Amsterdamse Bach Solisten. Con sus numerosos proyectos, ha realizado giras por más de 50 países.',
//       youtube: [
//         'https://www.youtube.com/watch?v=jiIRI0a6rfA&ab_channel=MartaRoblesGuitarra',
//         'https://www.youtube.com/watch?v=_2zqGlZ-7xk&ab_channel=MartaRoblesGuitarra'
//       ]
//     },
//     {
//       name: 'Antonia Jiménez ',
//       style: 'Antonia Jiménez, guitarrista paya de flamenco, nació en El Puerto de Santa María (Cádiz), en el año de 1972. Desde muy joven se inicia en la guitarra flamenca con Antonio Villar acompañado al cante y al baile por los tablaos y peñas andaluzas, para más tarde trasladarse a Madrid donde recorre los tablaos y las salas más relevantes de la capital.',
//       bio: '',
//       youtube: [
//         'https://www.youtube.com/watch?v=JsQ8ANOoRuw&ab_channel=DeFlamencoTV',
//         'https://www.youtube.com/watch?v=wY_Y2Q3SZvY&ab_channel=Flamencoenfrance'
//       ]
//     },
//   ],
//   'Sudán': [
//     {
//       name: 'Islam Elbeiti',
//       style: 'Jazz, Música popular africana',
//       bio: 'Originaria de Sudán, Islam vivió en Etiopía, China, durante su infancia y adolescencia y después de la universidad en la República Democrática del Congo. Ahora, de regreso en Sudán, toca el bajo en un par de bandas y está entrando en la escena del negocio de la música trabajando para Impact Hub Khartoum, una entidad dedicada a habilitar el ecosistema empresarial en Sudán. Aún joven, a los 24 años, está impulsada por una fuerte determinación activista de cambiar las duras condiciones sociales que restringen a las mujeres músicas en Sudán.',
//       youtube: [
//         'https://www.youtube.com/watch?v=6ttjAzXy15s&ab_channel=MosabGlab',
//         ''
//       ]
//     },
//   ],
//   pais: [
//     {
//       name: '',
//       style: '',
//       bio: '',
//       youtube: [
//         '',
//         ''
//       ]
//     },
//   ],
//
// }

// TEMP: only to make first DB save
// export const saveAll = () => {
//   for (const [country, women] of Object.entries(guitaristsInfo)) {
//     const countryCode = countries.find(c => c.name_es === country)?.code
//     women.forEach(w => {
//       const data = {
//         ...w,
//         country: countryCode,
//         instrument: 'guitarra'
//       }
//       fetch('http://localhost:8000/guitarist' , {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(data)
//       }).then(res => {
//         res.json().then(r => console.log('SAVED', r))
//       })
//     })
//   }
// }

export const  countries = [
  {
    "name_en": "Afghanistan",
    "name_es": "Afganistán",
    "dial_code": "+93",
    "code": "AF"
  },
  {
    "name_en": "Albania",
    "name_es": "Albania",
    "dial_code": "+355",
    "code": "AL"
  },
  {
    "name_en": "Algeria",
    "name_es": "Argelia",
    "dial_code": "+213",
    "code": "DZ"
  },
  {
    "name_en": "AmericanSamoa",
    "name_es": "Samoa Americana",
    "dial_code": "+1684",
    "code": "AS"
  },
  {
    "name_en": "Andorra",
    "name_es": "Andorra",
    "dial_code": "+376",
    "code": "AD"
  },
  {
    "name_en": "Angola",
    "name_es": "Angola",
    "dial_code": "+244",
    "code": "AO"
  },
  {
    "name_en": "Anguilla",
    "name_es": "Anguilla",
    "dial_code": "+1264",
    "code": "AI"
  },
  {
    "name_en": "Antarctica",
    "name_es": "Antártida",
    "dial_code": "+672",
    "code": "AQ"
  },
  {
    "name_en": "Antigua and Barbuda",
    "name_es": "Antigua y Barbuda",
    "dial_code": "+1268",
    "code": "AG"
  },
  {
    "name_en": "Argentina",
    "name_es": "Argentina",
    "dial_code": "+54",
    "code": "AR"
  },
  {
    "name_en": "Armenia",
    "name_es": "Armenia",
    "dial_code": "+374",
    "code": "AM"
  },
  {
    "name_en": "Aruba",
    "name_es": "Aruba",
    "dial_code": "+297",
    "code": "AW"
  },
  {
    "name_en": "Australia",
    "name_es": "Australia",
    "dial_code": "+61",
    "code": "AU"
  },
  {
    "name_en": "Austria",
    "name_es": "Austria",
    "dial_code": "+43",
    "code": "AT"
  },
  {
    "name_en": "Azerbaijan",
    "name_es": "Azerbaiyán",
    "dial_code": "+994",
    "code": "AZ"
  },
  {
    "name_en": "Bahamas",
    "name_es": "Bahamas",
    "dial_code": "+1242",
    "code": "BS"
  },
  {
    "name_en": "Bahrain",
    "name_es": "Baréin",
    "dial_code": "+973",
    "code": "BH"
  },
  {
    "name_en": "Bangladesh",
    "name_es": "Banglades",
    "dial_code": "+880",
    "code": "BD"
  },
  {
    "name_en": "Barbados",
    "name_es": "Barbados",
    "dial_code": "+1246",
    "code": "BB"
  },
  {
    "name_en": "Belarus",
    "name_es": "Bielorrusia",
    "dial_code": "+375",
    "code": "BY"
  },
  {
    "name_en": "Belgium",
    "name_es": "Bélgica",
    "dial_code": "+32",
    "code": "BE"
  },
  {
    "name_en": "Belize",
    "name_es": "Belice",
    "dial_code": "+501",
    "code": "BZ"
  },
  {
    "name_en": "Benin",
    "name_es": "Benin",
    "dial_code": "+229",
    "code": "BJ"
  },
  {
    "name_en": "Bermuda",
    "name_es": "Bermudas",
    "dial_code": "+1441",
    "code": "BM"
  },
  {
    "name_en": "Bhutan",
    "name_es": "Butan",
    "dial_code": "+975",
    "code": "BT"
  },
  {
    "name_en": "Bolivia",
    "name_es": "Bolivia",
    "dial_code": "+591",
    "code": "BO"
  },
  {
    "name_en": "Bosnia and Herzegovina",
    "name_es": "Bosnia-Herzegovina",
    "dial_code": "+387",
    "code": "BA"
  },
  {
    "name_en": "Botswana",
    "name_es": "Botsuana",
    "dial_code": "+267",
    "code": "BW"
  },
  {
    "name_en": "Brazil",
    "name_es": "Brasil",
    "dial_code": "+55",
    "code": "BR"
  },
  {
    "name_en": "British Indian Ocean Territory",
    "name_es": "Territorio Británico del Océano Índico",
    "dial_code": "+246",
    "code": "IO"
  },
  {
    "name_en": "Brunei Darussalam",
    "name_es": "Brunei",
    "dial_code": "+673",
    "code": "BN"
  },
  {
    "name_en": "Bulgaria",
    "name_es": "Bulgaria",
    "dial_code": "+359",
    "code": "BG"
  },
  {
    "name_en": "Burkina Faso",
    "name_es": "Burkina Faso",
    "dial_code": "+226",
    "code": "BF"
  },
  {
    "name_en": "Burundi",
    "name_es": "Burundi",
    "dial_code": "+257",
    "code": "BI"
  },
  {
    "name_en": "Cambodia",
    "name_es": "Camboya",
    "dial_code": "+855",
    "code": "KH"
  },
  {
    "name_en": "Cameroon",
    "name_es": "Camerún",
    "dial_code": "+237",
    "code": "CM"
  },
  {
    "name_en": "Canada",
    "name_es": "Canadá",
    "dial_code": "+1",
    "code": "CA"
  },
  {
    "name_en": "Cape Verde",
    "name_es": "Cabo Verde",
    "dial_code": "+238",
    "code": "CV"
  },
  {
    "name_en": "Cayman Islands",
    "name_es": "Islas Caimán",
    "dial_code": "+ 345",
    "code": "KY"
  },
  {
    "name_en": "Central African Republic",
    "name_es": "República Centroafricana",
    "dial_code": "+236",
    "code": "CF"
  },
  {
    "name_en": "Chad",
    "name_es": "Chad",
    "dial_code": "+235",
    "code": "TD"
  },
  {
    "name_en": "Chile",
    "name_es": "Chile",
    "dial_code": "+56",
    "code": "CL"
  },
  {
    "name_en": "China",
    "name_es": "China",
    "dial_code": "+86",
    "code": "CN"
  },
  {
    "name_en": "Christmas Island",
    "name_es": "Isla de Navidad",
    "dial_code": "+61",
    "code": "CX"
  },
  {
    "name_en": "Cocos (Keeling) Islands",
    "name_es": "Islas Cocos",
    "dial_code": "+61",
    "code": "CC"
  },
  {
    "name_en": "Colombia",
    "name_es": "Colombia",
    "dial_code": "+57",
    "code": "CO"
  },
  {
    "name_en": "Comoros",
    "name_es": "Comoras",
    "dial_code": "+269",
    "code": "KM"
  },
  {
    "name_en": "Congo",
    "name_es": "Congo",
    "dial_code": "+242",
    "code": "CG"
  },
  {
    "name_en": "Congo, The Democratic Republic of the",
    "name_es": "República Democrática del Congo",
    "dial_code": "+243",
    "code": "CD"
  },
  {
    "name_en": "Cook Islands",
    "name_es": "Islas Cook",
    "dial_code": "+682",
    "code": "CK"
  },
  {
    "name_en": "Costa Rica",
    "name_es": "Costa Rica",
    "dial_code": "+506",
    "code": "CR"
  },
  {
    "name_en": "Cote d'Ivoire",
    "name_es": "Costa de Marfil",
    "dial_code": "+225",
    "code": "CI"
  },
  {
    "name_en": "Croatia",
    "name_es": "Croacia",
    "dial_code": "+385",
    "code": "HR"
  },
  {
    "name_en": "Cuba",
    "name_es": "Cuba",
    "dial_code": "+53",
    "code": "CU"
  },
  {
    "name_en": "Cyprus",
    "name_es": "Chipre",
    "dial_code": "+537",
    "code": "CY"
  },
  {
    "name_en": "Czechia",
    "name_es": "Chequia",
    "dial_code": "+420",
    "code": "CZ"
  },
  {
    "name_en": "Denmark",
    "name_es": "Dinamarca",
    "dial_code": "+45",
    "code": "DK"
  },
  {
    "name_en": "Djibouti",
    "name_es": "Yibuti",
    "dial_code": "+253",
    "code": "DJ"
  },
  {
    "name_en": "Dominica",
    "name_es": "Dominica",
    "dial_code": "+1767",
    "code": "DM"
  },
  {
    "name_en": "Dominican Republic",
    "name_es": "República Dominicana",
    "dial_code": "+1849",
    "code": "DO"
  },
  {
    "name_en": "Ecuador",
    "name_es": "Ecuador",
    "dial_code": "+593",
    "code": "EC"
  },
  {
    "name_en": "Egypt",
    "name_es": "Egipto",
    "dial_code": "+20",
    "code": "EG"
  },
  {
    "name_en": "El Salvador",
    "name_es": "El Salvador",
    "dial_code": "+503",
    "code": "SV"
  },
  {
    "name_en": "Equatorial Guinea",
    "name_es": "Guinea Ecuatorial",
    "dial_code": "+240",
    "code": "GQ"
  },
  {
    "name_en": "Eritrea",
    "name_es": "Eritrea",
    "dial_code": "+291",
    "code": "ER"
  },
  {
    "name_en": "Estonia",
    "name_es": "Estonia",
    "dial_code": "+372",
    "code": "EE"
  },
  {
    "name_en": "Ethiopia",
    "name_es": "Etiopía",
    "dial_code": "+251",
    "code": "ET"
  },
  {
    "name_en": "Falkland Islands (Malvinas)",
    "name_es": "Islas Malvinas",
    "dial_code": "+500",
    "code": "FK"
  },
  {
    "name_en": "Faroe Islands",
    "name_es": "Islas Feroe",
    "dial_code": "+298",
    "code": "FO"
  },
  {
    "name_en": "Fiji",
    "name_es": "Fiyi",
    "dial_code": "+679",
    "code": "FJ"
  },
  {
    "name_en": "Finland",
    "name_es": "Finlandia",
    "dial_code": "+358",
    "code": "FI"
  },
  {
    "name_en": "France",
    "name_es": "Francia",
    "dial_code": "+33",
    "code": "FR"
  },
  {
    "name_en": "French Guiana",
    "name_es": "Guayana Francesa",
    "dial_code": "+594",
    "code": "GF"
  },
  {
    "name_en": "French Polynesia",
    "name_es": "Polinesia Francesa",
    "dial_code": "+689",
    "code": "PF"
  },
  {
    "name_en": "Gabon",
    "name_es": "Gabón",
    "dial_code": "+241",
    "code": "GA"
  },
  {
    "name_en": "Gambia",
    "name_es": "Gambia",
    "dial_code": "+220",
    "code": "GM"
  },
  {
    "name_en": "Georgia",
    "name_es": "Georgia",
    "dial_code": "+995",
    "code": "GE"
  },
  {
    "name_en": "Germany",
    "name_es": "Alemania",
    "dial_code": "+49",
    "code": "DE"
  },
  {
    "name_en": "Ghana",
    "name_es": "Ghana",
    "dial_code": "+233",
    "code": "GH"
  },
  {
    "name_en": "Gibraltar",
    "name_es": "Gibraltar",
    "dial_code": "+350",
    "code": "GI"
  },
  {
    "name_en": "Greece",
    "name_es": "Grecia",
    "dial_code": "+30",
    "code": "GR"
  },
  {
    "name_en": "Greenland",
    "name_es": "Groenlandia",
    "dial_code": "+299",
    "code": "GL"
  },
  {
    "name_en": "Grenada",
    "name_es": "Granada",
    "dial_code": "+1473",
    "code": "GD"
  },
  {
    "name_en": "Guadeloupe",
    "name_es": "Guadalupe",
    "dial_code": "+590",
    "code": "GP"
  },
  {
    "name_en": "Guam",
    "name_es": "Guam",
    "dial_code": "+1671",
    "code": "GU"
  },
  {
    "name_en": "Guatemala",
    "name_es": "Guatemala",
    "dial_code": "+502",
    "code": "GT"
  },
  {
    "name_en": "Guernsey",
    "name_es": "Guernsey",
    "dial_code": "+44",
    "code": "GG"
  },
  {
    "name_en": "Guinea",
    "name_es": "Guinea",
    "dial_code": "+224",
    "code": "GN"
  },
  {
    "name_en": "Guinea-Bissau",
    "name_es": "Guinea-Bisau",
    "dial_code": "+245",
    "code": "GW"
  },
  {
    "name_en": "Guyana",
    "name_es": "Guyana",
    "dial_code": "+595",
    "code": "GY"
  },
  {
    "name_en": "Haiti",
    "name_es": "Haití",
    "dial_code": "+509",
    "code": "HT"
  },
  {
    "name_en": "Holy See (Vatican City State)",
    "name_es": "Ciudad del Vaticano",
    "dial_code": "+379",
    "code": "VA"
  },
  {
    "name_en": "Honduras",
    "name_es": "Honduras",
    "dial_code": "+504",
    "code": "HN"
  },
  {
    "name_en": "Hong Kong",
    "name_es": "Hong Kong",
    "dial_code": "+852",
    "code": "HK"
  },
  {
    "name_en": "Hungary",
    "name_es": "Hungría",
    "dial_code": "+36",
    "code": "HU"
  },
  {
    "name_en": "Iceland",
    "name_es": "Islandia",
    "dial_code": "+354",
    "code": "IS"
  },
  {
    "name_en": "India",
    "name_es": "India",
    "dial_code": "+91",
    "code": "IN"
  },
  {
    "name_en": "Indonesia",
    "name_es": "Indonesia",
    "dial_code": "+62",
    "code": "ID"
  },
  {
    "name_en": "Iran, Islamic Republic of",
    "name_es": "Irán",
    "dial_code": "+98",
    "code": "IR"
  },
  {
    "name_en": "Iraq",
    "name_es": "Iraq",
    "dial_code": "+964",
    "code": "IQ"
  },
  {
    "name_en": "Ireland",
    "name_es": "Irlanda",
    "dial_code": "+353",
    "code": "IE"
  },
  {
    "name_en": "Isle of Man",
    "name_es": "Isla de Man",
    "dial_code": "+44",
    "code": "IM"
  },
  {
    "name_en": "Israel",
    "name_es": "Israel",
    "dial_code": "+972",
    "code": "IL"
  },
  {
    "name_en": "Italy",
    "name_es": "Italia",
    "dial_code": "+39",
    "code": "IT"
  },
  {
    "name_en": "Jamaica",
    "name_es": "Jamaica",
    "dial_code": "+1876",
    "code": "JM"
  },
  {
    "name_en": "Japan",
    "name_es": "Japón",
    "dial_code": "+81",
    "code": "JP"
  },
  {
    "name_en": "Jersey",
    "name_es": "Jersey",
    "dial_code": "+44",
    "code": "JE"
  },
  {
    "name_en": "Jordan",
    "name_es": "Jordania",
    "dial_code": "+962",
    "code": "JO"
  },
  {
    "name_en": "Kazakhstan",
    "name_es": "Kazajistán",
    "dial_code": "+7",
    "code": "KZ"
  },
  {
    "name_en": "Kenya",
    "name_es": "Kenia",
    "dial_code": "+254",
    "code": "KE"
  },
  {
    "name_en": "Kiribati",
    "name_es": "Kiribati",
    "dial_code": "+686",
    "code": "KI"
  },
  {
    "name_en": "Korea, Democratic People's Republic of",
    "name_es": "Corea del Norte",
    "dial_code": "+850",
    "code": "KP"
  },
  {
    "name_en": "Korea, Republic of",
    "name_es": "Corea del Sur",
    "dial_code": "+82",
    "code": "KR"
  },
  {
    "name_en": "Kosovo",
    "name_es": "Kosovo",
    "dial_code": "+383",
    "code": "XK"
  },
  {
    "name_en": "Kuwait",
    "name_es": "Kuwait",
    "dial_code": "+965",
    "code": "KW"
  },
  {
    "name_en": "Kyrgyzstan",
    "name_es": "Kirguistán",
    "dial_code": "+996",
    "code": "KG"
  },
  {
    "name_en": "Lao People's Democratic Republic",
    "name_es": "Laos",
    "dial_code": "+856",
    "code": "LA"
  },
  {
    "name_en": "Latvia",
    "name_es": "Letonia",
    "dial_code": "+371",
    "code": "LV"
  },
  {
    "name_en": "Lebanon",
    "name_es": "Líbano",
    "dial_code": "+961",
    "code": "LB"
  },
  {
    "name_en": "Lesotho",
    "name_es": "Lesoto",
    "dial_code": "+266",
    "code": "LS"
  },
  {
    "name_en": "Liberia",
    "name_es": "Liberia",
    "dial_code": "+231",
    "code": "LR"
  },
  {
    "name_en": "Libyan Arab Jamahiriya",
    "name_es": "Libia",
    "dial_code": "+218",
    "code": "LY"
  },
  {
    "name_en": "Liechtenstein",
    "name_es": "Liechtenstein",
    "dial_code": "+423",
    "code": "LI"
  },
  {
    "name_en": "Lithuania",
    "name_es": "Lituania",
    "dial_code": "+370",
    "code": "LT"
  },
  {
    "name_en": "Luxembourg",
    "name_es": "Luxemburgo",
    "dial_code": "+352",
    "code": "LU"
  },
  {
    "name_en": "Macao",
    "name_es": "Macao",
    "dial_code": "+853",
    "code": "MO"
  },
  {
    "name_en": "Macedonia, The Former Yugoslav Republic of",
    "name_es": "República de Macedonia",
    "dial_code": "+389",
    "code": "MK"
  },
  {
    "name_en": "Madagascar",
    "name_es": "Madagascar",
    "dial_code": "+261",
    "code": "MG"
  },
  {
    "name_en": "Malawi",
    "name_es": "Malaui",
    "dial_code": "+265",
    "code": "MW"
  },
  {
    "name_en": "Malaysia",
    "name_es": "Malasia",
    "dial_code": "+60",
    "code": "MY"
  },
  {
    "name_en": "Maldives",
    "name_es": "Maldivas",
    "dial_code": "+960",
    "code": "MV"
  },
  {
    "name_en": "Mali",
    "name_es": "Malí",
    "dial_code": "+223",
    "code": "ML"
  },
  {
    "name_en": "Malta",
    "name_es": "Malta",
    "dial_code": "+356",
    "code": "MT"
  },
  {
    "name_en": "Marshall Islands",
    "name_es": "Islas Marshall",
    "dial_code": "+692",
    "code": "MH"
  },
  {
    "name_en": "Martinique",
    "name_es": "Martinica",
    "dial_code": "+596",
    "code": "MQ"
  },
  {
    "name_en": "Mauritania",
    "name_es": "Mauritania",
    "dial_code": "+222",
    "code": "MR"
  },
  {
    "name_en": "Mauritius",
    "name_es": "Mauricio",
    "dial_code": "+230",
    "code": "MU"
  },
  {
    "name_en": "Mayotte",
    "name_es": "Mayotte",
    "dial_code": "+262",
    "code": "YT"
  },
  {
    "name_en": "Mexico",
    "name_es": "México",
    "dial_code": "+52",
    "code": "MX"
  },
  {
    "name_en": "Micronesia, Federated States of",
    "name_es": "Estados Federados de Micronesia",
    "dial_code": "+691",
    "code": "FM"
  },
  {
    "name_en": "Moldova, Republic of",
    "name_es": "Moldavia",
    "dial_code": "+373",
    "code": "MD"
  },
  {
    "name_en": "Monaco",
    "name_es": "Monaco",
    "dial_code": "+377",
    "code": "MC"
  },
  {
    "name_en": "Mongolia",
    "name_es": "Mongolia",
    "dial_code": "+976",
    "code": "MN"
  },
  {
    "name_en": "Montenegro",
    "name_es": "Montenegro",
    "dial_code": "+382",
    "code": "ME"
  },
  {
    "name_en": "Montserrat",
    "name_es": "Montserrat",
    "dial_code": "+1664",
    "code": "MS"
  },
  {
    "name_en": "Morocco",
    "name_es": "Marruecos",
    "dial_code": "+212",
    "code": "MA"
  },
  {
    "name_en": "Mozambique",
    "name_es": "Mozambique",
    "dial_code": "+258",
    "code": "MZ"
  },
  {
    "name_en": "Myanmar",
    "name_es": "Birmania",
    "dial_code": "+95",
    "code": "MM"
  },
  {
    "name_en": "Namibia",
    "name_es": "Namibia",
    "dial_code": "+264",
    "code": "NA"
  },
  {
    "name_en": "Nauru",
    "name_es": "Nauru",
    "dial_code": "+674",
    "code": "NR"
  },
  {
    "name_en": "Nepal",
    "name_es": "Nepal",
    "dial_code": "+977",
    "code": "NP"
  },
  {
    "name_en": "Netherlands",
    "name_es": "Holanda",
    "dial_code": "+31",
    "code": "NL"
  },
  {
    "name_en": "Netherlands Antilles",
    "name_es": "Antillas Holandesas",
    "dial_code": "+599",
    "code": "AN"
  },
  {
    "name_en": "New Caledonia",
    "name_es": "Nueva Caledonia",
    "dial_code": "+687",
    "code": "NC"
  },
  {
    "name_en": "New Zealand",
    "name_es": "Nueva Zelanda",
    "dial_code": "+64",
    "code": "NZ"
  },
  {
    "name_en": "Nicaragua",
    "name_es": "Nicaragua",
    "dial_code": "+505",
    "code": "NI"
  },
  {
    "name_en": "Niger",
    "name_es": "Niger",
    "dial_code": "+227",
    "code": "NE"
  },
  {
    "name_en": "Nigeria",
    "name_es": "Nigeria",
    "dial_code": "+234",
    "code": "NG"
  },
  {
    "name_en": "Niue",
    "name_es": "Niue",
    "dial_code": "+683",
    "code": "NU"
  },
  {
    "name_en": "NorfolkIsland",
    "name_es": "IslaNorfolk",
    "dial_code": "+672",
    "code": "NF"
  },
  {
    "name_en": "NorthernMarianaIslands",
    "name_es": "IslasMarianasdelNorte",
    "dial_code": "+1670",
    "code": "MP"
  },
  {
    "name_en": "Norway",
    "name_es": "Noruega",
    "dial_code": "+47",
    "code": "NO"
  },
  {
    "name_en": "Oman",
    "name_es": "Omán",
    "dial_code": "+968",
    "code": "OM"
  },
  {
    "name_en": "Pakistan",
    "name_es": "Pakistán",
    "dial_code": "+92",
    "code": "PK"
  },
  {
    "name_en": "Palau",
    "name_es": "Palaos",
    "dial_code": "+680",
    "code": "PW"
  },
  {
    "name_en": "Panama",
    "name_es": "Panamá",
    "dial_code": "+507",
    "code": "PA"
  },
  {
    "name_en": "Papua New Guinea",
    "name_es": "Papúa Nueva Guinea",
    "dial_code": "+675",
    "code": "PG"
  },
  {
    "name_en": "Paraguay",
    "name_es": "Paraguay",
    "dial_code": "+595",
    "code": "PY"
  },
  {
    "name_en": "Peru",
    "name_es": "Perú",
    "dial_code": "+51",
    "code": "PE"
  },
  {
    "name_en": "Philippines",
    "name_es": "Filipinas",
    "dial_code": "+63",
    "code": "PH"
  },
  {
    "name_en": "Pitcairn",
    "name_es": "Islas Pitcairn",
    "dial_code": "+872",
    "code": "PN"
  },
  {
    "name_en": "Poland",
    "name_es": "Polonia",
    "dial_code": "+48",
    "code": "PL"
  },
  {
    "name_en": "Portugal",
    "name_es": "Portugal",
    "dial_code": "+351",
    "code": "PT"
  },
  {
    "name_en": "Puerto Rico",
    "name_es": "Puerto Rico",
    "dial_code": "+1939",
    "code": "PR"
  },
  {
    "name_en": "Qatar",
    "name_es": "Qatar",
    "dial_code": "+974",
    "code": "QA"
  },
  {
    "name_en": "Romania",
    "name_es": "Rumania",
    "dial_code": "+40",
    "code": "RO"
  },
  {
    "name_en": "Russia",
    "name_es": "Rusia",
    "dial_code": "+7",
    "code": "RU"
  },
  {
    "name_en": "Rwanda",
    "name_es": "Ruanda",
    "dial_code": "+250",
    "code": "RW"
  },
  {
    "name_en": "Réunion",
    "name_es": "Reunion",
    "dial_code": "+262",
    "code": "RE"
  },
  {
    "name_en": "Saint Barthélemy",
    "name_es": "San Bartolome",
    "dial_code": "+590",
    "code": "BL"
  },
  {
    "name_en": "Saint Helena, Ascension and Tristan Da Cunha",
    "name_es": "Santa Elena, Ascensión y Tristán de Acuña",
    "dial_code": "+290",
    "code": "SH"
  },
  {
    "name_en": "Saint Kitts and Nevis",
    "name_es": "San Cristóbal y Nieves",
    "dial_code": "+1869",
    "code": "KN"
  },
  {
    "name_en": "Saint Lucia",
    "name_es": "Santa Lucía",
    "dial_code": "+1758",
    "code": "LC"
  },
  {
    "name_en": "Saint Martin",
    "name_es": "Isla de San Martín",
    "dial_code": "+590",
    "code": "MF"
  },
  {
    "name_en": "Saint Pierre and Miquelon",
    "name_es": "San Pedro y Miquelon",
    "dial_code": "+508",
    "code": "PM"
  },
  {
    "name_en": "Saint Vincent and the Grenadines",
    "name_es": "San Vicente y las Granadinas",
    "dial_code": "+1784",
    "code": "VC"
  },
  {
    "name_en": "Samoa",
    "name_es": "Samoa",
    "dial_code": "+685",
    "code": "WS"
  },
  {
    "name_en": "San Marino",
    "name_es": "San Marino",
    "dial_code": "+378",
    "code": "SM"
  },
  {
    "name_en": "Sao Tome and Principe",
    "name_es": " Santo Tomé y Príncipe",
    "dial_code": "+239",
    "code": "ST"
  },
  {
    "name_en": "Saudi Arabia",
    "name_es": "Arabia Saudita",
    "dial_code": "+966",
    "code": "SA"
  },
  {
    "name_en": "Senegal",
    "name_es": "Senegal",
    "dial_code": "+221",
    "code": "SN"
  },
  {
    "name_en": "Serbia",
    "name_es": "Serbia",
    "dial_code": "+381",
    "code": "RS"
  },
  {
    "name_en": "Seychelles",
    "name_es": "Seychelles",
    "dial_code": "+248",
    "code": "SC"
  },
  {
    "name_en": "Sierra Leone",
    "name_es": "Sierra Leona",
    "dial_code": "+232",
    "code": "SL"
  },
  {
    "name_en": "Singapore",
    "name_es": "Singapur",
    "dial_code": "+65",
    "code": "SG"
  },
  {
    "name_en": "Slovakia",
    "name_es": "Eslovaquia",
    "dial_code": "+421",
    "code": "SK"
  },
  {
    "name_en": "Slovenia",
    "name_es": "Eslovenia",
    "dial_code": "+386",
    "code": "SI"
  },
  {
    "name_en": "Solomon Islands",
    "name_es": "Islas Salomón",
    "dial_code": "+677",
    "code": "SB"
  },
  {
    "name_en": "Somalia",
    "name_es": "Somalia",
    "dial_code": "+252",
    "code": "SO"
  },
  {
    "name_en": "South Africa",
    "name_es": "Sudáfrica",
    "dial_code": "+27",
    "code": "ZA"
  },
  {
    "name_en": "South Sudan",
    "name_es": "Sudán del Sur",
    "dial_code": "+211",
    "code": "SS"
  },
  {
    "name_en": "Spain",
    "name_es": "España",
    "dial_code": "+34",
    "code": "ES"
  },
  {
    "name_en": "Sri Lanka",
    "name_es": "Sri Lanka",
    "dial_code": "+94",
    "code": "LK"
  },
  {
    "name_en": "State of Palestine",
    "name_es": "Estado de Palestina",
    "dial_code": "+970",
    "code": "PS"
  },
  {
    "name_en": "Sudan",
    "name_es": "Sudán",
    "dial_code": "+249",
    "code": "SD"
  },
  {
    "name_en": "Suriname",
    "name_es": "Surinam",
    "dial_code": "+597",
    "code": "SR"
  },
  {
    "name_en": "Svalbard and Jan Mayen",
    "name_es": "Svalbard y Jan Mayen",
    "dial_code": "+47",
    "code": "SJ"
  },
  {
    "name_en": "Swaziland",
    "name_es": "Suazilandia",
    "dial_code": "+268",
    "code": "SZ"
  },
  {
    "name_en": "Sweden",
    "name_es": "Suecia",
    "dial_code": "+46",
    "code": "SE"
  },
  {
    "name_en": "Switzerland",
    "name_es": "Suiza",
    "dial_code": "+41",
    "code": "CH"
  },
  {
    "name_en": "Syrian Arab Republic",
    "name_es": "Siria",
    "dial_code": "+963",
    "code": "SY"
  },
  {
    "name_en": "Taiwan, Province of China",
    "name_es": "Taiwán",
    "dial_code": "+886",
    "code": "TW"
  },
  {
    "name_en": "Tayikistan",
    "name_es": "Tayikistán",
    "dial_code": "+992",
    "code": "TJ"
  },
  {
    "name_en": "Tanzania, United Republic of",
    "name_es": "Tanzania",
    "dial_code": "+255",
    "code": "TZ"
  },
  {
    "name_en": "Thailand",
    "name_es": "Tailandia",
    "dial_code": "+66",
    "code": "TH"
  },
  {
    "name_en": "Timor-Leste",
    "name_es": "Timor Oriental",
    "dial_code": "+670",
    "code": "TL"
  },
  {
    "name_en": "Togo",
    "name_es": "Togo",
    "dial_code": "+228",
    "code": "TG"
  },
  {
    "name_en": "Tokelau",
    "name_es": "Tokelau",
    "dial_code": "+690",
    "code": "TK"
  },
  {
    "name_en": "Tonga",
    "name_es": "Tonga",
    "dial_code": "+676",
    "code": "TO"
  },
  {
    "name_en": "Trinidad and Tobago",
    "name_es": "Trinidad y Tobago",
    "dial_code": "+1868",
    "code": "TT"
  },
  {
    "name_en": "Tunisia",
    "name_es": "Túnez",
    "dial_code": "+216",
    "code": "TN"
  },
  {
    "name_en": "Turkey",
    "name_es": "Turquía",
    "dial_code": "+90",
    "code": "TR"
  },
  {
    "name_en": "Turkmenistan",
    "name_es": "Turkmenistán",
    "dial_code": "+993",
    "code": "TM"
  },
  {
    "name_en": "Turks and Caicos Islands",
    "name_es": "Islas Turcas y Caicos",
    "dial_code": "+1649",
    "code": "TC"
  },
  {
    "name_en": "Tuvalu",
    "name_es": "Tuvalu",
    "dial_code": "+688",
    "code": "TV"
  },
  {
    "name_en": "Uganda",
    "name_es": "Uganda",
    "dial_code": "+256",
    "code": "UG"
  },
  {
    "name_en": "Ukraine",
    "name_es": "Ucrania",
    "dial_code": "+380",
    "code": "UA"
  },
  {
    "name_en": "United Arab Emirates",
    "name_es": "Emiratos Árabes Unidos",
    "dial_code": "+971",
    "code": "AE"
  },
  {
    "name_en": "United Kingdom",
    "name_es": "Reino Unido",
    "dial_code": "+44",
    "code": "GB"
  },
  {
    "name_en": "United States",
    "name_es": "Estados Unidos",
    "dial_code": "+1",
    "code": "US"
  },
  {
    "name_en": "Uruguay",
    "name_es": "Uruguay",
    "dial_code": "+598",
    "code": "UY"
  },
  {
    "name_en": "Uzbekistan",
    "name_es": "Uzbekistán",
    "dial_code": "+998",
    "code": "UZ"
  },
  {
    "name_en": "Vanuatu",
    "name_es": "Vanuatu",
    "dial_code": "+678",
    "code": "VU"
  },
  {
    "name_en": "Venezuela, Bolivarian Republic of",
    "name_es": "Venezuela",
    "dial_code": "+58",
    "code": "VE"
  },
  {
    "name_en": "Vietnam",
    "name_es": "Vietnam",
    "dial_code": "+84",
    "code": "VN"
  },
  {
    "name_en": "Virgin Islands, British",
    "name_es": "Islas Vírgenes Británicas",
    "dial_code": "+1284",
    "code": "VG"
  },
  {
    "name_en": "Virgin Islands, U.S.",
    "name_es": "Islas Vírgenes de los Estados Unidos",
    "dial_code": "+1340",
    "code": "VI"
  },
  {
    "name_en": "Wallis and Futuna",
    "name_es": "Wallis y Futuna",
    "dial_code": "+681",
    "code": "WF"
  },
  {
    "name_en": "Yemen",
    "name_es": "Yemen",
    "dial_code": "+967",
    "code": "YE"
  },
  {
    "name_en": "Zambia",
    "name_es": "Zambia",
    "dial_code": "+260",
    "code": "ZM"
  },
  {
    "name_en": "Zimbabwe",
    "name_es": "Zimbabue",
    "dial_code": "+263",
    "code": "ZW"
  },
  {
    "name_en": "Åland Islands",
    "name_es": "Åland",
    "dial_code": "+358",
    "code": "AX"
  },
  {
    "name_en": "Western Sahara",
    "name_es": "Sáhara Occidental",
    "code": "EH"
  },
]
