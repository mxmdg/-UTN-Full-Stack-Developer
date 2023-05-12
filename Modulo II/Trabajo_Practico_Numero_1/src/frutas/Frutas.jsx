import FrutasList from "./FrutasList"
import Productos from "../components/Productos"

function Frutas(){
    return (<>
                {FrutasList.map((fruta) => (<Productos
                    Nombre={fruta.Nombre}
                    Precio={fruta.Precio}
                    Descripcion={fruta.Descripcion}
                    Unidad={fruta.Unidad}
                    SKU={fruta.SKU}
                    Stock={fruta.Stock}
                    key={fruta.SKU}
                    Ruta={fruta.Ruta}
                />))}
                
            </>)
}

export default Frutas