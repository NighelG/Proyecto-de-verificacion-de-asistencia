
import { postEstudiantes,getEstudiantes } from "../services/servicesUser.js";

//Invocaciones-Registro
const nombreCompleto=document.getElementById("nombreReg");
const nombreUsuario=document.getElementById("userReg");
const correoRegistro=document.getElementById("correoReg");
const passwordRegistro=document.getElementById("passwordReg");
const btnRegistro=document.getElementById("btnRegistro");
const registroEspacio=document.getElementById("registroEspacio")
//Invocaciones-Login
const inputUsuario=document.getElementById("user");
const inputPassword=document.getElementById("password");
const btnLogin=document.getElementById("btnLogin");

//Zona de registro inicio
btnRegistro.addEventListener("click", async function () {
    const estudianteInfo={
        completeName: nombreCompleto.value,
        userName: nombreUsuario.value,
        email: correoRegistro.value,
        passwordRegister: passwordRegistro.value,
    }
        if(!estudianteInfo.completeName||!estudianteInfo.userName||!estudianteInfo.email||!estudianteInfo.passwordRegister){
            const respuestaB=document.createElement("div")
            respuestaB.textContent="Por favor, llenar todos los espacios para crear un usario"
            re
        }
    const confirmarRespuesta = await postEstudiantes(estudianteInfo);
    console.log(confirmarRespuesta);
    await cargarRespuesta();
})

//Respuesta Positiva
async function cargarRespuesta() {
    const estudiantes = await getEstudiantes();
    registroEspacio.innerHTML="";
    for(let index = 0;index < estudiantes.length; index++){
        let estudiante = estudiantes[index];
        let respuestaA= document.createElement("h2");
        respuestaA.textContent="Registro completado, por favor vuelve e inicia sesion";
        registroEspacio.appendChild(respuestaA)
    }
}

//Zona de registro fin

//https://youtu.be/2SUwOgmvzK4?list=RDCSD2J8yaMmM

//Zona de login inicio



//Zona de login fin
cargarRespuesta();