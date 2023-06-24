const express = require('express');
const routes = require('./routes/routes');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit process with failure
  });

// Routes
app.use('/', routes);
