// GET
async function getEstudiantes() {
    try {
        const response = await fetch('http://localhost:3001/estudiantes',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
            const estudiante = await response.json()
            return estudiante
    } catch (error) {
        console.error("Error relacionado al Juego",error);
        throw error
    }
}
export{getEstudiantes}
//POST
async function postEstudiantes(estudiantes) {
    try {
        const response = await fetch('http://localhost:3001/estudiantes',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(estudiantes)
        })
            const estudianteData = await response.json()
            return estudianteData
    } catch (error) {
        console.error("Error relacionado a la Publicacion",error);
        throw error
    }
}
export{postEstudiantes}
