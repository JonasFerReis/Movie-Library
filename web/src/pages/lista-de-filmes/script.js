var listaDeFilmes = document.querySelector(".listaDeFilmes")
var dados = []

function criarElemento(filme) {
    var p = document.createElement("p")
    p.innerHTML = filme.nome
    p.addEventListener("click", () => {
        location.href = `../dados-do-filme/index.html?id=${filme.id}`
    })
    listaDeFilmes.appendChild(p)
}

function buscar() {
    var campoBuscar = document.querySelector(".campoBuscar").children[0].value
    var filter = dados.filter((filme) => filme.nome.startsWith(campoBuscar))

    listaDeFilmes.innerHTML = ""
    filter.map((filme) => criarElemento(filme))
}

axios.get(`http://localhost:3333/filmes`)
    .then((res) => {
        listaDeFilmes.innerHTML = ""

        if (res.data.length > 0) {
            res.data.map((filme) => criarElemento(filme))
            dados = res.data
        }
        else {
            var listaVazia = document.createElement("span")
            listaVazia.innerHTML = "Nenhum filme cadastrado"
            listaDeFilmes.appendChild(listaVazia)
        }
    })
    .catch((err) => {
        listaDeFilmes.innerHTML = ""

        var erro = document.createElement("span")
        erro.innerHTML = "ERRO: " + err
        listaDeFilmes.appendChild(erro)
    })