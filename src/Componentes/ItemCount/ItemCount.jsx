import { useState } from "react"
import "../ItemCount/ItemCount.css"

 export const ItemCount = ({inicial,stock,funcionAgregar}) => {

   const [contador,setContador] = useState(inicial); 

   const sumarContador = () => {
      if(contador<stock){
        setContador(contador+1)
      }
  
        
   }
   
   const restarContador = () =>{
      if(contador > inicial){
        setContador(contador-1)  
      }
    
   }

  return (
    <>
      <div className="botonera">
        <button className="btn-botonera" onClick={restarContador}>-</button>
        <p className="btn-contador">{contador}</p>
        <button className="btn-botonera" onClick={sumarContador}>+</button>

        <button className="btn-botonera" onClick={()=> funcionAgregar(contador)}>Agregar al Carrito</button>
      </div>
    </>
  )
}

