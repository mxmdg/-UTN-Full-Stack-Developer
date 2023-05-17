import Productos from "../components/Productos"
import { getProducts } from "../services/productServices"
import { useParams , Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import LoadingDiv from "../components/LoadingDiv"

function ShowProducts(){
    const [ FrutasList , setFrutasList ] = useState([])
    const [useLoading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(()=>{
        
        (async ()=> {
            try {
                const querySnapShot = await getProducts(id)
                setFrutasList(querySnapShot.docs)
                setLoading(false)
            } catch(e){
                console.log(e)
            }
        })()
        
    }, [FrutasList])

    const render = (
                    <>
                        {FrutasList.map((fruta) => (
                            <Productos
                            Nombre={fruta.data().Nombre}
                            Precio={fruta.data().Precio}
                            Descripcion={fruta.data().Descripcion}
                            Unidad={fruta.data().Unidad}
                            SKU={fruta.id}
                            Stock={fruta.data().Stock}
                            key={fruta.id}
                            Ruta={fruta.data().Ruta}
                            Origin='firebase'
                        />))}
                        
                    </>
    )

    return (useLoading?<LoadingDiv />:render)
}

export default ShowProducts