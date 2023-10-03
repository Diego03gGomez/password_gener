import React, { useEffect, useState } from 'react';

const ContraInsegura = (props) => {

const [con_inseg, setcon_inseg] = useState('');
const [botonclase, setbotonclase] = useState('')

useEffect(() => {

if(props.long == 0){
    setcon_inseg("No ingreso ninguno");
setbotonclase("rojo");

}
else if(props.long <= 3 ){
    setcon_inseg("Muy insegura")
 setbotonclase("rojo")
} else if (props.long > 3 && props.long < 11){
    setcon_inseg("Insegura")
   setbotonclase("amarillo")
} else if (props.long > 11 && props.long < 16){
    setcon_inseg("Segura")
    setbotonclase("verde")
} else if (props.long > 15){
    setcon_inseg("Muy Segura")
 setbotonclase("azul")
} 

   
    
}, [props.long]);



    return (
        <>

<div className="cont_boton">

<button className={`boton_seguro ${botonclase}`} >{con_inseg}</button>



</div>






        </>
    );
}

export default ContraInsegura;
