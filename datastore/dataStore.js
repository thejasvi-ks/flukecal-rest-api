const axios = require('axios');
require('dotenv').config();
module.exports.getData = async (category) => {

  let URL = process.env.FLUKECAL_API;

  if(category != undefined){
    URL = URL.concat(category);
  }

  response = await axios.get(URL);

  return response.data;
} 
