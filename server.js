// congifurando o servidor
const express = require("express")
const server = express()


//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))


//congfigurando  a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})


// configurar apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html")
})


// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function (){
    console.log("iniciei o servidor.")
})