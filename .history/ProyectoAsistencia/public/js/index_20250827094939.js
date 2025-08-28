import { postEstudiantes,getEstudiantes } from "../services/servicesUser.js";

//Invocaciones-Registro
const nombreCompleto=document.getElementById("nombreReg");
const nombreUsuario=document.getElementById("userReg");
const correoRegistro=document.getElementById("correoReg");
const passwordRegistro=document.getElementById("passwordReg");
const btnRegistro=document.getElementById("btnRegistro");
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
            
        }
        
})
async function cargarRespuesta() {
    
}

//Zona de registro fin
//https://youtu.be/2SUwOgmvzK4?list=RDCSD2J8yaMmM
//Zona de login inicio



//Zona de login fin