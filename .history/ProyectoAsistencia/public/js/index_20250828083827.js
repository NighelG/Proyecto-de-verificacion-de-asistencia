
import { getEstudiantes } from "../services/servicesUser.js";

//Invocaciones-Login
const inputUsuario=document.getElementById("user");
const inputPassword=document.getElementById("password");
const btnLogin=document.getElementById("btnLogin");
const loginEspacio=document.getElementById("loginEspacio")

//https://youtu.be/2SUwOgmvzK4?list=RDCSD2J8yaMmM

//Zona de login inicio
btnLogin.addEventListener("click", async function () {
  
    }
    const estudiantes=await getEstudiantes();  const usuarioLogin={
        user:inputUsuario.value,
        password:inputPassword.value

    const estudianteEncontrado =estudiantes.filter(student =>
        student.userName === usuarioLogin.user &&
        student.passwordRegister === usuarioLogin.password
    );
    loginEspacio.innerHTML="";
    if(!usuarioLogin.user||!usuarioLogin.password){
        loginEspacio.innerHTML="";
        const mensajeLoginA=document.createElement("h2");
        mensajeLoginA.textContent="Por favor llenar todos los campos";
        mensajeLoginA.style.color="red";
        loginEspacio.appendChild(mensajeLoginA);
        return;
    }
    if(estudianteEncontrado.length>0){
        window.location.href="paginaPrincipal.html";
    }
    else{
        loginEspacio.innerHTML="";
        const mensajeLoginB=document.createElement("h2");
        mensajeLoginB.textContent="Usuario o contraseña incorrectos";
        mensajeLoginB.style.color="red";
        loginEspacio.appendChild(mensajeLoginB);
    }
});
//Zona de login fin
