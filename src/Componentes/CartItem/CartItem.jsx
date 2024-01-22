import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoCotext";
import "../CartItem/CartItem.css"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div className="contenedor">
        <div>
          <h4>{item.titulo}</h4>
          <hr />
          <p>Cantidad: {cantidad}</p>
          <hr />
          <p>Precio: {item.precio}</p>
        </div>
        
        <div>
          <button className="eliminar" onClick={()=>eliminarProducto(item.id)}>Eliminar Producto</button>
        </div>
    </div>
  )
}

export default CartItem