const express = require("express");
const cors = require("cors");

const empresaRoutes = require("./routes/empresaRoutes");

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://front-legasa-lh8g.vercel.app"], 
  methods: ["GET", "POST"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", empresaRoutes);


module.exports = app;

