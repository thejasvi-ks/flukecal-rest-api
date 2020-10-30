"use strict";
const DataStore = require("../datastore/dataStore");

module.exports.GetAllCategories = async (event, context, cb) => {

  const result = await DataStore.getData();

  cb(null, { statusCode: 200, body: JSON.stringify(result) });
  
};
