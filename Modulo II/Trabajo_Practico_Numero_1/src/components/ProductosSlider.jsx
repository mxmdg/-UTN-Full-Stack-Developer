import Container from 'react-bootstrap/Container'

function ProductosSlider(item){
    
    return (
        <div id={item.Key} >
                <Container className='homeContainer'>
                    <div style={{width: "100%", 
                                height: "500px",
                                objectFit: "scale-down",
                                alignContent: "contain"}}>
                        <img 
                            src={item.Ruta} 
                            alt={item.Nombre}
                            style={{
                                height: "70%",
                                filter: 'drop-shadow(15px 10px 10px #000000aa'
                            }}
                            />    
                    </div>
                </Container>                
        </div>
        )

}

export default ProductosSlider