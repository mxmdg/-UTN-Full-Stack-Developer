import { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../styles/index.css'
import ErrorMessage from '../components/ErrorMessage'
import LightGallery from './LightGallery'



const GetProductoDetalleML = (props)=> {
    const [useLoading, setLoading] = useState(true)
    const [useProducto,setProducto] = useState([])
    const [useDescription, setDescription] = useState('')
    const [useImages, setImages] = useState([])
    const { id } = useParams()
    const [useMessage , setMessage] = useState('')

   useEffect(()=>{

        const queryML = async (id)=>{
            try {
                const res = await fetch("https://api.mercadolibre.com/items/" + id).then(res=>res.json())
                const desc = await fetch("https://api.mercadolibre.com/items/" + id + "/description").then(desc=>desc.json())
                if (res.error) {
                    setMessage('404 - ' + res.error)
                    setLoading(false)
                } else {
                    setProducto(res)
                    setDescription(desc.plain_text)
                    setLoading(false)
                    setImages(res.pictures)
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
        return <div  className='mainContainer'>
                    <div>
                       <h5>{useProducto.title}</h5>
                       <div className='compra'>
                            <h4>{useProducto.currency_id} {useProducto.price}</h4>
                            <a href={useProducto.permalink}><button>Comprar</button></a>
                       </div>               
                    </div>
                    <div className='images'>
                        <LightGallery images={useImages}/>
                    </div>
                    <div>
                        <h4>Descripcion</h4>
                        <p>{useDescription}</p>
                    </div>
                </div>
    } 
}

export default GetProductoDetalleML