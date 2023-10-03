import { useState } from 'react'

import PalabraGenerada from './assets/components/PalabraGenerada'


import Generador from './assets/components/Generador';


import './App.css'

function App() {
  

const [valorrange, setvalorrange] = useState(0);






/*FUNCION PARA CAPTURAR VALOR DEL INPUT AL H1*/

let valinput = () => {

  let range = document.querySelector(".input").value;
  setvalorrange(range);
  console.log(range)
}









const [ischecked1, setischecked1] = useState(false)
const [ischecked2, setischecked2] = useState(false)
const [ischecked3, setischecked3] = useState(false)
const [ischecked4, setischecked4] = useState(true)


let handle1 = () => {
setischecked1(!ischecked1);

if(ischecked1){
  
 
} else{

}

}
let handle2 = () => {
  setischecked2(!ischecked2);
  
  if(ischecked2){
    
  } else{
  
  }
  
  }




  let handle3 = () => {
    setischecked3(!ischecked3);
    
    if(ischecked3){
      
      
    } else{
    
    }
    
    }



    let handle4 = () => {
      setischecked4(!ischecked4);
      
      if(ischecked4){
        
       
      } else{
      
      }
      
      }



  return (
    <>
   
<header>

<div className="cont_header">
<h3><i class="fa-solid fa-lock"></i> Password<span>Generator</span>  </h3>


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
