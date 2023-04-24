import { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../styles/index.css'
import ErrorMessage from '../components/ErrorMessage'



const GetProductoDetalleML = (props)=> {
    const [useLoading, setLoading] = useState(true)
    const [useProducto,setProducto] = useState([])
    const { id } = useParams()
    const [useMessage , setMessage] = useState('')

   useEffect(()=>{

        const queryML = async (id)=>{
            try {
                const res = await fetch("https://api.mercadolibre.com/items/" + id).then(res=>res.json())
                if (res.error) {
                    setMessage('404 - ' + res.error)
                    setLoading(false)
                } else {
                    setProducto(res)
                    setLoading(false)
                }
            } catch (e) {
                console.log(e)
            }
        }
        queryML(id)
   },[id])

    if (useLoading) {
        return (<div className='nodal'>
                    <div className='message'>
                       <h5>Cargando...</h5>
                    </div>
            </div>)
    } else if (useMessage !== '') {
        return <ErrorMessage message={useMessage} deleteMessage={setMessage}/>
    } else {
        return <>
                    <div>
                       <h4>{useProducto.title}</h4>
                       <h5>{useProducto.currency_id} {useProducto.price}</h5>
                    </div>
                    <div>

                    </div>
                    <div className='images'>
                        {useProducto.pictures.map((img)=>{
                            return (
                                <img src={img.url} alt="" />
                            )
                        })}
                    </div>
                </>
    } 
}

export default GetProductoDetalleML