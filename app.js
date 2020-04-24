// app.js

const express = require('express')
const connectDB = require('./config/db'); 
const cors = require('cors'); 

require('dotenv').config(); 

// routes
books = require('./routes/api/books');

// Start app
const app = express(); 

// Connect to MongoDB
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false })); 

app.get('/', (req, res) => res.send('Hello JV!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is now running on port: ${port}`));