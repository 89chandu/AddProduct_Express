const Sequelize = require('sequelize');

const sequelize = new Sequelize('add_product', 'root', '7999Ch@ndu', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
