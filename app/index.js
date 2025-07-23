// Import express library
const express = require('express');

// Create express app instance
const app = express();

// Basic route to respond on the root path
app.get('/', (req, res) => {
    res.send('🚀 DevOps Docker Project Running!');
});

// Define port (default 3000)
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

