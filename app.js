const express = require('express');
const app = express();

const cors = require('cors')
const pokemonRoutes = require('./pokemonRoutes')

app.use(cors());
app.use(express.json());

app.use('/pokemon', pokemonRoutes)


module.exports = app;