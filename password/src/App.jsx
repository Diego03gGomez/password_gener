import { useState } from 'react'

import PalabraGenerada from './assets/components/PalabraGenerada'


import Generador from './assets/components/Generador';


import './App.css'

function App() {
  

let cambiarmodo = () => {
  
let body = document.querySelector("body");
let boton = document.querySelector(".btn_copiar");
let cont_contra = document.querySelector(".cont_contraseña");


cont_contra.classList.toggle("border_blanco")




body.classList.toggle("dark_mode")

boton.classList.toggle("violeta")



}


















  



  return (
    <>
   
<header>

<div className="cont_header">
<h3><i class="fa-solid fa-lock"></i> Password<span>Generator</span>  </h3>
<nav>
<a href='#' >Iniciar sesion</a>
<a href='#' onClick={cambiarmodo} ><i class="fa-solid fa-circle-half-stroke"></i> Dark/Light Mode</a>
<a target='blank' href='https://github.com/Diego03gGomez/password_gener' >Repositorio <i class="fa-brands fa-github"></i></a>
</nav>
</div>




</header>


<div id="fondo_titulo">
<div className="titulo">
<h1>Generador de contraseñas aleatorias</h1>
<h4>Cree contraseñas fuertes y seguras para mantener su cuenta segura en linea</h4>


</div>


</div>



  

<Generador></Generador>


    </>
  )
}

export default App
