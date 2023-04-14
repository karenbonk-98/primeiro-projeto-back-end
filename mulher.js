const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Karen Bonk',
    imagem: 'https://avatars.githubusercontent.com/u/60606971?v=4',
    minibio: 'Estudante de Back End'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)