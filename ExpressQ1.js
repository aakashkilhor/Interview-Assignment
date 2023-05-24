const express = require('express');
const app = express();

// Sending 20 post
app.get('/post', (req, res) => {
  const posts = []; 

//   20 Posts
  for (let i = 1; i <= 20; i++) {
    posts.push({ id: i, title: `Post ${i}`, content: `content ${i}` });
  }

  res.json(posts);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
