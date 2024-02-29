const express = require('express');
const app = express();

// Middleware function to log request details
const logger = (req, res, next) => {
  const start = Date.now(); // Start time

  // Function to execute when the response is finished
  res.on('finish', () => {
    const duration = Date.now() - start; // Calculate duration
    console.log(`[${new Date().toISOString()}] ${req.method}:${req.url} ${res.statusCode} ${duration}ms`);
  });

  next(); // Pass control to the next middleware
};

// Use the logger middleware
app.use(logger);

// Example routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server running on port  3000');
});
