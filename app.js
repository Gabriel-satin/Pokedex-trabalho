const express = require('express');
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
