const express = require('express');
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