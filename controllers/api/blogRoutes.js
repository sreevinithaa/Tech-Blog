const router = require("express").Router();
const { Blog } = require("../../models");

router.put("/", async (req, res) => {
  try {
    const blogData = await Blog.update(
      {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        content: req.body.content,
      },
      {
        // Gets a book based on the book_id given in the request parameters
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
