let filmes = [
	{
		"id": 1,
		"titulo": "Gato de botas",
		"genero": "Ação",
		"ano": "2000",
	},
	{
		"id": 2,
		"titulo": "Seven - Os Sete Crimes Capitais",
		"genero": "Crime",
		"ano": "1995",
	},
	{
		"id": 3,
		"titulo": "Missão impossível",
		"genero": "Ação",
		"ano": "2008",
	}
];

export async function listar() {
	return filmes;
}

export async function cadastrar(filme) {
	filmes.push(filme);
	return filme;
}
