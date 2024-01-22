import './ItemListContainer.css';
import { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams();

  useEffect ( () => {
        const misProductos = idCategoria ? query(collection(db,"productos"), where("idCat", "==", idCategoria)) : collection(db,"productos")

        getDocs(misProductos)
          .then(res =>{
            const nuevosProductos = res.docs.map(doc =>{
              const data = doc.data();
              return {id:doc.id, ...data}
            })
            setProductos(nuevosProductos);
          })
          .catch(error => console.log(error))
  },[idCategoria])

  return (
    <div>
        <h1>Jugueteria Volver al Juguete</h1>
        <ItemList productos = {productos} />
    </div>
  )
}

export default ItemListContainer