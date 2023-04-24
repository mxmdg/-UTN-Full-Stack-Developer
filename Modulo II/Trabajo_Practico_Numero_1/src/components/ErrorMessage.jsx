import {useState } from 'react'

function ErrorMessage(props){

    const [useMessage , setMessage] = useState(props.message)


    const backHandler = () => {
        setMessage('')
        props.deleteMessage('')
    }

    const goHome = () => {
        window.open('./', '_Self')
    }

    if (props.message.includes('404')) {
        return (<div className="nodal"  >
                    <div className='message compra'>
                        <h5>{useMessage}</h5>
                        <button onClick={goHome}>Aceptar</button>
                    </div>
                </div>)
    } else {
        return (
                <div className='nodalBackground'>
                    <div className="nodal"  >
                        <div className='message compra'>
                            <h5>{useMessage}</h5>
                            <button onClick={backHandler}>Aceptar</button>
                        </div>
                    </div>
                </div>)

    }
    

}

export default ErrorMessage