import { useState , useEffect } from 'react'
import Productos from '../components/Productos'
import ErrorMessage from '../components/ErrorMessage'
import SearchInput from './SearchInput'
import '../styles/index.css'



const GetProductosML = (props)=> {
    const [useLoading, setLoading] = useState(true)
    const [useProductos,setProductos] = useState([])
    const [useSearch, setSearch] = useState('')
    const [useErrorMessage, setErrorMessage] = useState('')
    
   useEffect(()=>{
        const queryML = async ()=>{
            if (props.search) {
                setSearch(props.search)
            } else {
                console.log(useSearch)
            }
            try {
                const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + (useSearch)).then(res=>res.json())
                setProductos(res.results)
                setLoading(false)

            } catch(e) {
                setErrorMessage(e)
            }
        }
        queryML(useSearch)
   },[useSearch, useLoading])

   const onChangeHandler = (e)=>{
        e.preventDefault(e)
        try {
            if (e.target.value !== '') {
                setLoading(true)
                setSearch(e.target.value)
            } else {
                setErrorMessage('Ingrese su busqueda en el campo correspondiente')
            }
        } catch (e) {
            setErrorMessage(e)
        }
   }

    if (useLoading) {
        return (<div className='nodal'>
                        <div className='message'>
                        <h5>Cargando...</h5>
                        </div>
                </div>)
    } else if (useErrorMessage !== '') {
        return <ErrorMessage message={useErrorMessage} deleteMessage={setErrorMessage}/>
    } else {
        return <>
            <div className='Footer'>
                <SearchInput onBlur={onChangeHandler} placeholder={(useSearch === '')?'Buscar':useSearch}/>
            </div>
            <div className='mainContainer'>
                {useProductos.map((fruta) => (<Productos
                        Nombre={fruta.seller.nickname}
                        Precio={fruta.price}
                        Descripcion={fruta.title}
                        Unidad={fruta.currency_id}
                        SKU={fruta.id}
                        Stock={fruta.available_quantity}
                        key={fruta.id}
                        Ruta={fruta.thumbnail}
                        permalink={fruta.permalink}
                    />))}
            </div>   
                
            </>
    } 
}

export default GetProductosML