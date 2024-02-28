const express = require("express");
const router = express.Router();

// Create a model using the schema
const Post = require("../models/postSchema");

// Get all the posts
router.get("/posts", async (req, res) => {
  const posts = await Post.find({});
  res.send(posts);
});

router.post("/posts", async (req, res) => {
  console.log(req.body);
  try {
    const {
      title,
      author,
      description,
      requirements,
      date,
      age,
      contactInfo,
      tags,
      location,
    } = req.body;
    const post = new Post(
      title,
      author,
      description,
      requirements.split("," || ", "),
      date,
      age,
      contactInfo,
      tags.split("," || ", "),
      location
    );
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
