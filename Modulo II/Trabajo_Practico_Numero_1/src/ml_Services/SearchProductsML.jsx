import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import Productos from '../components/Productos'
import ErrorMessage from '../components/ErrorMessage'


const SearchProductsML = ()=>{
    const param = useParams()
    const [useLoading, setLoading] = useState(true)
    const [useProductos,setProductos] = useState([])
    const [useErrorMessage, setErrorMessage] = useState('')

    console.log(param.id)

    useEffect(()=>{
        setLoading(true);
        const queryML = async (search)=>{
            try {
                const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + (search)).then(res=>res.json())
                setProductos(res.results)
                setLoading(false)
            } catch(e) {
                setErrorMessage(e)
            }
        }
        queryML(param.id)
    },[param])

    if (useLoading) {
        return (
            <div className='nodal'>
                <div className='message'>
                    <h5>Cargando...</h5>
                </div>
            </div>
        )
    } else if (useErrorMessage !== '') {
        return <ErrorMessage message={useErrorMessage} deleteMessage={setErrorMessage}/>
    } else {
        return (
            <>
                {useProductos.map((fruta) => (
                    <Productos
                        Nombre={fruta.seller.nickname}
                        Precio={fruta.price}
                        Descripcion={fruta.title}
                        Unidad={fruta.currency_id}
                        SKU={fruta.id}
                        Stock={fruta.available_quantity}
                        key={fruta.id}
                        Ruta={fruta.thumbnail}
                        permalink={fruta.permalink}
                        Origin='meLi'
                    />
                ))}
            </>
        )
    }

}

export default SearchProductsML