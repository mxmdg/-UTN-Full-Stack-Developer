import FrutasList from '../frutas/FrutasList'
import Productos from "../components/Productos"
import {useState , useEffect} from 'react'
import { queryML } from "../ml_Services/queryML"
import Login from '../form/Login'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import ProductosSlider from '../components/ProductosSlider'
import Row from 'react-bootstrap/Row'
import Anana from '../img/Anana.png'
import Manzana from '../img/Manzana.png'
import Naranja from '../img/Naranja.png'

function Home(){
    const [useFrutas, setFrutas] = useState([])
    const [useML, setML] = useState([])
    
    useEffect(()=>{
        setFrutas(FrutasList.slice(0,4))
        const getML = async (s)=> {
            const buscados = await queryML(s)
            setML(buscados.slice(0,4))
        }
        getML('Frutas frescas')
    },[])


    return (
            <Container fluid >
                <Carousel variant="dark">
                    {useFrutas.map((fruta) => (
                    <Carousel.Item style={{ height: 'fit-content', padding: '20px'}}>
                            <ProductosSlider
                                Nombre={fruta.Nombre}
                                Precio={fruta.Precio}
                                Descripcion={fruta.Descripcion}
                                Unidad={fruta.Unidad}
                                SKU={fruta.SKU}
                                Stock={fruta.Stock}
                                key={fruta.SKU}
                                Ruta={fruta.Ruta}
                            /><Carousel.Caption>
                            <h3>{fruta.Nombre}</h3>
                            <p>
                                {fruta.Descripcion}
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item> 
                    ))}
                </Carousel>
                <Row>
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
                </Row>
            </Container>
            )

}

export default Home