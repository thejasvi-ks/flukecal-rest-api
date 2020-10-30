"use strict";
const DataStore = require("../datastore/dataStore");

module.exports.GetCategory = async (event, context, cb) => {

  const result = await DataStore.getData(event.pathParameters["category"]);

  cb(null, { statusCode: 200, body: JSON.stringify(result) });

};
