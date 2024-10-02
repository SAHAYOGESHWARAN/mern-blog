const express = require('express');
const Post = require('../models/post'); // Ensure the path is correct
const { protect } = require('../middleware/authMiddleware'); // Ensure this is correctly defined

const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new post
router.post('/', protect, async (req, res) => { // Add protect if authentication is required
  const { title, content, author } = req.body;
  const post = new Post({
    title,
    content,
    author,
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add other routes for updating and deleting posts...
module.exports = router;
