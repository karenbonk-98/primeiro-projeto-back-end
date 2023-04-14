const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Karen Bonk',
        Imagem:'https://avatars.githubusercontent.com/u/60606971?v=4',
        minibio: 'Estudante de Back End'

    },
    {
        nome: 'Karina Bonk',
        Imagem:'https://avatars.githubusercontent.com/u/60606971?v=4',
        minibio: 'Estudante de Back End'
    },{ 
    nome: 'Bruno Faccio',
        Imagem:'https://avatars.githubusercontent.com/u/60606971?v=4',
        minibio: 'Estudante de Back End' }
]

function mostraMulheres(request, response) {
response.json(mulheres)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)