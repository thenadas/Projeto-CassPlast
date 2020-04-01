const express = require('express');
const app = express();

app.use(express.json())

app.listen(3333, function(error){
    if(error){
        console.log("Ocorreu um erro ao iniciar!")
    }
    else{
        console.log("Servidor iniciado com sucesso")
    }
})