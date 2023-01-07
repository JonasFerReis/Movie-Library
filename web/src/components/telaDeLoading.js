function telaDeLoading(texto) {
    var main = document.querySelector(".main")
    var span = document.createElement("p")

    span.id = "loading"    
    span.innerHTML = texto

    // Css
    span.style.textAlign = "center"
    span.style.paddingTop = "5em"
    span.style.fontWeight = "600"
    span.style.fontSize = "15pt"
    span.style.color = "#fff"

    main.innerHTML = ""
    main.appendChild(span)
}