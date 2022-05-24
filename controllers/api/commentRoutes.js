const router = require('express').Router();
const { Comment } = require('../../models');

//Add new comment method
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
  //Update comment method
router.put('/', async (req, res) => {
  try {
    
    const commentData = await Comment.update({
      comment_content:req.body.comment,
      
    },
    {
      // Gets a blog based on the id given in the body
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});
//delete comment method
router.delete("/:id", async (req, res) => {
  try {
    const dbblogData = await Comment.destroy({where: {
      id: req.params.id,
    }});

    res.status(200).json(dbblogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  module.exports = router;
