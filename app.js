// app.js
require('dotenv').config();  // load env vars from .env file
const express = require('express')
const connectDB = require('./config/db'); 
const cors = require('cors'); 
const path = require("path");
//don't forget to npm install -s path

// Setting PORT 
const PORT = process.env.PORT;

// routes
const booksRoute = require('./routes/api/books');
// import other routes...

// Start app
const app = express(); 

// Serving static files from the react app
app.use(express.static(path.join(__dirname, '/mern-project-client/build')));

// Connect to MongoDB
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false })); 

// use Routes
app.use('/api/books', booksRoute);
// ...more routes here...

// The "catchall" handler: for any requests that doesn't match the one above, send back React's index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/mern-project-client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server is now running on port: ${PORT}`));