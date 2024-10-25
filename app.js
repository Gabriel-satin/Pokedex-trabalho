const express = require('express');
<<<<<<< HEAD
const bodyParser = require('body-parser');

// Inicialize o Express uma única vez
const app = express();

// Configurações do motor de visualização e diretório de views
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para tratar requisições de URL e arquivos estáticos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Importação das rotas
const pokemonRoutes = require('./routes/pokemonRoutes');
const trainerRoutes = require('./routes/trainerRoutes');

// Uso das rotas na aplicação
app.use("/", pokemonRoutes);
app.use("/trainers", trainerRoutes);

// Configuração da porta e inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
=======
const bodyParser = require ('body-parser');
const pokemonRutes = require ('./routes/pokemonRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/', pokemonRutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
>>>>>>> 511711a8fb27a7dd55fd07ef4092c4eb0740912f
