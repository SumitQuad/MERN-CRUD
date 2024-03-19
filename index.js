// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));


// Connect to MongoDB
// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Sumitdb:7RaEjbzQSkBZejl7@cluster0.dpyfy.mongodb.net/node-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('MongoDB Atlas connection error:', err);
});

// index.js
const itemRouter = require('./routes/items');
app.use('', itemRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
