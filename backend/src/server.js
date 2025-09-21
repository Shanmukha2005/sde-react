const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactsRouter = require('./routes/contacts');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/contacts', contactsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
