const axios = require('axios');

/*getAttributes function used to make a request to an individual pokemon url, pushes desired data onto an array and returns it*/

const getAttributes = async (dataArray) =>{
    const arr = [];
    for(let obj of dataArray){
      const data = await axios.get(obj.url);
      const pokemonData = data.data
      arr.push({
        name: pokemonData.name, 
        base_experience: pokemonData.base_experience,
        abilities: pokemonData.abilities, 
        forms: pokemonData.forms, 
        species: pokemonData.species, 
        types: pokemonData.forms,
        num_moves: pokemonData.moves.length,
        weight: pokemonData.weight,
        height: pokemonData.height, 
        img_front: pokemonData.sprites.front_default});
    };
    return arr;
 };

 module.exports = getAttributes;