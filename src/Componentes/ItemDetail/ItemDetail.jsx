import { useState, useContext } from 'react'
import  {ItemCount} from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoCotext'
import './ItemDetail.css'

const ItemDetail = ({id,titulo,imagen,precio,stock}) => {

  const [agregarCantidad,setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad)

    const item = {id,titulo,precio};
    agregarAlCarrito(item,cantidad)
  }

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {titulo}</h2>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente accusamus magni ratione aut blanditiis error amet voluptate quibusdam. Reiciendis, blanditiis sint maiores atque ipsa necessitatibus eveniet fuga cum ullam?</p>
        <p>Stock:{stock}</p>
        <img src={imagen} alt={titulo} />
        {
          agregarCantidad > 0 ? (<Link className="terminar" to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail