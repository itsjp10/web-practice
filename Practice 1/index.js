
let selectorTecnologia = document.querySelector("#tecnologia")
let posts = document.querySelectorAll(".post")

selectorTecnologia.addEventListener('change', () => {
    posts.forEach(post => {
        post.classList = "post"
        
    })
    posts.forEach(post => {
        let contenido = post.querySelector(".contenido").textContent   
        if(contenido.includes(String(selectorTecnologia.value)) === false) post.classList.add("filtered")
        console.log(contenido)
    })
})

// let searchInput = document.querySelector("#search-input")
// searchInput.addEventListener("blur", () => {
//     console.log("Se ha perdido el foco pero...")
//     searchInput.focus()
// })