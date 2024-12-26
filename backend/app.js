const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const authenticate = require("./auth/authenticate");

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}

connectDB();

app.use('/api/signup', require("./routes/singup.js"));
app.use('/api/login', require('./routes/login.js'));
app.use('/api/signout', require('./routes/signout.js'));
app.use('/api/user', authenticate, require('./routes/user.js'));
app.use('/api/todos', authenticate, require('./routes/todos.js'));
app.use('/api/refresh-token', require('./routes/refreshToken.js'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});