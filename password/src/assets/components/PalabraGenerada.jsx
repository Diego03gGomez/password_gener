import React from 'react';





const PalabraGenerada = (props) => {






/*FUNCION PARA PASAR LA LONGTUD AL ELEMENTO*/
let generar_palabra_Aleatoria = (longitud) => {

  /*  let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';*/
 /* let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'*/
 let caracteres = ''

if(props.chk1){
  caracteres += "abcdefghijklmnopqrstuvwxyz"
}


if(props.chk2){
  caracteres+= "0123456789";   
}

if(props.chk3){
  caracteres +="!@#$%^&*()_-+=<>?"
}


if(props.chk4){
  caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}










    let palabra_aleatoria = '';
    
    for (let i = 0; i < longitud; i++) {
      const indice_aleatorio = Math.floor(Math.random() * caracteres.length);
      palabra_aleatoria += caracteres.charAt(indice_aleatorio); 
    }


   
    return palabra_aleatoria;
  
    
    }


let copiar_portapapeles = () => {
    let elemento = document.querySelector(".palabra_copiar");
    let textoacopiar = elemento.textContent;

   
    navigator.clipboard.writeText(textoacopiar)
    .then(() =>{
    alert ("Texto Copiado:" + textoacopiar)

   
    
})
    .catch(error=> console.error("Error al copiar", error));
}









    return (
        <div>
<div className="fondofondo">
<div className="fondo_oscuro">
  <div className="cont_fondo">
<div className="cont_tilde">
  <i class="fa-solid fa-circle-check icono"></i>
</div>
<h1>Contraseña Copiada</h1>


  </div>
</div>


</div>


<div className="cont_contraseña border_blanco">

<div className="palabra_generada">

<h4 className='palabra_copiar' >{generar_palabra_Aleatoria(props.longitud)}</h4>

</div>

<div className="cont_boton_copiar">
<button className='btn_copiar violeta'  onClick={copiar_portapapeles}  >Copiar <i class="fa-regular fa-copy"></i></button>
            

</div>

</div>













        </div>
    );
}

export default PalabraGenerada;
