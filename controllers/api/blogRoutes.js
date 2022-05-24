const router = require("express").Router();
const { Blog } = require("../../models");

//Update blog method
router.put("/", async (req, res) => {
  try {
    const blogData = await Blog.update(
      {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        content: req.body.content,
      },
      {
        // Gets a blog based on the id given in the body
        where: {
          id: req.body.id,
        },
      }
    );

    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Add new blog method
router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      created_by: req.session.user_id,
    });

    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
