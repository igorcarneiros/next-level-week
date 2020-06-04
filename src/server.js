const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))


//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})





//configurar caminhos da minha aplicação
//página inicial
//req é uma requisição, um pedido
//res é  uma resposta.
server.get("/", (req, res) => {//get é um verbo HTTP: im jeito de conversar através de HTTP
    return res.render("index.html", { title: "Um título" })
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})



//ligar o servidor
server.listen(3000)

//PRONTO! voce criou um servidor com 3 linhas de código!!