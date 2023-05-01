import FrutasList from '../frutas/FrutasList'
import Productos from "../components/Productos"
import {useState , useEffect} from 'react'
import queryML from "../ml_Services/queryML"
import Login from '../form/Login'

function Home(){
    const [useFrutas, setFrutas] = useState([])
    const [useML, setML] = useState([])
    
    useEffect(()=>{
        setFrutas(FrutasList.slice(0,4))
        const getML = async (s)=> {
            const buscados = await queryML(s)
            setML(buscados.slice(0,6))
        }
        getML('Frutas frescas')
    },[])


    return (
            <div className="mainContainer">
                <div className="formContainer">
                    <Login form='Ingresar'/>
                </div>
                <div className="homeContainer">
                    <h2>
                    La frescura y calidad de la verdulería tradicional,<br/>
                    ahora en línea!
                    </h2>
                </div>
                {useML.map((fruta) => (<Productos
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
                {useFrutas.map((fruta) => (<Productos
                    Nombre={fruta.Nombre}
                    Precio={fruta.Precio}
                    Descripcion={fruta.Descripcion}
                    Unidad={fruta.Unidad}
                    SKU={fruta.SKU}
                    Stock={fruta.Stock}
                    key={fruta.SKU}
                    Ruta={fruta.Ruta}
                
                />))}
            </div>
            )

}

export default Home