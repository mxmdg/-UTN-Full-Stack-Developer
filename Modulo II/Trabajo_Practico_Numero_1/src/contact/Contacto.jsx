import Form from "../form/Form"

function Contacto(){
    return (<div className="mainContainer">
                <div className="homeContainer">
                    <h2>
                    Regístrate y comienza a disfrutar de los mejores productos frescos y de calidad en la comodidad de tu hogar.<br/>¡No te lo pierdas!
                    </h2>
                </div>
                <div className="formContainer">
                    <Form form='Register'/>
                </div>
                <div className="formContainer">
                    <Form form='Ingresar'/>
                </div>
        </div>)

}

export default Contacto