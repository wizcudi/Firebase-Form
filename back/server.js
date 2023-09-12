// server.js

// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create a new express application instance
const app = express();

// The port the express app will listen on
const port = 5050;

// Serving static files
app.use(express.static('public'));

// Configure middleware
// Enable request parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS 
app.use(cors({ origin: 'http://localhost:3000' }));


// Simple route handler for GET request to the root ('/') URL
app.get('/', (req, res) => {
    res.send('Welcome to FormSQL backend server!');
});

// Add a simple route for form data submission
app.post('/submit', (req, res) => {
    let formData = req.body;
    // Process form data (i.e., save to database)
    console.log("Form data received at server: ", formData);
    res.send("Form data received!");
});

// Serve the application at the given port
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});