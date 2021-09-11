//chamando o express para dentro do projeto
var express = require("express"); 
const app = express(); 

//chamando o mongoose para dentro do projeto
var mongoose = require("mongoose");

//criando a constante porta para rodar o projeto
const port = 4000;

//conxao com o banco de dados
var db_escola = "mongodb+srv://alessandra_souza:alessandra_souza@cluster0.ojw7z.mongodb.net/EscolaMVC?retryWrites=true&w=majority"
mongoose.connect(db_escola, {useNewUrlParser:true, useUnifiedTopology:true});

//preparando a visualização
app.set("view engine", "ejs");
app.set("views", __dirname, "views");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//rota professores exportada
const professores_router = require("./routers/professores-router");
app.use("/professores", professores_router);


//rota principal
app.get("/", (req,res)=>{
    res.send("Página Principal")
});

//escuta da porta
app.listen(port, ()=>{
    console.log("Servidor conectado na porta ", port)
});