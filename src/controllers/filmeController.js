import * as filmeLogic from "../logic/filmeLogic.js";

export async function listarFilmes(request, response) {
    try{
        const filmes = await filmeLogic.listarFilmes();

        return response.status(200).json(filmes);
    } catch (error) {
        console.error(`Erro ao listar filmes: ${error.message}`);

        return response.status(500).json({
            mensagem: "Erro interno do servidor",
        });
    }
}

export async function buscarFilme(request, response){
    try{
        const id = request.params.id;
        if(typeof id !== undefined && id.trim() !== ''){
            const filmes = await filmeLogic.buscarFilme(id);
            if(!filmes){
                return response.status(404).json({mensagem: "Filme não encontrado"})
            }
            return response.status(200).json(filmes);
        }else{
            return response.status(400).json({mensagem: "O ID é obrigatório"})
        }
    } catch (error) {
        console.error(`Erro ao listar filmes: ${error.message}`);

        return response.status(500).json({
            mensagem: "Erro interno do servidor",
        });
    }
}

export async function cadastrarFilme(request, response){
    try{
        const filme = request.body;
        
        if(filme && Object.keys(filme).length > 0){
            const novoFilme = await filmeLogic.cadastrarFilme(filme);
            return response.status(201).json(novoFilme);

        }else{
            return response.status(400).json({mensagem: "O corpo da requisição é obrigatório"})
        }
    } catch (error) {
        console.error(`Erro ao cadastrar filme: ${error.message}`);

        return response.status(500).json({
            mensagem: "Erro interno do servidor",
        });
    }
}