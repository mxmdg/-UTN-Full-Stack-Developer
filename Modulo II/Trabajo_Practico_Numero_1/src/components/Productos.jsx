import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'

function Productos(item){

    const [useCompra , setCompra] = useState(false)
    const [useCantidad , setCantidad] = useState(0)
    const [useMessage , setMessage] = useState('')
    const [useStock , setStock] = useState(item.Stock - useCantidad)

    const logs = ()=> {
        console.log(`_________________________________`)
        console.log(`Cantidad: ${useCantidad}`)
        console.log(`Sotck: ${useStock} / item Stokc: ${item.Stock}`)
        console.log(`Compra: ${useCompra}`)
        console.log(`Mensaje: ${useMessage}`)
        console.log(`_________________________________`)
    }

    const buyHandler = (e) =>{
        e.preventDefault()
        if ((useStock - useCantidad) >= 0 && useCantidad > 0) {
            setCantidad(e.target.value)
            setCompra(true)
            setStock(useStock - useCantidad)
            setMessage(`Gracias por comprar ${useCantidad} ${item.Unidad} de ${item.Nombre}. Total: $${item.Precio * useCantidad}.-`)
        } else {
            setCompra(true)
            setMessage('Lo sentimos mucho, no podemos ofrecer esa cantidad')
        }
    }

    const qtyHandler = (e) => {
            setCantidad(e.target.value)
    }

    const backHandler = () => {
        setCompra(false)
        setMessage('')
    }

    return (<div className="Productos" id={item.Key} >
                <div>
                    <h3>{item.Nombre}</h3>
                </div>
                <div className="imgContainer">
                    <img src={item.Ruta} alt={item.Nombre}/>
                    <Link id='ProductosDetalle' to={`/productosML/${item.SKU}`}>Ver detalle</Link>
                </div>
                <div>
                    <h4>{item.Descripcion}</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>Precio:</th>
                                <td>$ {item.Precio}/{item.Unidad}.</td>
                            </tr>
                            <tr>
                                <th>SKU:</th>
                                <td>{item.SKU}</td>
                            </tr>
                            <tr>
                                <th>Stock:</th>
                                <td>{useStock} {item.Unidad}</td>
                            </tr> 
                        </tbody> 
                    </table>
                </div>
            <div className="compra">
                
                {useCompra ? (
                    <div className="message">
                        <h5>{useMessage}</h5>
                    <div>
                        <button id="back" onClick={backHandler}>Volver</button>
                    </div>
                    </div>
                    ) : (
                        <>
                            <label htmlFor="Cantidad">Cantidad</label>
                            <input type="Number" id="Cantidad" name="Cantidad" onChange={qtyHandler}/>
                            <button id="Comprar" onClick={buyHandler}>Comprar</button>
                        </>
                    )}
            </div>
        </div>)

}

export default Productos