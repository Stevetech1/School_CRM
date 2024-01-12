const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes'); // connect routes to server.js file
const cors = require('cors')

//Initialize datenv here
dotenv.config();

// Connecting my backend to mongodb
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_ACCESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
}

// Routing my connection here
app.use(express.json())
app.use(cors())
app.use('/app', routesUrls);

// Call the function to connect to the database
connectToDatabase();

app.listen(4000, () => console.log('Server is up and running'));
