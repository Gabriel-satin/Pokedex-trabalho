const {Sequelize, DataTypes, Sequelize} = require ('sequelize');
const Sequelize = new Sequelize ('sqlite: :memory');

const User = sequelize.define(
  'User',
{
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lestName: {
    type: DataTypes.STRING,
  },
},
{
  
},
);
