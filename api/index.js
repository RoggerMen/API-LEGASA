const express = require("express");
const empresaRoutes = require("./routes/empresaRoutes");
const app = express();

app.use(express.json());
app.use("/api", empresaRoutes);

// Exportar el handler como función para Vercel
module.exports = app;

