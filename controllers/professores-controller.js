//onde as rotas irão ser trabalhadas de fato

const profe = require("../models/professores-model");

exports.listagem_professores = (req, res) => {
    profe.find({}, (err, professor) => {
        if (err)
            return res.status(500).send("Erro ao listar professores");
        res.render("views/pages/professores", { resposta: professor });
    });
};

//rota para salvar dados no BD vindos do formulário de cadastro de Professores (get e post)
exports.cadastrar_professores_get = (req, res) => {
    res.render("views/pages/cadastrarProfessores")
};
exports.cadastrar_professores_post = (req, res) => {
    let dados = new profe();

    dados.nome = req.body.nome;
    dados.turma = req.body.turma;
    dados.turno = req.body.turno;
    dados.escola = req.body.escola;

    dados.save((err) => {
        if (err)
            return res.status(500).send("Erro ao salvar dados de cadastro");
        res.redirect("/professores")
    });
};

//rota para deletar o cadastro de professores
exports.deletar_professores = (req, res) => {
    var id = req.params.id;
    profe.deleteOne({ _id: id }, (err) => {
        if (err)
            return res.status(500).send("Erro ao deletar dados do Professor");
        res.redirect("/professores");
    });
};

//rota para editar e salvar alterações no cadastro de professores (get e post)
exports.editar_professores_get = (req, res) => {
    var id = req.params.id;
    profe.findById(id, (err, professor) => {
        if (err)
            return res.status(500).send("Erro ao editar cadastro");
        res.render("views/pages/editarCadastrarProfessores", { resposta: professor });
    });
};

exports.editar_professores_post = (req, res) => {
    var id = req.body.id;
    profe.findById({ _id: id }, (err, professor) => {
        if (err)
            return res.status(500).send("Erro ao editar cadastro");

        professor.nome = req.body.nome;
        professor.turma = req.body.turma;
        professor.turno = req.body.turno;
        professor.escola = req.body.escola;

        professor.save((err) => {
            if (err)
                return res.status(500).send("Erro ao recadastrar");
            res.redirect("/professores");
        });
    });
};

//rota para o campo de pesquisa
exports.pesquisar_professores_get = (req, res)=>{
    var busca = req.query.pesquisa;
    profe.find({$or:[{nome:busca}, {turma:busca}, {turno:busca}, {escola:busca}]}, (err, professor)=>{
        if (err)
            return res.status(500).send("Erro ao fazer a pesquisa")
        res.render("professores", {resposta: professor}); 
    });   
};

