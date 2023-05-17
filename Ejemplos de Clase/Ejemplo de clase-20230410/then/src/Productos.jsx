import { useEffect, useState } from "react";
import Producto from "./Producto";

function Productos(){

  const [loading,setLoading] = useState(true)
  const [productos,setProductos] = useState([])
  const [titulo,setTitulo] = useState('Listado de productos')

  useEffect(
    ()=>{
      //Vamos a buscar los productos a ML
      fetch("https://api.mercadolibre.com/sites1/MLA/search?q=ipod")
      .then(res=>res.json())
      .then(response=>console.log(response))
      .catch(e=>console.log(e))
      // .catch(funciton(e){
      //   console.log(e)
      // })
      setProductos([
        { id: 1, nombre: "Moto G", precio: "$1000", categoria: "Celulares" },
        { id: 2, nombre: "Moto Z", precio: "$2000", categoria: "Celulares" },
        { id: 3, nombre: "iPhone 13", precio: "$3000", categoria: "Celulares" },
        { id: 4, nombre: "iPhone 14", precio: "$4000", categoria: "Celulares" },
        { id: 5, nombre: "iPhone 12", precio: "$4000", categoria: "Celulares" },
      ])
      setLoading(false)
    },
    []
  )
  
  const handleClick = ()=>{
    setTitulo("Listado productos filtrado")
    setProductos([
      { id: 1, nombre: "Samsung", precio: "$1000", categoria: "Celulares" },
      { id: 2, nombre: "Samsung 2", precio: "$2000", categoria: "Celulares" },
    ])
  }
  
  if(loading){
    return(
      <div>Cargando...</div>
    )
  }else{
    return (
      <div>
          <h1>{titulo}</h1>
          {productos.map((producto) => 
            <Producto
              nombre={producto.nombre}
              precio={producto.precio}
              categoria={producto.categoria}
            />
          )}
          <button onClick={handleClick}>Filtrar</button>
      </div>
    );
  }
  
}

export default Productos;
