const express = require("express");
const cors = require('cors');
const mongo = require('./connection');
const registerRouter = require('./routers/register');

const app = express();
// To convert req.body into json format
app.use(express.json());
app.use(cors());
mongo.connect();
app.use('/register', registerRouter);

app.listen(3001);