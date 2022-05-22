const sequelize = require('../config/connection');
const { User, Blog,Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
var blogarray=[];
  for (const blog of blogData) {
    const blog1= await Blog.create({
      ...blog,
      created_by: users[Math.floor(Math.random() * users.length)].id,
    });
    blogarray.push(blog1);
  }
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      created_by: users[Math.floor(Math.random() * users.length)].id,
      blog_id:blogarray[Math.floor(Math.random() * users.length)].id
    });
  }

  process.exit(0);
};

seedDatabase();
