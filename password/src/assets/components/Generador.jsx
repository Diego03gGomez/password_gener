import React, { useEffect, useState } from 'react'
import PalabraGenerada from './PalabraGenerada';



import Imagen from './Imagen';





import ContraInsegura from './Contra_insegura';




export default function Generador() {
    
const [valorrange, setvalorrange] = useState(50);


const handlerange = (event) => {
  let newValue = event.target.value;
  if (newValue <= 0) {
    newValue = 1; // Evita que el valor sea menor o igual a 0
  }
  setvalorrange(newValue);
};







/*FUNCION PARA CAPTURAR VALOR DEL INPUT AL H1*/

let valinput = () => {

  let range = document.querySelector(".input").value;
  setvalorrange(range);
  console.log(range)
}




/*FUNCION PARA PASAR LA LONGTUD AL ELEMENTO*/
let generar_palabra_Aleatoria = (longitud) => {

let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let palabra_aleatoria = '';

for (let i = 0; i < longitud; i++) {
  const indice_aleatorio = Math.floor(Math.random() * caracteres.length);
  palabra_aleatoria += caracteres.charAt(indice_aleatorio); 
}

return palabra_aleatoria;


}





const [ischecked1, setischecked1] = useState(false)
const [ischecked2, setischecked2] = useState(false)
const [ischecked3, setischecked3] = useState(false)
const [ischecked4, setischecked4] = useState(true)




useEffect(() => {
 
if(ischecked1 == false && ischecked2 == false && ischecked3 == false && ischecked4 == false){
  setischecked4(true);
}

}, [ischecked1, ischecked2, ischecked3, ischecked4])









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

<div className="container  cont_todo ">


<div className="row">
  
        
<Imagen  longitud2={valorrange}  ></Imagen>
        

<div className=" col-lg-6  cont_opciones">
<PalabraGenerada longitud={valorrange} chk1={ischecked1} chk2={ischecked2} chk3={ischecked3} chk4={ischecked4} ></PalabraGenerada>
<ContraInsegura  long={valorrange}  ></ContraInsegura>




<div className="cont_longitud">
    <h4>Longitud de la contraseña: {valorrange}</h4>
    <input onChange={handlerange} className=' form-range  input'  type="range" name="" id="" />
 
</div>


<div className="cont_checks">

<div className="cont_des_checks">

  <h4>Caracteres usados:</h4>
</div>


<div className="checks">

<input className='form-check-input chk1 '  type="checkbox" checked={ischecked1} onChange={handle1} /> <label htmlFor="">abc</label>
    <input className='form-check-input chk2'  type="checkbox" checked={ischecked2} onChange={handle2} /> <label htmlFor="">123</label>
    <input className='form-check-input chk3'  type="checkbox" checked={ischecked3} onChange={handle3} /> <label htmlFor="">#$&</label>
    <input className='form-check-input chk4'  type="checkbox" checked={ischecked4} onChange={handle4} /> <label htmlFor="">ABC</label>
</div>

</div>





</div>



</div>

</div>



    



   {/* <h1>{generar_palabra_Aleatoria(valorrange)}</h1>*/}
    
 
  










    </>
  )
}
