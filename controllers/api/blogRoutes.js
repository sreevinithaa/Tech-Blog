const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/', async (req, res) => {
    try {
      
      const blogData = await Blog.create({
        title:req.body.title,
        content:req.body.content,
        created_by: req.session.user_id,
      });
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
