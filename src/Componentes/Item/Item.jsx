import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id,titulo,imagen,precio}) => {
  return (
    <div className="cardProducto">
        <img src={imagen} alt={titulo} />
        <h3>Nombre: {titulo}</h3>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <Link className='btn' to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  )
}

export default Item