"use strict";
const express = require("express");
const bodyParser = require("body-parser"); 
const cors = require("cors"); 
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(cors())
const ordenes = require("./modelos/ordenModelo");

//endpoint
app.post("/login", (req, res) => {
    const { usu, pass } = req.body //ejemplo de lo que se espera: {usuario: "admin", pass:"1234"}
    if (usu === "admin" && pass === "1234"){
        return res.send({estado: "ok", url:"/registroOrdenes"})
    }
    res.send({estado: "error", url:""})
})

app.post("/registroOrdenes/guardar", (req, res) => {
        const data = req.body 
        const ord = new ordenes(data);
        ord.save((error) => {
            if (error) {
                return res.send ({ msg: "Error al guardar", estado: "error"})
             }
             return res.send ({ msg: "Guardado con éxito", estado: "ok"})
        });
    
})

mongoose.connect("mongodb+srv://carolina0714:prueba1234@cluster0.h7sfsmg.mongodb.net/instaya?retryWrites=true&w=majority")
    .then(res => console.log ("Conectado a BD"))
    .catch(err => console.log(err))

app.listen(8000, () => {
    console.log(`Server is runing on port 8000.`);
});
