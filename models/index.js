const User = require("./User");
const Comment = require("./Comment");
const Blog = require("./Blog");
User.hasMany(Blog, {
  foreignKey: "created_by",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "created_by",
});
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});
User.hasMany(Comment, {
  foreignKey: "created_by",
  onDelete: "CASCADE",
});
Comment.belongsTo(User, {
  foreignKey: "created_by",
});
module.exports = { User, Blog, Comment };
