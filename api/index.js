const express = require("express");
const empresaRoutes = require("./routes/empresaRoutes");
const app = express();

app.use(express.json());
app.use("/api", empresaRoutes);


module.exports = app;

