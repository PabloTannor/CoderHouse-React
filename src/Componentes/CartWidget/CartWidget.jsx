
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoCotext";
import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {
  const imgCarrito = "/cart.svg" 
  
  const {cantidadTotal} = useContext(CarritoContext)

  return (
    <div>
        <Link to="/cart">
            <img className="carrito" src={imgCarrito} alt="carrito de compra" />
            {
              cantidadTotal > 0 && <strong className="numerito">{cantidadTotal}</strong>
            }
        </Link>
    </div>
  )
}

export default CartWidget