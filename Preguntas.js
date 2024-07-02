function getRandomQuestions(questionBank, numQuestions) {
  let shuffled = questionBank.sort(() => 0.5 - Math.random());
  let selectedQuestions = shuffled.slice(0, numQuestions);
  
  selectedQuestions.forEach((question, index) => {
      question.numb = index + 1;
  });
  return selectedQuestions;
}

let questionBank = [
  {
      "numb": 1,
      "question": "¿Quién es la esposa de Naruto?",
      "answer": "Hinata",
      "options": [
        "Sasuke",
        "Hinata",
        "Ino",
        "Sakura"
      ]
  },
  {
      "numb": 2,
      "question": "¿Cuál es el juego con mejor puntuación según Metacritic?",
      "answer": "The Legend of Zelda: Ocarina of Time",
      "options": [
        "The Legend of Zelda: Ocarina of Time",
        "Red Dead Redemption 2",
        "Grand Theft Auto (GTA) IV",
        "Minecraft"
      ]
  },
  {
      "numb": 3,
      "question": "¿Quién pintó la Mona Lisa?",
      "answer": "Leonardo da Vinci",
      "options": [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet"
      ]
  },
  {
      "numb": 4,
      "question": "¿Cuál es el río más largo del mundo?",
      "answer": "Nilo",
      "options": [
        "Amazonas",
        "Yangtsé",
        "Nilo",
        "Misisipi"
      ]
  },
  {
      "numb": 5,
      "question": "¿Quién es el mentor de Goku en 'Dragon Ball'?",
      "answer": "Maestro Roshi",
      "options": [
        "Maestro Roshi",
        "Vegeta",
        "Piccolo",
        "Krillin"
      ]
  },
  {
      "numb": 6,
      "question": "¿Cuál es la capital de Francia?",
      "answer": "París",
      "options": [
        "Londres",
        "Madrid",
        "Roma",
        "París"
      ]
  },
  {
      "numb": 7,
      "question": "¿En qué año llegó el hombre a la Luna?",
      "answer": "1969",
      "options": [
        "1959",
        "1969",
        "1979",
        "1989"
      ]
  },
  {
      "numb": 8,
      "question": "¿Cuál es el poder de Ichigo en 'Bleach'?",
      "answer": "Shinigami",
      "options": [
        "Ninja",
        "Shinigami",
        "Alquimista",
        "Mago"
      ]
  },
  {
      "numb": 9,
      "question": "¿Quién es el protagonista de 'Fairy Tail'?",
      "answer": "Natsu Dragneel",
      "options": [
        "Natsu Dragneel",
        "Luffy",
        "Son Goku",
        "Naruto Uzumaki"
      ]
  },
  {
      "numb": 10,
      "question": "¿Cuál es el país más grande del mundo?",
      "answer": "Rusia",
      "options": [
        "China",
        "Canadá",
        "Estados Unidos",
        "Rusia"
      ]
  },
  {
      "numb": 11,
      "question": "¿En qué anime aparece el personaje Edward Elric?",
      "answer": "Fullmetal Alchemist",
      "options": [
        "Fullmetal Alchemist",
        "Black Clover",
        "Fairy Tail",
        "Hunter x Hunter"
      ]
  },
  {
      "numb": 12,
      "question": "¿Cual es el deporte mas visto del mundo?",
      "answer": "Fútbol",
      "options": [
        "Fútbol",
        "Baloncesto",
        "Voleibol",
        "Tenis"
      ]
  },
  {
      "numb": 13,
      "question": "¿Cuál es el nombre del protagonista de 'Tokyo Ghoul'?",
      "answer": "Ken Kaneki",
      "options": [
        "Ken Kaneki",
        "Touka Kirishima",
        "Yoshimura",
        "Nishiki Nishio"
      ]
  },
  {
      "numb": 14,
      "question": "¿Quién es el creador de 'Super Mario'?",
      "answer": "Shigeru Miyamoto",
      "options": [
        "Hideo Kojima",
        "Shigeru Miyamoto",
        "Sid Meier",
        "John Carmack"
      ]
  },
  {
      "numb": 15,
      "question": "¿Cuál es el animal nacional de Australia?",
      "answer": "Canguro",
      "options": [
        "Koala",
        "Emú",
        "Canguro",
        "Dingo"
      ]
  },
  {
      "numb": 16,
      "question": "¿En qué año inicio la segunda guerra mundial?",
      "answer": "1939",
      "options": [
        "1839",
        "1939",
        "1949",
        "1888"
      ]
  },
  {
      "numb": 17,
      "question": "¿Quién escribió 'Cien años de soledad'?",
      "answer": "Gabriel García Márquez",
      "options": [
        "Mario Vargas Llosa",
        "Gabriel García Márquez",
        "Jorge Luis Borges",
        "Carlos Fuentes"
      ]
  },
  {
      "numb": 18,
      "question": "¿Qué tipo de criatura es Totoro en 'Mi Vecino Totoro'?",
      "answer": "Espíritu del bosque",
      "options": [
        "Espíritu del bosque",
        "Fantasma",
        "Dragón",
        "Gato"
      ]
  },
  {
      "numb": 19,
      "question": "¿En qué anime los personajes usan 'quirks' o poderes especiales?",
      "answer": "My Hero Academia",
      "options": [
        "Fairy Tail",
        "My Hero Academia",
        "Bleach",
        "Sword Art Online"
      ]
  },
  {
      "numb": 20,
      "question": "¿Cuál es el idioma más hablado del mundo?",
      "answer": "Chino mandarín",
      "options": [
        "Inglés",
        "Español",
        "Hindi",
        "Chino mandarín"
      ]
  },
  {
      "numb": 21,
      "question": "¿Quién dirigió la película 'Inception'?",
      "answer": "Christopher Nolan",
      "options": [
        "Steven Spielberg",
        "Martin Scorsese",
        "Christopher Nolan",
        "James Cameron"
      ]
  },
  {
      "numb": 22,
      "question": "¿Cuál es el nombre del protagonista de 'Breaking Bad'?",
      "answer": "Walter White",
      "options": [
        "Jesse Pinkman",
        "Saul Goodman",
        "Walter White",
        "Hank Schrader"
      ]
  },
  {
      "numb": 23,
      "question": "¿Qué país ganó la Copa Mundial de la FIFA 2018?",
      "answer": "Francia",
      "options": [
        "Alemania",
        "Brasil",
        "Francia",
        "Argentina"
      ]
  },
  {
      "numb": 24,
      "question": "¿Qué actriz interpretó a Hermione Granger en las películas de 'Harry Potter'?",
      "answer": "Emma Watson",
      "options": [
        "Emma Stone",
        "Emma Watson",
        "Emily Blunt",
        "Natalie Portman"
      ]
  },
  {
      "numb": 25,
      "question": "¿Cuál es el nombre del villano en 'Los Vengadores'?",
      "answer": "Thanos",
      "options": [
        "Loki",
        "Ultron",
        "Thanos",
        "Hela"
      ]
  },
  {
      "numb": 26,
      "question": "¿Quién escribió 'Don Quijote de la Mancha'?",
      "answer": "Miguel de Cervantes",
      "options": [
        "Miguel de Cervantes",
        "Federico García Lorca",
        "Pablo Neruda",
        "Gabriel García Márquez"
      ]
  },
  {
      "numb": 27,
      "question": "¿Cuál es el nombre del protagonista de 'Code Geass'?",
      "answer": "Lelouch Lamperouge",
      "options": [
        "Suzaku Kururugi",
        "Lelouch Lamperouge",
        "C.C.",
        "Nunnally vi Britannia"
      ]
  },
  {
      "numb": 28,
      "question": "¿Cuál es la dimension donde hay mas lava en 'Minecraft'?",
      "answer": "Nether",
      "options": [
        "Overwolrd",
        "End",
        "Nether",
        "SkyCity"
      ]
  },
  {
      "numb": 29,
      "question": "¿Cómo se llama el protagonista de 'Death Note'?",
      "answer": "Light Yagami",
      "options": [
        "L",
        "Misa Amane",
        "Light Yagami",
        "Near"
      ]
  },
  {
      //"numb": 30,
      "question": "¿Cuál es el estado menos violento del México?",
      "answer": "Yucatan",
      "options": [
        "Sinaloa",
        "Michoacan",
        "Yucatan",
        "CDMX"
      ]
  }
]


let questions = getRandomQuestions(questionBank, 10);