const axios = require('axios');

module.exports.getData = async (category) => {

  let URL = `https://www.cubyt.io/data/categories/`;

  if(category != undefined){
    URL = URL.concat(category);
  }

  response = await axios.get(URL);

  return response.data;
} 
