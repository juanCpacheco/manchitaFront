const express = require("express");
const path = require("path");

const app = express();

// Servir los archivos estáticos de la carpeta 'build'
app.use(express.static(path.join(__dirname, "build")));

// Manejar todas las solicitudes GET
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
