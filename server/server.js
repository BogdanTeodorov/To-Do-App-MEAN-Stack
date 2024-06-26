const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const routes = require("./routes/routes");
const app = express();
const port = process.env.PORT || 3000;
const mongoDbConnectionString = process.env.MONGODB;
const databaseName = "meanstackpracticedb";

app.use(cors());

mongoose.connect(mongoDbConnectionString, {
    dbName: databaseName
})

const connection = mongoose.connection;

app.listen(port, () => {
    console.log(`Server is listening on port localhost:${port}`);
})

connection.once("open", () => {
    console.log(`MongoDB connected to databse ${databaseName}`);
})

app.use(express.json());
app.use(routes);