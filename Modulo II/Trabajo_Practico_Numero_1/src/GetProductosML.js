import { useState , useEffect} from 'react'
import Productos from './Productos'
import './index.css'



const GetProductosML = ()=> {
    const [useLoading, setLoading] = useState(true)
    const [useProductos,setProductos] = useState([])
    const [useSearch, setSearch] = useState('')

        
   useEffect(()=>{

        const queryML = async (producto)=>{
            try {
                const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + producto).then(res=>res.json())
                console.log(res.results)
                setProductos(res.results)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        queryML(useSearch)
   },[useSearch])

   const onChangeHandler = (e)=>{
        e.preventDefault(e)
        setLoading(true)
        setSearch(e.target.value)
   }

    if (useLoading) {
        return <div>Cargando...</div>
    } else {
        return <section>
            <div>
                <input className='inputSearch' type='search' onBlur={onChangeHandler} placeholder='Buscar'/>
            </div>
        {useProductos.map((fruta) => (<Productos
            Nombre={fruta.seller.nickname}
            Precio={fruta.price}
            Descripcion={fruta.title}
            Unidad={fruta.currency_id}
            SKU={fruta.id}
            Stock={fruta.available_quantity}
            Key={fruta.id}
            Ruta={fruta.thumbnail}
        />))}
        
    </section>
    } 
}

export default GetProductosML