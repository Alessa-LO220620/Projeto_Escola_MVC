//arquivo com o caminho das rotas
 
var express = require("express");
const router = express.Router();

const professoresController = require("../controllers/professores-controller");

router.get("/", professoresController.listagem_professores);

router.get("/cadastrarProfessores", professoresController.cadastrar_professores_get);

router.post("/cadastrarProfessores", professoresController.cadastrar_professores_post);

router.get("/deletarProfessores/:id", professoresController.deletar_professores);

router.get("/editarProfessores/:id", professoresController.editar_professores_get);

router.post("/editarProfessores", professoresController.editar_professores_post);

router.get("/pesquisar", professoresController.pesquisar_professores_get);




//exportar minhas rotas
module.exports = router;