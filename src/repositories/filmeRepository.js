import fs from "fs/promises";
import path from "path";

const caminhoArquivoFilmes = path.resolve("src/data/filmes.json");

export async function listar() {
	const dados = await fs.readFile(caminhoArquivoFilmes, "utf-8");
	return JSON.parse(dados);
}

export async function cadastrar(filme) {
	const filmes = await listar();
	filmes.push(filme);

	await fs.writeFile(caminhoArquivoFilmes, JSON.stringify(filmes, null, 2));
	return filme;
}

export async function deletarFilme(id) {
	const filmes = await listar();
	const filme = filmes.find(filme => filme.id === id);
	if (!filme){
		return null;
	}

	const novalista = filmes.filter(filme => filme.id !== id);

	await fs.writeFile(caminhoArquivoFilmes, JSON.stringify(novalista, null, 2));
	return filme;
}
