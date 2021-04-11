const Sequelize = require("sequelize")
const db = require("./db")

const Visitor = db.define("Visitor", {
  count:{
    type: Sequelize.INTEGER,
  }
})

module.exports = Visitor