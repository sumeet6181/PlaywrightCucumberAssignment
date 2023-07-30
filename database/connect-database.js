const sql = require("mssql");
var mysql = require('mysql');
const databaseConfig = require("../database/database-config.json");

async function database(databaseServer, query) {
  try {
    if(databaseServer == "msSQL")
    {
    await sql.connect(await getConfig(databaseServer));
    const result = await sql.query(query);
    return result;
    }
    else if(databaseServer == "mySQL") 
    {
   var connection = await mysql.createConnection(await getConfig(databaseServer));
   await connection.connect(function (err) {
    if(err){
        throw err;
    }
 });
 await connection.query(query, async function (err, result) {
    if (err) throw err;
    //await console.log(result);
    return result;
  });
 
    }
  } catch (err) {
    console.log(err);
  }
}
async function getConfig(databaseName) {
  if (databaseName == "msSQL") {
    return databaseConfig.msSQL;
  }
  else if(databaseName == "mySQL");
  {
    return databaseConfig.mySQL;
  }
}

module.exports = { database, getConfig };
