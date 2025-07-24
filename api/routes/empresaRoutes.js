// routes/empresaRoutes.js
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../empresas.json");

router.get("/empresas", (req, res) => {
  const empresas = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  res.json(empresas);
});

router.get("/empresas/filtrar", (req, res) => {
  const { materias } = req.query; // Ejemplo: ?materias=avena,trigo
  const filtros = materias ? materias.toLowerCase().split(",") : [];

  const empresas = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  const resultado = empresas.filter((empresa) => {
    const materiasEmpresa = empresa["Materias Primas"].toLowerCase();
    return filtros.every((filtro) => materiasEmpresa.includes(filtro));
  });

  res.json(resultado);
});

module.exports = router;
