const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
class Comment extends Model {}
Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    
      comment_content: {
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
      modelName: 'comment',
    }
  );
  
  module.exports = Comment;
  