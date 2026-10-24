import * as filmeRepository from "../repositories/filmeRepository.js";
export function listarFilmes() {
	return filmeRepository.listar();
}

export async function buscarFilme(id) {
	const idFiltrado = Number(id);
	const filmes = await filmeRepository.listar();
	
	if (!isNaN(idFiltrado)) {
		const filmeFiltrado = filmes.find((filme) => filme.id === idFiltrado)
		return filmeFiltrado
	}

	return null;
}

export async function cadastrarFilme(filme) {
	const filmes = await filmeRepository.listar();
	const novoId = filmes.length > 0 ? Math.max(...filmes.map(f => f.id)) + 1 : 1;
	
	const novoFilme = { 
		id: novoId,
		titulo: filme.titulo,
		genero: filme.genero,
		ano: filme.ano
	};

	return await filmeRepository.cadastrar(novoFilme);
}
