const express = require("express") 
const router = express.Router()
const cors = require('cors') 
const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados()
const Mulher = require('./mulherModel')
const app = express()
app.use(express.json())
app.use(cors())
const porta = 3333

async function mostraMulheres(request, response) {

try {
const mulheresvindasDoBancoDeDados = await Mulher.find()
response.json(mulheresvindasDoBancoDeDados)
}catch (erro) {
console.log(erro)
}
}

async function criaMulher(request, response) {
const novaMulher = new Mulher({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao
})

try {
    const MulherCriada = await novaMulher.save()
    response.status(201).json(MulherCriada)
}
catch (erro) {
    console.log(erro)
}
}
//PATCH 
async function corrigeMulher(request, response) {
    try{
const mulherEncontrada = await Mulher.findById(request.params.id)
if (request.body.nome) {
    mulherEncontrada.nome = request.body.nome
}
if (request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio
}
if (request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem
}
if (request.body.citacao) {
    mulherEncontrada = request.body.citacao
}

const mulherAtualzadaNoBancoDeDados = await mulherEncontrada.save()
response.json(mulherAtualzadaNoBancoDeDados)

} catch (erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaMulher(request, response) {
   try {
await Mulher.findByIdAndDelete(request.params.id)
response.json({menssage: 'Mulher deletada com sucesso!'})   
}
   catch(erro) {
    console.log (erro)
   }
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.use(router.patch('/mulheres/:id', corrigeMulher))
app.use(router.post('/mulheres', criaMulher))
app.listen(porta, mostraPorta)
app.use(router.delete('/mulheres/:id', deletaMulher))