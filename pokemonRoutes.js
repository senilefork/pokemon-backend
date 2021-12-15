const express = require('express');
const router = express.Router();
const axios = require('axios');
const getAttributes = require('./helpers/getAttributes');
const { ExpressError } = require('./expressError');


router.get('/:offset/:limit', async function(req, res, next){
  
   try{
    //grab offset and limit from query string 
    const offset = req.params.offset;
    const limit = req.params.limit;
    //get list of pokemon from api
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    if(!data) throw new ExpressError();

    //extract the data we want
    const count = data.data.count;
    const pokemonData = data.data.results;
    
    //check getAttributes in ./helpers for more info
    const newData = await getAttributes(pokemonData);
    //return json object with desired data
    return res.json({data: {count: count, pokemonData: newData}});
    
   }catch(e){
    return next(e);
   }
});

module.exports = router;

