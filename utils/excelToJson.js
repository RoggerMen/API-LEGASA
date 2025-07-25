// utils/excelToJson.js
const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const excelPath = path.join(__dirname, "../data/empresas.xlsx");

function convertirExcelAJson() {
  const workbook = xlsx.readFile(excelPath);
  const hoja = workbook.Sheets[workbook.SheetNames[0]];
  const datos = xlsx.utils.sheet_to_json(hoja);

  fs.writeFileSync(
    path.join(__dirname, "../api/empresas.json"),
    JSON.stringify(datos, null, 2),
    "utf-8"
  );

  console.log("✅ Datos convertidos a JSON y guardados en empresas.json");
}

module.exports = convertirExcelAJson;
