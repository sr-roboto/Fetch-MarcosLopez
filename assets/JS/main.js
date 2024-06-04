const elContenido = document.getElementById('container')
const url = "https://rickandmortyapi.com/api/character"

const proceso = async (link) => {
    try {
        const respuesta = await fetch(link)
        const info = await respuesta.json()
        return info
    } catch (error) {
        console.log("Hubo un error")
    }
}
proceso(url)
    .then((info) => {
        info.results.forEach((elemento) => {
            const items = document.createElement("div")
            items.className = "personaje m-3 border rounded border-4 border-dark bg-dark shadow-lg"
            items.innerHTML += `
            <img src="${elemento.image}" alt="${elemento.name}" class="rounded">
            <h3 class="text-white fs-4 text-center">${elemento.name}</h3>
            <p class="text-white">Especie: ${elemento.species}</p>
            <p class="text-white">Sexo: ${elemento.gender}</p>
            <p class="text-white">Origen: ${elemento.origin.name}</p>
            <p class="text-white">Locación: ${elemento.location.name}</p>
            `
            elContenido.appendChild(items)
        })
    })