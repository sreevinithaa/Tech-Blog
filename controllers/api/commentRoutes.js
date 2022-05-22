const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      
      const commentData = await Comment.create({
        comment_content:req.body.comment,
        blog_id:req.body.blog_id,
        created_by: req.session.user_id,
      });
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
