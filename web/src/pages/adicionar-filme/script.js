var inputs = document.querySelectorAll(".input")
var spans = document.querySelectorAll(".errorSpan")
var botaoConfimar = document.querySelector("#confirmar")

function setErro(i) {
    inputs[i].style.border = "2px solid red"
    spans[i].removeAttribute("hidden")
}

function removeErro(i) {
    inputs[i].style.border = "none"
    spans[i].setAttribute("hidden", "")
}

function validarNome() {
    if (inputs[0].value.length < 1){
        setErro(0)
        return false
    }
    else {
        removeErro(0)
        return true
    }
}

function validarDiretor() {
    if (inputs[1].value.length < 3) {
        setErro(1)
        return false
    }
    else {
        removeErro(1)
        return true
    }
}

function validarEditora() {
    if (inputs[2].value.length < 3) {
        setErro(2)
        return false
    }
    else {
        removeErro(2)
        return true
    }
}

function validarLancamento() {
    if (inputs[3].value.length < 3) {
        setErro(3)
        return false
    }
    else {
        removeErro(3)
        return true
    }
}

function validarGenero() {
    if (inputs[4].value.length < 3) {
        setErro(4)
        return false
    }
    else {
        removeErro(4)
        return true
    }
}

function validarDuracao() {
    if (inputs[5].value.length < 1) {
        setErro(5)
        return false
    }
    else {
        removeErro(5)
        return true
    }
}

function telaDeLoading(texto) {
    var main = document.querySelector(".main")
    var span = document.createElement("p")

    span.id = "loading"    
    span.innerHTML = texto

    main.innerHTML = ""
    main.appendChild(span)
}

function telaDeResposta(texto, imagemURL) {
    var main = document.querySelector(".main")
    var div = document.createElement("div")
    var imagem = document.createElement("img")
    var botao = document.createElement("button")
    var p = document.createElement("p")
    
    imagem.setAttribute("src", imagemURL)
    imagem.setAttribute("alt", "LogoDeResposta")

    botao.innerHTML = "Voltar"
    botao.addEventListener("click", () => {
        location.href = "../lista-de-filmes/index.html"
    })

    p.innerHTML = texto

    div.id = "divResposta"
    div.appendChild(imagem)
    div.appendChild(p)
    div.appendChild(botao)

    main.innerHTML = ""
    main.appendChild(div)
}

const FILME = {
    id: "",
    nome: "",
    diretor: "",
    editora: "",
    lancamento: "",
    genero: "",
    duracao: "",
}

function adicionarFilme() {

    if(validarNome() && validarDiretor() && validarEditora() && validarLancamento() && validarGenero() && validarDuracao()) {     
        telaDeLoading("Processando...")

        FILME.nome = inputs[0].value
        FILME.diretor = inputs[1].value
        FILME.editora = inputs[2].value
        FILME.lancamento = inputs[3].value
        FILME.genero = inputs[4].value
        FILME.duracao = inputs[5].value
        
        axios.post("http://localhost:3333/filmes", FILME).then(() => {
            telaDeResposta("Item adicionado com sucesso!", "../../assets/logo_accept.png")
        }).catch((err) => {
            telaDeResposta("Erro ao adicionar item<br/>" + err, "../../assets/logo_error.png")
        })
    }
    else {
        console.log("FORM INVALIDO")
    }
}
