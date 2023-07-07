require('dotenv').config()
const { Sequelize } = require('sequelize');

const URI = `${process.env.DB_DIALECT}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

const db = new Sequelize(URI); 
 
db.sync({ force: false})
.then(() => {
  console.log("DB Connected!");
})
.catch(console.error)

module.exports = db;
