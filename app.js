// app.js

const express = require('express')
const connectDB = require('./config/db'); 
const config = require('./config/config');
const cors = require('cors'); 
const path = require("path");
//don't forget to npm install -s path

require('dotenv').config(); 

// routes
books = require('./api/books');

// Start app
const app = express(); 

// Connect to MongoDB
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
// app.use(express.json({ extended: false })); 

app.use(express.static(path.join(__dirname, 'mern-project-client', 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'mern-project-client', 'build', 'index.html'));
}); 

// app.get('/', (req, res) => rges.send('Hello JV!'));

// use Routes
app.use('/api/books', books);

app.listen(config.port, () => console.log(`Server is now running on port: ${config.port}`));