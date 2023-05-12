import {useState} from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Collapse from 'react-bootstrap/Collapse'

function Productos(item){

    const [useCompra , setCompra] = useState(false)
    const [useCantidad , setCantidad] = useState(0)
    const [useMessage , setMessage] = useState('')
    const [useMessageType , setMessageType ] = useState('')
    const [useStock , setStock] = useState(item.Stock - useCantidad)

    /* const logs = ()=> {
        console.log(`_________________________________`)
        console.log(`Cantidad: ${useCantidad}`)
        console.log(`Sotck: ${useStock} / item Stokc: ${item.Stock}`)
        console.log(`Compra: ${useCompra}`)
        console.log(`Mensaje: ${useMessage}`)
        console.log(`_________________________________`)
    } */

    const buyHandler = (e) =>{
        e.preventDefault()
        if ((useStock - useCantidad) >= 0 && useCantidad > 0) {
            setCantidad(e.target.value)
            setCompra(true)
            setStock(useStock - useCantidad)
            setMessageType('success')
            setMessage(`Usted ha comprado ${useCantidad} ${item.Unidad} de ${item.Nombre}. Total: $${item.Precio * useCantidad}.-`)
        } else {
            setCompra(true)
            setMessageType('danger')
            setMessage('Lamentablemente no podemos ofrecer esa cantidad')
        }
    }

    const qtyHandler = (e) => {
            setCantidad(e.target.value)
    }

    const backHandler = () => {
        setCompra(false)
        setMessage('')
    }

    return (
        <Col>
        <Card style={{ width: '18rem', height:'98%', background: 'var(--color5)', padding: '0.5rem', margin: '0.5rem' }}>
           
            <Card.Body>
                <Card.Title>{item.Descripcion}</Card.Title>
                <Table striped bordered hover size="sm">
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
                 </Table>
                
            </Card.Body>
            <Card.Img variant="bottom" src={item.Ruta} />
            <Button size='sm'
                    variant="outline-success" 
                    as={Link} 
                    to={'/productosML/' + item.SKU}
                    style={{
                        boxShadow:'5px 5px 10px #555',
                        backdropFilter: 'blur(7px)',
                        width: 'fit-content',
                        alignSelf: 'center',
                        margin: '5px',
                        position:'absolute',
                        bottom: '75px'
                     }}>
                    Ver Detalle
            </Button>
            <Card.Footer className="text-muted">
                <>
                    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                        <ButtonGroup size='sm' className="me-2" aria-label="First group">
                            <Form.Control
                                type="number"
                                placeholder="#"
                                aria-label="Cantidad"
                                aria-describedby="btnGroupAddon"
                                onChange={qtyHandler}
                                size='sm'
                            />
                            <Button variant="success" onClick={buyHandler}>Comprar</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <Collapse in={useCompra} timeout={1500}>
                        <div>
                            <Alert variant={useMessageType}>
                                <Alert.Heading>{(useMessageType === 'success')?'Gracias':'Lo sentimos mucho'}</Alert.Heading>
                                <p>{useMessage}</p>
                                <hr />
                                <div className="d-flex justify-content-end">
                                <Button onClick={backHandler} variant={`outline-${useMessageType}`}>
                                    Volver
                                </Button>
                                </div>
                            </Alert>
                        </div>
                    </Collapse>
                </>
            </Card.Footer>
        </Card>
        </Col>
        )

}

export default Productos