var listaDeFilmes = document.querySelector(".listaDeFilmes")
var p1 = document.querySelector("#carregando")

axios.get("http://localhost:3333/filmes").then((response) => {
    listaDeFilmes.removeChild(p1)

    if (response.data.length > 0) {
        for (var i in response.data) {
            var filme = document.createElement("p")
            filme.innerHTML = response.data[i].nome
            listaDeFilmes.appendChild(filme)
        }
    }
    else {
        var listaVazia = document.createElement("p")
        listaVazia.innerHTML = "Nenhum filme cadastrado"
        listaDeFilmes.appendChild(listaVazia)
    }

}).catch((err) => {
    listaDeFilmes.removeChild(p1)

    var erro = document.createElement("p")
    erro.innerHTML = "ERRO: " + err
    listaDeFilmes.appendChild(erro)
})



