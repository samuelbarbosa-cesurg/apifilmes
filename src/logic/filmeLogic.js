import { isDataView } from "util/types";
import * as filmeRepository from "../repositories/filmeRepository.js";

export async function listarFilmes(filtros) {
	const filmes = await filmeRepository.listar();

	if(filtros && Object.keys(filtros).length > 0){
		return filmes.filter(filme => {
			for (const chave in filtros) {
				console.log(`Filtrando por ${chave}: ${filtros[chave]}`);
				if (filme[chave] === undefined || filme[chave].toString().toLowerCase() !== filtros[chave].toString().toLowerCase()) {
					return false;
				}
			}
			return true;
		});
	}

	return filmes;
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

	let titulo = filme.titulo;
	if (!titulo || titulo.trim() === '') {
		throw new Error("O título do filme é obrigatório");
	}

	let genero = filme.genero;
	if (!genero || genero.trim() === '') {
		throw new Error("O gênero do filme é obrigatório");
	}

	let ano = filme.ano;
	if (!ano || isNaN(ano) || ano.toString().length !== 4) {
		throw new Error("O ano do filme é obrigatório e deve ser um número de 4 dígitos");
	}


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

export async function deletarFilme(id) {
	return await filmeRepository.deletarFilme(id);
}
