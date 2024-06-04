

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

// const elemento = async () => {
//     try {
//         const respuesta = await fetch(url)
//         const data = await respuesta.json()
//         const info = data.results

//         info.forEach(inf => {
//             const item = document.createElement("div")
//             item.className = "nombre"
//             item.innerHTML += `
//             <h1>${inf.name}</h1>`;
//             elcontenido.appendChild(item);
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }

proceso(url)
    .then ((info) => {
        info.results.forEach((elemento) => {
            elContenido.innerHTML += `
            <h3>${elemento.name}</h3>
            `
        })
    })