const express = require('express');
const mongoose = require('mongoose'); // Use pg or any other library if using another database
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000; // or any other port you prefer

//MongoDB Connection URI
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://heinzler:0aCSLKFdR8x9eitN@aicluster01.y08pj.mongodb.net/?retryWrites=true&w=majority&appName=aiCluster01';

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable Cross-Origin Resource Sharing for API requests

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB. Error details:', err));

//Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Backend API!');
});

    // Sample API Route
app.get('/api/data', (req, res) => {
    res.send({ message: 'Hello from the backend!' });
});

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
