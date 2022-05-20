const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
class Blog extends Model {}
Blog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: false,
      
      },
      created_by: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
          },
      
      },
    },
    {
      
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );
  
  module.exports = Blog;
  