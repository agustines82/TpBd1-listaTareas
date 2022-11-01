import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

console.log("hola mundo");
//instancio express
const app = express();

//CONFIGURACION DEL PUERTO
app.set("port", process.env.PORT || 4001);
//para usar el puerto
app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto " + app.get("port"));
});

//MIDDLEWARES:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ entends: true }));
app.use(morgan("dev"));
//cargar un archivo estatico
app.use(express.static(path.join(__dirname, "../public")));

//RUTAS
