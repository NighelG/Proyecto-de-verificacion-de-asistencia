// GET
async function getEstudiantes(estudiantes) {
    try {
        const response = await fetch('http://localhost:3001/estudiantes',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
            const estudiante = await response.json()
            return estu
    } catch (error) {
        console.error("Error relacionado al Juego",error);
        throw error
    }
}
export{getJuegos}
//POST
async function postEstudiantes(estudiantes) {
    try {
        const response = await fetch('http://localhost:3001/estudiantes',{
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
