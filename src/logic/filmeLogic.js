import * as filmeRepository from "../repositories/filmeRepository.js";
export function listarFilmes() {
  return filmeRepository.listar();
}

export function buscarFilme(id){
  const idFiltrado = Number(id);
  const filmes = filmeRepository.listar();
  if(!isNaN(idFiltrado)){
    const filmeFiltrado = filmes.find((filme) => filme.id === idFiltrado)
    return filmeFiltrado
  }
}
