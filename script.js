//efeito hover
let lista = document.querySelector("ul")
lista.addEventListener("mouseover", function(){
    // ilumina ao passar o mouse
    lista.classList.add("ilumina")
    lista.classList.remove("escuro")
    // fica pouco iluminado ao tirar o mouse
    lista.addEventListener("mouseout", function () {
        lista.classList.remove("ilumina")
        lista.classList.add("escuro") 
    })
})