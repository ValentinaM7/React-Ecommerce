const harryPotterCharacters = [
  {
    name: "Harry Potter",
    house: "Gryffindor",
    profession: "Auror",
    price: 150,
    favoriteSpell: "Expelliarmus",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
    description: "El niño que vivió. Famoso por derrotar a Voldemort siendo un bebé."
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor",
    profession: "Ministra de Magia",
    price: 180,
    favoriteSpell: "Alohomora",
    image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
    description: "La bruja más brillante de su generación, defensora de los elfos domésticos."
  },
  {
    name: "Ron Weasley",
    house: "Gryffindor",
    profession: "Auror",
    price: 120,
    favoriteSpell: "Wingardium Leviosa",
    image: "https://ik.imagekit.io/hpapi/ron.jpg",
    description: "Leal amigo de Harry, amante del ajedrez mágico y las bromas."
  },
  {
    name: "Albus Dumbledore",
    house: "Gryffindor",
    profession: "Director de Hogwarts",
    price: 300,
    favoriteSpell: "Fawkes Flame",
    image: "https://res.cloudinary.com/dic68hupx/image/upload/v1760136922/AlbusDumbledore_WB_F6_DumbledoreSittingInChair_Promo_080615_Port_uzkhfb.jpg",
    description: "Sabio mago y mentor de Harry, poseedor de la Varita de Saúco."
  },
  {
    name: "Severus Snape",
    house: "Slytherin",
    profession: "Profesor de Pociones",
    price: 200,
    favoriteSpell: "Sectumsempra",
    image: "https://ik.imagekit.io/hpapi/snape.jpg",
    description: "Un héroe en las sombras, de lealtad compleja y amor eterno."
  },
  {
    name: "Draco Malfoy",
    house: "Slytherin",
    profession: "Empresario",
    price: 130,
    favoriteSpell: "Serpensortia",
    image: "https://ik.imagekit.io/hpapi/draco.jpg",
    description: "Heredero de una familia noble, con un destino lleno de dilemas morales."
  },
  {
    name: "Luna Lovegood",
    house: "Ravenclaw",
    profession: "Naturalista mágica",
    price: 160,
    favoriteSpell: "Riddikulus",
    image: "https://ik.imagekit.io/hpapi/luna.jpg",
    description: "Excéntrica y sabia, ve lo invisible y cree en lo imposible."
  },
  {
    name: "Neville Longbottom",
    house: "Gryffindor",
    profession: "Profesor de Herbología",
    price: 110,
    favoriteSpell: "Herbivicus",
    image: "https://ik.imagekit.io/hpapi/neville.jpg",
    description: "Valiente y humilde, amante de las plantas mágicas."
  },
  {
    name: "Sirius Black",
    house: "Gryffindor",
    profession: "Miembro de la Orden del Fénix",
    price: 190,
    favoriteSpell: "Animagus Transformation",
    image: "https://ik.imagekit.io/hpapi/sirius.JPG",
    description: "El padrino de Harry, rebelde y fiel hasta el final."
  },
  {
    name: "Remus Lupin",
    house: "Gryffindor",
    profession: "Profesor de Defensa Contra las Artes Oscuras",
    price: 170,
    favoriteSpell: "Expecto Patronum",
    image: "https://ik.imagekit.io/hpapi/lupin.jpg",
    description: "Un hombre sabio y bondadoso, que lucha contra su propia naturaleza."
  },
  {
    name: "Minerva McGonagall",
    house: "Gryffindor",
    profession: "Directora de Hogwarts",
    price: 210,
    favoriteSpell: "Transfiguration",
    image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
    description: "Rígida pero justa, experta en transformaciones y líder ejemplar."
  },
  {
    name: "Rubeus Hagrid",
    house: "Gryffindor",
    profession: "Guardián de las Llaves y Terrenos",
    price: 100,
    favoriteSpell: "Engorgio",
    image: "https://ik.imagekit.io/hpapi/hagrid.png",
    description: "Amante de las criaturas mágicas y gran amigo de Harry."
  },
  {
    name: "Ginny Weasley",
    house: "Gryffindor",
    profession: "Jugadora de Quidditch",
    price: 130,
    favoriteSpell: "Reducto",
    image: "https://ik.imagekit.io/hpapi/ginny.jpg",
    description: "Fuerte, valiente y talentosa con la escoba."
  },
  {
    name: "Bellatrix Lestrange",
    house: "Slytherin",
    profession: "Mortífaga",
    price: 220,
    favoriteSpell: "Crucio",
    image: "https://ik.imagekit.io/hpapi/bellatrix.jpg",
    description: "Fiel seguidora de Voldemort, tan peligrosa como impredecible."
  },
  {
    name: "Lord Voldemort",
    house: "Slytherin",
    profession: "Oscuro Señor",
    price: 400,
    favoriteSpell: "Avada Kedavra",
    image: "https://ik.imagekit.io/hpapi/voldemort.jpg",
    description: "El mago más temido de todos los tiempos."
  },
  {
    name: "Cho Chang",
    house: "Ravenclaw",
    profession: "Jugadora de Quidditch",
    price: 120,
    favoriteSpell: "Lumos",
    image: "https://ik.imagekit.io/hpapi/cho.jpg",
    description: "Encantadora buscadora de Ravenclaw con un corazón sensible."
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
    profession: "Estudiante",
    price: 140,
    favoriteSpell: "Accio",
    image: "https://ik.imagekit.io/hpapi/cedric.png",
    description: "Ejemplo de nobleza y juego limpio, campeón del Torneo de los Tres Magos."
  },
  {
    name: "Molly Weasley",
    house: "Gryffindor",
    profession: "Ama de casa",
    price: 90,
    favoriteSpell: "Mending Charm",
    image: "https://res.cloudinary.com/dic68hupx/image/upload/v1760137024/download_ez9adn.jpg",
    description: "Madre protectora y feroz cuando sus hijos están en peligro."
  },
  {
    name: "Arthur Weasley",
    house: "Gryffindor",
    profession: "Empleado del Ministerio de Magia",
    price: 85,
    favoriteSpell: "Reparo",
    image: "https://ik.imagekit.io/hpapi/arthur.jpg",
    description: "Fascinado por los objetos muggles y siempre curioso."
  },
  {
    name: "Lucius Malfoy",
    house: "Slytherin",
    profession: "Consejero del Ministerio",
    price: 200,
    favoriteSpell: "Imperio",
    image: "https://ik.imagekit.io/hpapi/lucius.jpg",
    description: "Aristócrata ambicioso y padre de Draco."
  },
  {
    name: "Dolores Umbridge",
    house: "Slytherin",
    profession: "Burócrata del Ministerio",
    price: 75,
    favoriteSpell: "Incarcerous",
    image: "https://ik.imagekit.io/hpapi/umbridge.jpg",
    description: "Fanática del orden y el rosa, temida por sus métodos crueles."
  },
  {
    name: "Fleur Delacour",
    house: "Beauxbatons",
    profession: "Embajadora mágica",
    price: 150,
    favoriteSpell: "Charm de Encanto Veela",
    image: "https://res.cloudinary.com/dic68hupx/image/upload/v1760137056/EOGwCTTmMyfW1HbCtxUDMb2q3fJmWJWgpsIB4DWx7bJtjOHi2bOPMCUPB8Mac_gdnL0ETDGvSi5RSMgJHW7IJg_ygye2x.webp",
    description: "Valiente y encantadora, representante de Francia en el Torneo de los Tres Magos."
  },
  {
    name: "Nymphadora Tonks",
    house: "Hufflepuff",
    profession: "Auror",
    price: 160,
    favoriteSpell: "Metamorfosis",
    image: "https://res.cloudinary.com/dic68hupx/image/upload/v1760137186/Nymphadora_Tonks_fgtkvr.webp",
    description: "Cambiante y divertida, esposa de Remus Lupin."
  },
  {
    name: "Kingsley Shacklebolt",
    house: "Unknown",
    profession: "Ministro de Magia",
    price: 170,
    favoriteSpell: "Stupefy",
    image: "https://ik.imagekit.io/hpapi/kingsley.jpg",
    description: "Carismático líder y defensor de la justicia."
  },
  {
    name: "Dobby",
    house: "None",
    profession: "Elfo libre",
    price: 100,
    favoriteSpell: "Apparate",
    image: "https://res.cloudinary.com/dic68hupx/image/upload/v1760137229/DobbyDH_dhbpmn.webp",
    description: "Leal y valiente, sacrificó su vida por la libertad."
  },
  {
    name: "Peter Pettigrew",
    house: "Gryffindor",
    profession: "Mortífago",
    price: 60,
    favoriteSpell: "Animagus Transformation",
    image: "https://res.cloudinary.com/dic68hupx/image/upload/v1760137275/Peter_Pettigrew_dsq0bu.webp",
    description: "Traidor de sus amigos, vivió como rata por años."
  },
  {
    name: "Horace Slughorn",
    house: "Slytherin",
    profession: "Profesor de Pociones",
    price: 130,
    favoriteSpell: "Felix Felicis",
    image: "https://ik.imagekit.io/hpapi/slughorn.JPG",
    description: "Amo del talento y las conexiones, con debilidad por los alumnos brillantes."
  },
  {
    name: "Mad-Eye Moody",
    house: "Unknown",
    profession: "Auror",
    price: 190,
    favoriteSpell: "Constant Vigilance",
    image: "https://res.cloudinary.com/dic68hupx/image/upload/v1760137322/iH7sigY5eE_1VJl1PgZgOUto_pvtstZyI0NOeH2icRs_mcni7f.webp",
    description: "Paranoico pero legendario cazador de magos oscuros."
  },
  {
    name: "Gilderoy Lockhart",
    house: "Ravenclaw",
    profession: "Autor y profesor",
    price: 95,
    favoriteSpell: "Obliviate",
    image: "https://res.cloudinary.com/dic68hupx/image/upload/v1760137365/Gilderoy_Lockhart_promotional_image_COSF_rz2m07.webp",
    description: "Vanidoso escritor de hazañas robadas."
  },
  {
    name: "Argus Filch",
    house: "None",
    profession: "Conserje de Hogwarts",
    price: 55,
    favoriteSpell: "N/A",
    image: "https://ik.imagekit.io/hpapi/filch.jpg",
    description: "Amargado y siempre acompañado de su gata, la Sra. Norris."
  }
];

export default harryPotterCharacters;