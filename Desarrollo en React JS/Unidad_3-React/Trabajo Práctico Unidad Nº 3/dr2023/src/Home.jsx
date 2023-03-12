import Productos from "./Productos"
import Navegador from "./Navegador"
import Footer from "./Footer"
import Frutas from "./Frutas"

function home(){
    
    return (<div>
            <h1>
                La Verdulería
            </h1>
            <div>
                <Navegador />
            </div>
            <section>
                {Frutas.map((fruta) => (<Productos
                    Nombre={fruta.Nombre}
                    Precio={fruta.Precio}
                    Descripcion={fruta.Descripcion}
                    Unidad={fruta.Unidad}
                    SKU={fruta.SKU}
                    Stock={fruta.Stock}
                    Key={fruta.SKU}
                    Ruta={fruta.Ruta}
                />))}
                
            </section>
            <div>
                <Footer />
            </div>
        </div>)

}

export default home