import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoCotext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "../Cart/Cart.css"


const Cart = () => {

    const {carrito,vaciarCarrito,total,cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0){
        return(
            <>
                <h2>No hay productos en el carrito.</h2>
                <Link to="/">Ver Productos</Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
        }
        <h3>Total: $ {total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button className="btn-vaciar" onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
        <Link className="btn-finalizar" to="/checkout">Finalizar Compra</Link>
    </div>
  )
}

export default Cart