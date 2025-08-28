
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
        //respuesta negativa
        if(!estudianteInfo.completeName||!estudianteInfo.userName||!estudianteInfo.email||!estudianteInfo.passwordRegister){
            const respuestaB=document.createElement("h2");
            respuestaB.textContent="Por favor, llenar todos los espacios para continuar";
            respuestaB.style.color="red";
            registroEspacio.appendChild(respuestaB);
            return;
        }else{
            //Respuesta Positiva
async function cargarRespuesta() {
    const respuestaA=document.createElement("h2");
    registroEspacio.innerHTML="";
    for(let index = 0;index < estudiantes.length; index++)
    respuestaA.textContent="Registrado correctamente"
    respuestaA.style.color="grenn"
    registroEspacio.appendChild(respuestaA)
}
        }
    const confirmarRespuesta = await postEstudiantes(estudianteInfo);
    console.log(confirmarRespuesta);
    await cargarRespuesta();
})



//Zona de registro fin

//https://youtu.be/2SUwOgmvzK4?list=RDCSD2J8yaMmM

//Zona de login inicio



//Zona de login fin
cargarRespuesta();