import { useState, useEffect, useContext } from "react"
import { CarritoContext } from "../../context/CarritoCotext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

export const Chekout = () => {

    const {carrito,vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [ordenId, SetOrdenId] = useState("")
    const [error,setError] = useState("")

    const manejadorSubmit = (e) => {
        e.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor, completa todos los campos");
            return;
        }

        if(email !== emailConfirmacion){
            setError("Los emails no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.titulo,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email

        }

        addDoc(collection(db,"ordenes"),orden)
            .then(docRef =>{
                SetOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error =>{
                console.log("error al crear la orden ", error)
                setError("No se pudo crear la orden!")
            })
    }

  return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={manejadorSubmit}>
            {
                carrito.map(producto =>{
                    <div key={producto.item.id}>
                        <p>{producto.item.titulo} x {producto.cantidad}</p>
                        <p> Precio: $ {producto.item.precio}</p>
                        <hr />
                    </div>
                })
            }
            <hr />

            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e) => setApellido(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e) => setTelefono(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Email confirmación</label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>

            {
                error && <p> {error} </p>
            }

            <button type="submit"> Finalizar Orden </button>

            {
                ordenId && (
                    <strong>Gracias por su compra!. Su número de orden es: {ordenId}</strong>
                )
            }
            
        </form>
    </div>
  )
}
