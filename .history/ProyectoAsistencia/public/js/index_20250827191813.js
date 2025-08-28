
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
            const respuestaA=document.createElement("h2");
            respuestaA.textContent="Por favor, llenar todos los espacios para continuar";
            respuestaA.style.color="red";
            registroEspacio.appendChild(respuestaA);
            return;
        }
        else{
            const respuestaB=document.createElement("h2");
            respuestaB.textContent="Registro completo";
            respuestaB.style.color="green";
            registroEspacio.appendChild(respuestaB);
        }
    const confirmarRespuesta = await postEstudiantes(estudianteInfo);
    console.log(confirmarRespuesta);
})

//Zona de registro fin

//https://youtu.be/2SUwOgmvzK4?list=RDCSD2J8yaMmM

//Zona de login inicio
btnLogin.addEventListener("click", async function () {
    const usuarioLogin={
        user:inputUsuario.value,
        password:inputPassword.value
    }
    const estudiantes=await getEstudiantes();

    const estudianteEncontrado=await get
})


//Zona de login fin
