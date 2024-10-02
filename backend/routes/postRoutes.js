
const express = require('express');
const Post = require('..models/post.js');
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
router.post('/', async (req, res) => {
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

// Update post
router.put('/:id', protect, async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const post = await Post.findById(req.params.id);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      if (post.author !== req.user.username) {
        return res.status(401).json({ message: 'Not authorized' });
      }
  
      post.title = title;
      post.content = content;
  
      const updatedPost = await post.save();
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Delete post
  router.delete('/:id', protect, async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      if (post.author !== req.user.username) {
        return res.status(401).json({ message: 'Not authorized' });
      }
  
      await post.remove();
      res.json({ message: 'Post removed' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
module.exports = router;
