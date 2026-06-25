const express = require("express");
const cors = require("cors");
const todoRoutes = require("../backend/src/routes/todoRoutes")
const errorHandler = require("../backend/src/middlewares/errorHandler")

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Api Working");
});

app.use('/api/todos', todoRoutes);

app.use(errorHandler);

module.exports = app;