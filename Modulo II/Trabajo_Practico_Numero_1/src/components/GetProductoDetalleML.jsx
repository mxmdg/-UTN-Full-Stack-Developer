import { useState , useEffect} from 'react'
import { useParams , Link } from 'react-router-dom'
import '../styles/index.css'
import ErrorMessage from './ErrorMessage'
import LightGallery from '../ml_Services/LightGallery'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import LoadingDiv from './LoadingDiv'
import { queryMLProduct , queryMLDescription } from '../ml_Services/queryML'



const GetProductoDetalleML = (props)=> {
    const [useLoading, setLoading] = useState(true)
    const [useProducto,setProducto] = useState([])
    const [useDescription, setDescription] = useState('')
    const [useImages, setImages] = useState([])
    const { id } = useParams()
    const [useMessage , setMessage] = useState('')

    console.log('ID por parametro: ' + id)

   useEffect(()=>{

        const queryML = async (id)=>{
            try {
                const res = await queryMLProduct(id) 
                const desc = await queryMLDescription(id) 
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
        return (<LoadingDiv />)
    } else if (useMessage !== '') {
        return <ErrorMessage message={useMessage} deleteMessage={setMessage}/>
    } else {
        return <Row>
                    <Card style={{ width: '18rem', background: 'var(--color5)', padding: '0.5rem', margin: '0.5rem' }}>
                       <Card.Header><h4>{useProducto.title}</h4></Card.Header>
                       <Card.Body>
                            <p>{useDescription}</p>
                       </Card.Body>
                       <Card.Footer className='compra'>
                            <h5>{useProducto.currency_id} {useProducto.price}</h5>
                            <Button variant='outline-success' as={Link} to={useProducto.permalink}>Comprar</Button>
                       </Card.Footer>               
                    </Card>
                    <Col className='images' style={{ background: 'var(--color5)', padding: '0.5rem', margin: '0.5rem' }}>
                        <LightGallery images={useImages}/>
                    </Col>
                
                </Row>
    } 
}

export default GetProductoDetalleML