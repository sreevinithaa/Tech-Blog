const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
// Create a new Sequelize model for Comment
class Comment extends Model {}
Comment.init(
    {
       // define columns
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
    blog_id:{
      type: DataTypes.INTEGER,
      references: {
          model: 'blog',
          key: 'id',
        },
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
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
  );
  
  module.exports = Comment;
  