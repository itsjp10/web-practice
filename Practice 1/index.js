
let selectorTecnologia = document.querySelector("#tecnologia")
let posts = document.querySelectorAll(".post")

selectorTecnologia.addEventListener('change', () => {
    posts.forEach(post => {
        post.classList = "post"

    })
    posts.forEach(post => {
        let contenido = post.querySelector(".contenido").textContent
        if (contenido.includes(String(selectorTecnologia.value)) === false) post.classList.add("filtered")
        console.log(contenido)
    })
})

// let searchInput = document.querySelector("#search-input")
// searchInput.addEventListener("focus", () => {
//     console.log("Se ha hecho foco")
//     setTimeout(()=>{
//         searchInput.blur()
//         console.log("Se ha quitado foco después de 1 seg")
//     }, 1000)
// })

let searchInput = document.querySelector("#search-input")

let searchForm = document.querySelector("#searchForm")
searchForm.addEventListener("submit", (event) => { //se lee el evento submit
    event.preventDefault() //no se recarga la pagina de nuevo
    searchInput.blur() // se quita el focus del input
    console.log("value de input ", searchInput.value)
    filtrar(searchInput.value)    
})


//funcion para filtrar posts dado un palabra string
function filtrar(palabra) {
    posts.forEach(post => {
        post.classList = "post"

    })
    posts.forEach(post => {
        let contenido = post.querySelector(".contenido").textContent
        if (contenido.includes(String(palabra)) === false) post.classList.add("filtered")
        console.log(contenido)
    })
}