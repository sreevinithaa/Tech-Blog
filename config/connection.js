const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
//database connection details from environmental variable
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    'heroku_7643ec736354xxx',
    'b7e2437887xxxa',
    '0200xxx6',
    {
      host: 'us-cdbr-iron-east-02.cleardb.net',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
