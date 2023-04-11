import FrutasList from "./FrutasList"
import Productos from "./Productos"

function Frutas(){
    return (<section>
    {FrutasList.map((fruta) => (<Productos
        Nombre={fruta.Nombre}
        Precio={fruta.Precio}
        Descripcion={fruta.Descripcion}
        Unidad={fruta.Unidad}
        SKU={fruta.SKU}
        Stock={fruta.Stock}
        Key={fruta.SKU}
        Ruta={fruta.Ruta}
    />))}
    
</section>)
}

export default Frutas