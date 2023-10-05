import React, { useEffect, useState } from 'react'
import img_Inseguro from '../components/inseguro.svg'
import img_Segura from '../components/segura.svg'
import img_muysegura from '../components/muysegura.svg'

export default function Imagen(props) {


const [img_ruta, setimg_ruta] = useState(null)

const [imgclass1, setimgclass1] = useState('eliminar')
const [imgclass2, setimgclass2] = useState('eliminar')
const [imgclass3, setimgclass3] = useState('eliminar')

useEffect(() => {
  
    if(props.longitud2 < 8){
        setimgclass1('');
        setimgclass2('eliminar');
        setimgclass3('eliminar');
    } else if (props.longitud2 > 11 && props.longitud2 <= 20){
        setimgclass1('eliminar');
        setimgclass2('');
        setimgclass3('eliminar')
    } else if (props.longitud2 > 20){
        setimgclass1('eliminar');
        setimgclass2('eliminar');
        setimgclass3('')
    }


  
}, [props.longitud2])











  return (
    <>



<div className="col-lg-6  cont_imagen">
    <img className={`img1 ${imgclass1}` }  src={img_Inseguro} alt="iamgen" />
    <img className={`img2 ${imgclass2}` }  src={img_Segura} alt="iamgen" />
    <img className={`img3 ${imgclass3}` }  src={img_muysegura} alt="iamgen" />
</div>

  </>
  )
}
