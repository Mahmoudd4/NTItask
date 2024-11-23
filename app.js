const express = require('express');

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Define the root route
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

