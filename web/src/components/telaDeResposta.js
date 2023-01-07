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

    // Css
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.textAlign = "center"
    div.style.alignItems = "center"
    div.style.gap = "3em"
    div.style.position = "relative"
    div.style.top = "20%"

    p.style.fontWeight = "600"
    p.style.fontSize = "15pt"
    p.style.color = "#fff"

    imagem.style.width = "6em"

    botao.style.width = "12vw"
    botao.style.height = "2em"
    botao.style.border = "none"
    botao.style.borderRadius = "6px"
    botao.style.color = "#fff"
    botao.style.backgroundColor = "rgba(0, 200, 0, 0.6)"

    botao.addEventListener("mouseenter", () => {
        botao.style.backgroundColor = "rgba(0, 220, 0, 1)"
    })

    botao.addEventListener("mouseleave", () => {
        botao.style.backgroundColor = "rgba(0, 200, 0, 0.6)"
    })

    main.innerHTML = ""
    main.appendChild(div)
}