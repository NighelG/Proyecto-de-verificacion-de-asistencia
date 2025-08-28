// GET
async function getEstudiantes() {
    try {
        const response = await fetch('http://localhost:3001/juegos',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
            const juego = await response.json()
            return juego
    } catch (error) {
        console.error("Error relacionado al Juego",error);
        throw error
    }
}
export{getJuegos}
//POST
async function postestudiantes(juegos) {
    try {
        const response = await fetch('http://localhost:3001/juegos',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(juegos)
        })
            const juegoData = await response.json()
            return juegoData
    } catch (error) {
        console.error("Error relacionado a la Publicacion",error);
        throw error
    }
}
export{postJuegos}
