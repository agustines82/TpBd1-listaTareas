import express from "express";
console.log("hola mundo");

const app = express();

app.set("port", process.env.PORT || 4001);

app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto " + app.get("port"));
});
