//colection dos professores

//chamando o mongoose
var mongoose = require("mongoose"); 

//listando as colections
const professores = mongoose.model("professores", {
    nome:String,
    turma:String,
    turno:String,
    escola:String
});




//exportar produtos
module.exports = professores;