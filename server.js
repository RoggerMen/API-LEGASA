// server.js
const app = require("./api/index");
const convertirExcelAJson = require("./api/utils/excelToJson");

convertirExcelAJson(); // se ejecuta al iniciar el servidor local

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
