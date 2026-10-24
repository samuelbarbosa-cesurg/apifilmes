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