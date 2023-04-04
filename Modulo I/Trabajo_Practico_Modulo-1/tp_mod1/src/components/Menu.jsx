const Menu = (props)=> {
        
        const clickHandler = (e)=> {
                props.selectForm(e.target.id)
        }    

        return <nav className="navBar">
                        <ul>
                                <li><a>Home</a></li>
                                <li><a id='Ingresar' onClick={clickHandler}>Ingresar</a></li>
                                <li><a id='Register' onClick={clickHandler}>Registrarse</a></li>
                                <li><a id="Seg_Auto" onClick={clickHandler}>Seguro Automotor</a></li>
                                <li><a id="Seg_Vida" onClick={clickHandler}>Seguro De Vida</a></li>
                                <li><a id="Seg_Hogar" onClick={clickHandler}>Seguro Hogar</a></li>
                                
                        </ul>
                </nav>
        
        }         

export default Menu;