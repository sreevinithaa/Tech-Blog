// import models
const User = require("./User");
const Comment = require("./Comment");
const Blog = require("./Blog");

// users have many blog
User.hasMany(Blog, {
  foreignKey: "created_by",
  onDelete: "CASCADE",
});
// Blog belongsTo one user
Blog.belongsTo(User, {
  foreignKey: "created_by",
});
// blogs have many comments
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

// Comment belongsTo one Blog
Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

// users have many comment
User.hasMany(Comment, {
  foreignKey: "created_by",
  onDelete: "CASCADE",
});
// Comment belongsTo one User
Comment.belongsTo(User, {
  foreignKey: "created_by",
});
module.exports = { User, Blog, Comment };
