const router = require("express").Router();
const { Comment, Blog, User } = require("../models");
const withAuth = require("../utils/auth");

//Get all blogs for view
router.get("/", async (req, res) => {
  try {
    // Get all blog and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("home", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one blog
// Use the custom middleware before allowing the user to access the blog
router.get("/blog/:id", async (req, res) => {
  try {
    const dbblogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["id", "comment_content", "created_at", "created_by"],
          include: [{ model: User, attributes: ["name"] }],
        },
      ],
    });
    const isEdit = dbblogData.created_by == req.session.user_id;
    const blog = dbblogData.get({ plain: true });
    res.render("blog", { blog, isEdit, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// add comment functionalit
router.get("/addcomment/:id", async (req, res) => {
  try {
    var comment = new Comment();
    comment.blog_id = req.params.id;
    
    res.render("comment", {
      blog_id: req.params.id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get blog for edit functionality
router.get("/editBlog/:id", async (req, res) => {
  try {
    const dbblogData = await Blog.findByPk(req.params.id, {});
    const blog = dbblogData.get({ plain: true });
    res.render("editBlog", { blog, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//render add blog page
router.get("/addblog", async (req, res) => {
  try {
    res.render("addBlog", { logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get blogs for logged in user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Get all blog and JOIN with user data
    const blogData = await Blog.findAll({
      where: {
        created_by: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("dashboard", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//render login page if not logged in
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//logout functionality
router.get("/logout", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  }
});

module.exports = router;
