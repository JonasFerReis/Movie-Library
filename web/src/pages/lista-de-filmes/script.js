var listaDeFilmes = document.querySelector(".listaDeFilmes")
var p1 = document.querySelector("#carregando")

axios.get("http://localhost:3333/filmes").then((response) => {
    listaDeFilmes.removeChild(p1)

    if (response.data.length > 0) {
        response.data.map((filme) => {
            var p2 = document.createElement("p")
            p2.innerHTML = filme.nome
            p2.addEventListener("click", () => {
                location.href = `../dados-do-filme/index.html?id=${filme.id}`
            })
            listaDeFilmes.appendChild(p2)
        })
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



