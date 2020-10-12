const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const todoRouter = require('./router/todosRouter');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/', todoRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));