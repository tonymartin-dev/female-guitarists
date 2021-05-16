export interface GuitaristInfo {
  name: string
  style: string
  bio: string
  youtube: string[]
}

export type GuitaristsByCountry = Record<string, GuitaristInfo[]>

export const guitaristsInfo: GuitaristsByCountry = {
  'Estados Unidos': [
    {
      name: 'Sister Rosetta',
      style: 'Rock, blues, gospel',
      bio: 'Esta mujer inventó el rock and roll, el flow y hasta las ganas de vivir. Sister Rosetta Tharpe fue la creadora del rock and roll. Hay muchas disputas si Chuck Berry o Little Richard fueron los verdaderos inventores -todos individuos negros-, pero, Sister Tharpe fue anterior a ellos. Elvis Presley, que amaba su feroz manera de tocar la guitarra y Dylan eran sus fans. Tocaba con una personal técnica, pinzando como los músicos de blues pero usando notas de jazz.',
      youtube: [
        'https://www.youtube.com/watch?v=jGPx4ancGhg&ab_channel=MikeBizimis',
        'https://www.youtube.com/watch?v=JeaBNAXfHfQ&ab_channel=AnthonyRamirez'
      ]
    },
    {
      name: 'Jennifer Batten',
      style: 'Hard rock, rock, heavy metal, Funk, Jazz fusión.',
      bio: 'Reina del tapping y habilidad a todos los niveles',
      youtube: [
        'https://www.youtube.com/watch?v=j3vWiGcsiu0&ab_channel=TheWomen%27sInternationalMusicNetwork',
        'https://www.youtube.com/watch?v=dauaFizBu0c'
      ]
    },
    {
      name: 'Kaki King',
      style: 'Jazz, Post-rock, Shoegaze, Instrumental, Rock acústico',
      bio: 'Guitarrista y compositora estadounidense. Es conocida por su percusión y teñido de melodías de jazz, con enérgicos shows en vivo, el uso de afinaciones múltiples en acústica y la guitarra lap steel, y su amplia gama de diferentes géneros.',
      youtube: [
        'https://www.youtube.com/watch?v=jDmth1YZI7k&ab_channel=Mouldytone',
        'https://www.youtube.com/watch?v=irCstf6Rn6k&ab_channel=JamPlay',
        'https://www.youtube.com/watch?v=xihL_DKxBpQ&ab_channel=teetsea75'
      ]
    },
  ],
  Serbia: [
    {
      name: 'Ana Popović',
      style: 'Blues',
      bio: 'Acostumbrados a recibir material estadounidense y británico cuando hablamos de Blues, Serbia parece una procedencia poco habitual. Pero Ana Popovic es ya una conocida para muchos guitarristas, que admiran sus importantes aportaciones al género. Buen gusto y autenticidad son sus señas de identidad.',
      youtube: [
        'https://www.youtube.com/watch?v=p-1_Ev5J79U',
        'https://www.youtube.com/watch?v=H-jLVjnC_eQ'
      ]
    },
  ],
  Croacia: [
    {
      name: 'Ana Vidovic',
      style: 'Clásico',
      bio: 'Con una técnica envidiable, la guitarrista croata fue la alumna más joven de la historia en acceder a la Academia Nacional Musical en Zagreb.',
      youtube: [
        'https://www.youtube.com/watch?v=inBKFMB-yPg',
        'https://www.youtube.com/watch?v=aoN9axWAoPU'
      ]
    },
  ],
  Francia: [
    {
      name: 'Tina Setkic ',
      style: 'Heavy metal',
      bio: 'Cuando sólo era una adolescente, ya tocaba unas piezas de dificultad más que elevada, haciendo palidecer a más de uno. Actualmente tiene unos 17 años, así que aún tenemos tiempo para ver lo que es capaz de hacer en el futuro.',
      youtube: [
        'https://www.youtube.com/watch?v=o6rBK0BqL2w',
        'https://www.youtube.com/watch?v=XpASSx0ecTU'
      ]
    },
  ],
  Australia: [
    {
      name: 'Orianthi Panagaris',
      style: 'Hard rock, Rock alternativo, Metal alternativo, pop rock, Pop punk',
      bio: 'Cantante y guitarrista australiana de ascendencia griega, popular por su trabajo con Michael Jackson como parte de la gira This Is It y con Alice Cooper .Panagaris demostró talento desde su temprana niñez, aprendió a tocar piano a los tres años, la guitarra acústica a los seis años, comenzó a dominar la guitarra eléctrica cuando tenía once años y dejó la escuela a los 15 para centrarse en escribir canciones y tocar.',
      youtube: [
        'https://www.youtube.com/watch?v=mK6tcgsKgps&ab_channel=SilentDarkDrummer',
        'https://www.youtube.com/watch?v=mg4pug1mKJU&ab_channel=jennrogers'
      ]
    },
  ],
  México: [
    {
      name: 'Gabriela Quintero',
      style: 'Rock, música acústica, folk rock, rock acústico, flamenco rumba, música instrumental',
      bio: 'Integrante del dúo "Rodrigo y Gabriela" originario de México, que ganó fama en Irlanda y posteriormente en el resto de Europa. Los miembros de la banda son Rodrigo Sánchez y Gabriela Quintero y se han dedicado a crear rock acústico aunque sus composiciones están influidas por la música latina, el flamenco y la música del medio oriente, a la vez que utilizan recursos rítmicos, armónicos y melódicos propios del rock y del heavy metal.',
      youtube: [
        'https://www.youtube.com/watch?v=cSwfyGNALxY&ab_channel=WhatWeMakeUp',
        'https://www.youtube.com/watch?v=8UPHFjHvGvY&ab_channel=TED'
      ]
    },
  ],
  Mali: [
    {
      name: 'Rokia Traoré',
      style: 'Electroacústico, Afro-beat, Folk',
      bio: 'Traoré pertenece a la etnia bambara, también llamada bamana. Nació en 1974 en la región de Belidougou, en Malí, cerca de la frontera con Mauritania. Aunque los bambara tienen una importante tradición musical, basada en los griots, músicos profesionales, la familia de Traoré pertenecía a la nobleza, que tiene tradicionalmente prohibido dedicarse a la música. No obstante, Rokia emprendió la carrera musical, contando entre sus primeros maestros al célebre guitarrista maliense Ali Farka Touré.',
      youtube: [
        'https://www.youtube.com/watch?v=s91P5AT2p5E&ab_channel=KEXP',
        'https://www.youtube.com/watch?v=rhNl4xq02y8&ab_channel=KCRW'
      ]
    },
  ],
  Canadá: [
    {
      name: 'Joni Mitchell',
      style: 'Folk, folk rock, jazz, art rock',
      bio: 'Cantante y pintora canadiense. Comenzó su carrera musical en Toronto y en el oeste de Canadá, se relacionó luego con la floreciente escena de folk de Nueva York de mediados de los sesenta. Autora de la canción icónica «Woodstock», a lo largo de los años 1970 amplió sus horizontes musicales, dirigiendo su interés hacia el pop y el jazz, para convertirse en una de las cantantes y compositoras más respetadas de finales del siglo XX',
      youtube: [
        'https://www.youtube.com/watch?v=GFB-d-8_bvY',
        'https://www.youtube.com/watch?v=f7MbmXklj3Q&ab_channel=MrGrapeKoolayd'
      ]
    },
  ],
  Rusia: [
    {
      name: 'Anna Likhacheva',
      style: 'Clásica',
      bio: 'Anna nace el 13 de noviembre de 1993 en Rostov-on-Don (Rusia). Comenzó con lecciones de guitarra a los 3 años y medio, cuando  apenas tenía 10 años se graduó en la escuela de música. Seguidamente, entre 2007 y 2011 se graduó en la Facultad de Arte de Rostov, para acabar de completar su formación superior en la Academia Rostov llamada S. V. Rachmaninov, en 2015. Actualmente enseña en la Escuela Superior de Artes y Música de Rostov, su localidad natal, donde continúa perfeccionándose con sus alumnos.',
      youtube: [
        'https://www.youtube.com/watch?v=MhuyBqeB1SY&ab_channel=AnnaLikhacheva',
        'https://www.youtube.com/watch?v=mGabfC4Q3s4&ab_channel=AnnaLikhacheva'
      ]
    },
  ],
  'Reino Unido': [
    {
      name: 'Alexandra Whittingham',
      style: 'Clásica',
      bio: 'Alexandra Whittingham es una guitarrista clásica británica. Ganó el Concurso de Guitarra de Edimburgo, ocupó el segundo lugar en el Concurso Internacional de Guitarra Juvenil de los Cárpatos y fue nombrada guitarrista del año en el Concurso de Jóvenes Músicos Gregynog. Whittingham estudió música en la Escuela de Música de Chetham en Manchester desde los 11 hasta los 18 años, luego en la Royal Academy of Music de Londres.',
      youtube: [
        'https://www.youtube.com/watch?v=P7ZLcUYzvnc&ab_channel=AlexandraWhittingham',
        'https://www.youtube.com/watch?v=V2F6RswMYpw&ab_channel=AlexandraWhittingham'
      ]
    },
    {
      name: 'Lita Ford',
      style: 'Heavy metal, hard rock, Glam metal',
      bio: 'Es una vocalista y guitarrista británica-estadounidense de rock, que alcanzó la popularidad en la década de 1980 y por haber sido parte de la banda de rock formada exclusivamente por mujeres adolescentes "The Runaways" (1975-1979) desde los 16 años.',
      youtube: [
        'https://www.youtube.com/watch?v=qKBElXczQvM&ab_channel=HenrikHansson',
        'https://www.youtube.com/watch?v=liXzQbTkIAc&ab_channel=DecibelGeek',
        'https://www.youtube.com/watch?v=tcCPNHIwRK8&ab_channel=GreatGuitarHeroes'
      ]
    },
  ],
  China: [
    {
      name: 'Xuefei Yang',
      style: 'Clásico',
      bio: 'Yang nació en Beijing en 1977 y comenzó a tocar la guitarra cuando tenía siete años. Hizo un debut público en el Primer Festival Internacional de Guitarra de China, donde fue aclamada de inmediato. En su debut, uno de los luthiers más respetados, Masaru Kohno, le regaló una guitarra, Pepe de Aria, que fue su primera guitarra extranjera. El siguiente logro que obtuvo fue un segundo premio en el concurso de Guitarra Senior de Beijing cuando solo tenía once años.',
      youtube: [
        'https://www.youtube.com/watch?v=U9pYKSH8N8Q&ab_channel=XuefeiYang',
        'https://www.youtube.com/watch?v=AzLJKk9yXq0&ab_channel=Fargo28'
      ]
    },
  ],
  'Costa de Marfil': [
    {
      name: 'Fatoumata Diawara',
      style: 'Folk, jazz, soul',
      bio: 'Actriz y cantante que fusiona el folk Wassoulou con jazz y soul, residente en Francia. Ha colaborado con varios artistas, como la maliense Oumou Sangaré, el etíope Mulatu Astatke, el estadounidense Bobby Womack, el francés Matthieu Chedid y el cubano Roberto Fonseca, así también con la banda británica de rock alternativo Gorillaz con el sencillo Désolé.',
      youtube: [
        'https://www.youtube.com/watch?v=2sBqMBEehIs&ab_channel=COLORS',
        'https://www.youtube.com/watch?v=E82BifytoYY&ab_channel=WorldCircuitRecords'
      ]
    },
  ],
  Nigeria: [
    {
      name: 'Fatou Seidi Ghali',
      style: 'rock indie, trip hop, dub, soul, reggae, ritmos africanos',
      bio: 'Guitarrista del grupo "Les Filles de Illighadad", un grupo de un pequeño pueblo llamado Illighadad en la región tuareg del Sahara en el oeste de Níger, Fatou es la primer tuareg que se comvierte en guitarrista profesional.',
      youtube: [
        'https://www.youtube.com/watch?v=pgxCIs-SFpk&ab_channel=SahelSounds',
        'https://www.youtube.com/watch?v=C7swdFFvBQk&ab_channel=TheCedarCulturalCenter',
        'https://www.youtube.com/watch?v=HIAOG9nhrt8&ab_channel=vprovrijegeluiden'
      ]
    },
    {
      name: 'Nneka',
      style: 'rock indie, trip hop, dub, soul, reggae, ritmos africanos',
      bio: 'Nacida en Nigeria, con 19 años se traslado a Hamburgo, Alemania,para seguir una carrera dedicada al canto, junto con una carrera en Antropología. Sus influencias reflejan sus jóvenes días en Nigeria, así como su estancia en el mundo occidental. La distancia entre ambos brilla a través de su voz.',
      youtube: [
        'https://www.youtube.com/watch?v=W1C2D-MzziY&ab_channel=KEXP',
        'https://www.youtube.com/watch?v=4ytxjppXadM&ab_channel=KEXP'
      ]
    },
  ],
  Kenia: [
    {
      name: 'Naomi Wachira',
      style: 'Folk',
      bio: 'La cantautora keniana-estadounidense Naomi Wachira creció cantando música gospel en un coro de familiares y amigos. Inspirada por la música de Tracy Chapman y Miriam Makeba, quiso seguir su ejemplo, hacer del mundo un lugar mejor escribiendo música conmovedora y vivificante. Ha recibido numerosos elogios, incluida la de ser nombrada "Mejor Artista Folk" por Seattle Weekly.',
      youtube: [
        'https://www.youtube.com/watch?v=hJMBubNUr1s&ab_channel=NaomiWachira',
        'https://www.youtube.com/watch?v=8h4NWdsEp3s&ab_channel=TheGarageVideoSessions',
        'https://www.youtube.com/watch?v=X2U2bmm622M&ab_channel=NaomiWachira'
      ]
    },
  ],
  Argentina: [
    {
      name: 'Espiral de Mujeres Guitarristas',
      style: 'Música académica y de la música folklórica argentina y latinoamericana',
      bio: 'Proyecto integrado por las guitarristas: Andrea Zurita, Laura Zilber, Agostina Elzegbe, Soledad Lazarte, Ana Larrubia y María Clara Millán. Desde 2014 el proyecto “Espiral de Mujeres Guitarristas” ofrece ciclos de conciertos con un repertorio heterogéneo nutrido de la música académica y de la música folklórica argentina y latinoamericana en diferentes formaciones. Donde la única constante son: la mujer y la guitarra.',
      youtube: [
        'https://www.youtube.com/watch?v=dmkLKfNcYY0&ab_channel=EspiraldeMujeresGuitarristas',
        'https://www.youtube.com/watch?v=d0X5ZnegfJc&ab_channel=EspiraldeMujeresGuitarristas'
      ]
    },
  ],
  Cuba: [
    {
      name: 'Yarima Blanco',
      style: 'Son Cubano',
      bio: 'Desde pequeña muestró su talento estudiando Guitarra en el conservatorio de Música de su ciudad natal, donde participó activamente y obtuvo premios en varios concursos infantiles.',
      youtube: [
        'https://www.youtube.com/watch?v=WWBQvPmYaL4&ab_channel=YarimaBlanco',
        'https://www.youtube.com/watch?v=OQP_binzkgQ&ab_channel=jrdumfries'
      ]
    },
  ],
  Brasil: [
    {
      name: 'Prika Amaral',
      style: 'Thrash Metal',
      bio: 'La brasileña Prika Amaral es guitarrista y fundadora de Nervosa, grupo de thrash formado por cuatro mujeres. Las guitarras furiosas y urgentes de Prika les dan paso a letras enfocadas en problemas sociales que asolan el mundo en general, como la corrupción y las crisis políticasn',
      youtube: [
        'https://www.youtube.com/watch?v=35Rys0jGnM0&ab_channel=NapalmRecords',
        'https://www.youtube.com/watch?v=7kB0GV6dC9o&ab_channel=PedroneAmplificadores'
      ]
    },
    {
      name: 'Badi Assad',
      style: 'Jazz, worldbeat',
      bio: 'Proviene de una familia de gran tradición musical. Su padre, Jorge Assad, de ascendencia libanesa, toca el bandolim (mandolina), y sus dos hermanos mayores, Sergio Assad y Odair Assad, son guitarristas y forman el Dúo Assad. Estudió guitarra clásica en la universidad de Río de Janeiro y ganó el Concurso joven de los instrumentistas en Río de Janeiro en 1984. En 1986, se unió a la Orquesta de guitarras de Río de Janeiro, dirigida por el guitarrista Turíbio Santos. En 1987, le nombraron "mejor Guitarrista brasileño" en el Festival internacional Villa-Lobos.',
      youtube: [
        'https://www.youtube.com/watch?v=CBMe9foIuR0&ab_channel=melwicca',
        'https://www.youtube.com/watch?v=5fDYzc6UclI&ab_channel=KUTXAustin'
      ]
    },
  ],
  'Japón': [
    {
      name: 'Kanako Nakayama (中山加奈子)',
      style: 'J-Pop, J-rock',
      bio: 'Es una cantante, letrista, compositora y músico japonesa. Fue la guitarrista de las bandas japonesas "Princess Princess" y "VooDoo Hawaiians". Se graduó de la Isogo high school, mientras cursaba sus estudios académicos, ubicada en Isogo-ku (磯子区). En el año 1983 kanako debutó en un concurso de tv de más de 1300 aspirantes, realizado por la empresa TDK Records. ',
      youtube: [
        'https://www.youtube.com/watch?v=-ND3fpY8y-Y&ab_channel=Molotov386',
        'https://www.youtube.com/watch?v=EO92xDw1HXw&ab_channel=cdleite2',
        'https://www.youtube.com/watch?v=7yRzWjRlXmc&ab_channel=cdleite2'
      ]
    },
  ],
  'Nueva Zelanda': [
    {
      name: 'Emily Edrosa',
      style: 'Indie rock, Punk',
      bio: 'Líder de la banda "Street Chant" durante más de diez años y, posteriormente, comenzó su carrera en solitario con el álbum "Another Wave Is Coming"',
      youtube: [
        'https://www.youtube.com/watch?v=uB5zb50VWns&ab_channel=ParkTheVan',
        'https://www.youtube.com/watch?v=SG950RxEAzM&ab_channel=RNZ'
      ]
    },
  ],
  'Irán': [
    {
      name: 'Lily Afshar',
      style: 'Música académica contemporánea Ver y modificar los datos en Wikidata',
      bio: 'Lily Afshar nació el 9 de marzo de 1960 en Teherán. De una familia azerí en Irán, comenzó a aprender guitarra a la edad de 10 años y pudo obtener un doctorado en interpretación de Universidad Estatal de Florida como la primera mujer en el mundo. Actualmente, está a cargo de la clase de guitarra en la Universidad de Memphis.',
      youtube: [
        'https://www.youtube.com/watch?v=8lQJOWKkS7Q&ab_channel=LilyAfshar',
        'https://www.youtube.com/watch?v=fE-paUJYupk&ab_channel=MelBayPublications'
      ]
    },
  ],
  Algeria: [
    {
      name: 'Souad Massi',
      style: 'Rock, country, fado, folk, world music',
      bio: 'Souad Massi se crio en el barrio de Bab El-Oued. Hija de una humilde familia de melómanos, descubre el chaabi, el rock and roll, el pop, el country, el flamenco, el folk. Tras aprender solfeo y guitarra, aparece en escena dentro del grupo Triana d\'Alger en 1989.1​',
      youtube: [
        'https://www.youtube.com/watch?v=U4J6zC7K0Pw&ab_channel=AdilMakhlouki',
        ''
      ]
    },
  ],
  India: [
    {
      name: 'Kamala Shankar',
      style: 'Música clásica india',
      bio: 'Vidushi Dr. Kamala Shankar, una renombrada intérprete de la guitarra clásica india, ha cautivado al mundo con su inmaculada y melodiosa interpretación de la música clásica indostánica. Kamala tiene el mérito de haber inventado la "Shankar Slide Guitar". Es conocida por su enorme control y versatilidad, así como por la profundidad de su instrumento. Tiene una habilidad excepcional y natural para tocar el estilo "Gayaki Ang" y su música se conoce popularmente como "guitarra cantante".',
      youtube: [
        'https://www.youtube.com/watch?v=Cpmamamj4ro&ab_channel=RajuAsokan',
        'https://www.youtube.com/watch?v=L1cOhoSx4pM&ab_channel=tothszabi'
      ]
    },
  ],
  'Sudáfrica': [
    {
      name: 'Alice Phoebe Lou',
      style: 'Indie Rock, Shoegazing, Folk, Jazz',
      bio: 'Lou creció en Kommetjie en la costa oeste de la Península del Cabo, en Sudáfrica, donde sus padres trabajaban como documentalistas; cuando era pequeña tomó clases de piano, de adolescente empezó a tocar la guitarra. En 2013 se trasladó finalmente a Berlín, donde ya concurre como una música callejera. En 2014 produjo "Momentum" su primer EP, dos Años más tarde apareció "Orbit" su Álbum debut de estudio.',
      youtube: [
        'https://www.youtube.com/watch?v=qcWocdfHfhI&ab_channel=AlicePhoebeLou',
        'https://www.youtube.com/watch?v=dhz4YfE5lWQ&ab_channel=KizCat',
        'https://www.youtube.com/watch?v=NPH9j0qVM3A&ab_channel=AlicePhoebeLou'
      ]
    },
  ],
  'Arabia Saudí': [
    {
      name: 'Adwa Aldakheel (أضوى الدخيل‎)',
      style: 'Pop folk',
      bio: '325 / 5000\n' +
        'Resultados de traducción\n' +
        'Autor, poeta, piloto, músico y empresario de Arabia Saudita. [1] Es la fundadora y directora ejecutiva de Falak, Ns3a y Dar Technology y cofundadora de Social Advisors. También es la fundadora de múltiples y emocionantes nuevas empresas que operan actualmente en la industria de la joyería, la industria de los medios y la industria de la tecnología financiera. ',
      youtube: [
        'https://www.youtube.com/watch?v=aISf91HtQk0&ab_channel=LibraProductions',
        'https://www.youtube.com/watch?v=hAiNl_Sqmwo&ab_channel=LibraProductions',
        'https://www.youtube.com/watch?v=s-xfIVCdPxw&ab_channel=AdwaAldakheel'
      ]
    },
  ],
  Egipto: [
    {
      name: 'Cherine Amr',
      style: 'Heavy metal',
      bio: 'Cherine nació y se crió en Alejandría y se introdujo por primera vez en el metal cuando escuchó a Metallica. En ese momento, no tenía idea de que había músicos y bandas que tocaban en lugares pequeños. Cuando comenzó la universidad fue cuando empezó a conocer el mundo de la música underground de Egipto. ',
      youtube: [
        'https://www.youtube.com/watch?v=qu9VAG9ffAQ&ab_channel=MassiveScarEra',
        'https://www.youtube.com/watch?v=AnVlkZSBeuE'
      ]
    },
  ],
  Indonesia: [
    {
      name: 'Tashea Nicole Delaney ',
      style: 'Heavy metal, Hard rock',
      bio: 'Guitarrista y cantante de la banda Indonesia "Pain Killer".',
      youtube: [
        'https://www.youtube.com/watch?v=QpyY0tjbgA8&ab_channel=LeviTheFly',
        'https://www.youtube.com/watch?v=3ZErvTq5hlg&ab_channel=TeguhHadiWijaya',
        'https://www.youtube.com/watch?v=H1KSGbyga1k&ab_channel=ThePainKillersTrunk'
      ]
    },
    {
      name: 'Dodo (Diana Widoera)',
      style: 'Acústico, Folk',
      bio: 'Guitarrista y cantante de "D\'Cinnamons", una banda acústica de Indonesia nacida en septiembre de 2004. La banda está formada por tres miembros, dos mujeres y un hombre: Dodo (voz principal y guitarra rítmica), Bona (guitarra y voz) y Nana (bajo acústico y voz). Su álbum debut, "Good Morning", fue lanzado a principios de 2007 con su primer sencillo, "Loving You".',
      youtube: [
        'https://www.youtube.com/watch?v=pemvfwQ2gKw&ab_channel=PojokKreator',
        'https://www.youtube.com/watch?v=0XdEry7tskA&ab_channel=BahanaFMJakarta',
      ]
    },
  ],
  Suecia: [
    {
      name: 'Marie Lindberg',
      style: 'Cantautora',
      bio: 'Profesora, cantautora y guitarrista sueca. Compitió en el Melodifestivalen 2007 tras mandar una canción por diversión. En Gotemburgo el 10 de febrero de 2007, Lindberg, tocó Trying to Recall, siendo la segunda finalista nombrada en el Melodifestivalen. Siendo la única cantante no profesional del festival, terminó quinta en la final, recibiendo gran puntuación del público, y convirtiéndose en un símbolo de apertura del Melodifestivalen a cualquier sueco.',
      youtube: [
        'https://www.youtube.com/watch?v=AsscEelCX1k&ab_channel=escfan1',
        'https://www.youtube.com/watch?v=-98EgHoyOvA&ab_channel=MonaAndresen'
      ]
    },
  ],
  España: [
    {
      name: 'Marta Robles',
      style: 'Flamenco',
      bio: 'Compositora y arreglista, Marta goza de gran versatilidad; además de ser intérprete de guitarra clásica y flamenca, también es creadora de obras de diversos estilos y ámbitos (música, teatro, danza y cine). Como guitarrista solista, ha participado en proyectos como “La Vida Breve” de Falla junto a la Sinfónica de Galicia, y actuado con orquestas como la Nederland Blazers Ensemble o la Amsterdamse Bach Solisten. Con sus numerosos proyectos, ha realizado giras por más de 50 países.',
      youtube: [
        'https://www.youtube.com/watch?v=jiIRI0a6rfA&ab_channel=MartaRoblesGuitarra',
        'https://www.youtube.com/watch?v=_2zqGlZ-7xk&ab_channel=MartaRoblesGuitarra'
      ]
    },
    {
      name: 'Antonia Jiménez ',
      style: 'Antonia Jiménez, guitarrista paya de flamenco, nació en El Puerto de Santa María (Cádiz), en el año de 1972. Desde muy joven se inicia en la guitarra flamenca con Antonio Villar acompañado al cante y al baile por los tablaos y peñas andaluzas, para más tarde trasladarse a Madrid donde recorre los tablaos y las salas más relevantes de la capital.',
      bio: '',
      youtube: [
        'https://www.youtube.com/watch?v=JsQ8ANOoRuw&ab_channel=DeFlamencoTV',
        'https://www.youtube.com/watch?v=wY_Y2Q3SZvY&ab_channel=Flamencoenfrance'
      ]
    },
  ],
  'Sudán': [
    {
      name: 'Islam Elbeiti',
      style: 'Jazz, Música popular africana',
      bio: 'Originaria de Sudán, Islam vivió en Etiopía, China, durante su infancia y adolescencia y después de la universidad en la República Democrática del Congo. Ahora, de regreso en Sudán, toca el bajo en un par de bandas y está entrando en la escena del negocio de la música trabajando para Impact Hub Khartoum, una entidad dedicada a habilitar el ecosistema empresarial en Sudán. Aún joven, a los 24 años, está impulsada por una fuerte determinación activista de cambiar las duras condiciones sociales que restringen a las mujeres músicas en Sudán.',
      youtube: [
        'https://www.youtube.com/watch?v=6ttjAzXy15s&ab_channel=MosabGlab',
        ''
      ]
    },
  ],
  pais: [
    {
      name: '',
      style: '',
      bio: '',
      youtube: [
        '',
        ''
      ]
    },
  ],

}
