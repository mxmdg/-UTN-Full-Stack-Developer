import {useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function ErrorMessage(props){

    const [useMessage , setMessage] = useState(props.message)


    const backHandler = () => {
        setMessage('')
        props.deleteMessage('')
    }

    const goHome = () => {
        window.open('../', '_Self')
    }

    if (props.message.includes('404')) {
        return (
                <div className="nodal">
                    <Alert variant="danger">
                        <Alert.Heading>Atención</Alert.Heading>
                        <p>{useMessage}</p>
                        <hr />
                        <Button variant='outline-danger' onClick={goHome}>Volver</Button>
                    </Alert>
                </div>
                )
    } else {
        return (
            <div className="nodal">
                <Alert variant="warning">
                    <Alert.Heading>Atención</Alert.Heading>
                    <p>{useMessage}</p>
                    <hr />
                    <Button variant='outline-success' onClick={goHome}>Volver</Button>
                </Alert>
            </div>
            )

    }
    

}

export default ErrorMessage