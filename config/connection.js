const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
//database connection
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    'sql6494872',
    'sql6494872',
    'h4twgdLBjf',
    {
      host: 'sql6.freemysqlhosting.net',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
