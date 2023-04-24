import {Link } from 'react-router-dom'

function Navegador(){
    return (<div>
            <div className="NavBar">
                
                    <Link to="/" >Home</Link>
                    <Link id='Frutas' to='/frutas'>Frutas</Link>
                    <Link id='productosML' to='/productosML'>Productos en Mercado Libre</Link>
                    <Link id='contacto' to='/contacto'>Contacto</Link>
                
            </div>
        </div>)

}

export default Navegador