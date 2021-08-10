const express = require('express')
const servidor = express() 
//testando

servidor.get(
    '/', (req, res, next) => {
        return res.send(
            {
                "mensagem": "Bem-vindo(a) ao servidor"
            }
        )
    }
)

servidor.listen(3000, () => {
    console.log('Servidor funcionando!')
})
