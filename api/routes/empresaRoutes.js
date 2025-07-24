const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// ✅ Leemos el archivo JSON una sola vez al inicio
const dataPath = path.join(__dirname, "../empresas.json");

let empresas = [];
try {
  empresas = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  console.log("✅ Datos de empresas cargados correctamente.");
} catch (error) {
  console.error("❌ Error al leer empresas.json:", error.message);
}
router.get("/empresas", (req, res) => {
  res.json(empresas);
});

router.get("/empresas/filtrar", (req, res) => {
  const { materias } = req.query; // ?materias=avena,trigo
  const filtros = materias ? materias.toLowerCase().split(",") : [];

  const resultado = empresas.filter((empresa) => {
    const materiasEmpresa = empresa["Materias Primas"]?.toLowerCase() || "";
    return filtros.every((filtro) => materiasEmpresa.includes(filtro));
  });

  res.json(resultado);
});

module.exports = router;
