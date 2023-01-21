const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id")

axios.get(`http://localhost:3333/filmes/${id}`).then((response) => {
    var div = window.document.querySelector(".dados")
    var dadosDoFilme = div.children
    
    dadosDoFilme[0].innerHTML += response.data.nome
    dadosDoFilme[1].innerHTML += response.data.diretor
    dadosDoFilme[2].innerHTML += response.data.editora
    dadosDoFilme[3].innerHTML += response.data.lancamento
    dadosDoFilme[4].innerHTML += response.data.genero
    dadosDoFilme[5].innerHTML += response.data.duracao
}).catch((err) => {
    console.error("DEU ERRO: " + err)
})

function ativarModal() {
    document.querySelector(".deleteModal").style.display = "block"
}

function desativarModal() {
    document.querySelector(".deleteModal").style.display = "none"
}

function deletarFilme() {
    axios.delete(`http://localhost:3333/filmes/${id}`)
        .then(() => {
            console.log("Sucesso!")
            location.href = "../lista-de-filmes/index.html"
        })
        .catch((err) => {
            console.error("DEU ERRO: " + err)
            var span = document.querySelector("#requestError")
            span.innerText = "ERRO: " + err
        })
}

function editarFilme() {
    location.href = `../editar-filme/index.html?id=${id}`
}