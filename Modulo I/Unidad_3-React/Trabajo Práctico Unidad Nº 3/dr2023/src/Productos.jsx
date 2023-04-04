function Productos(item){
    return (<div className="Productos">
            <div><h3>{item.Nombre}</h3></div>
            <div>
                <img src={item.Ruta} alt={item.Nombre}/>
            </div>
            <div>
                <p>{item.Descripcion}<br>
                </br>Precio: <b>$ {item.Precio}.- {item.Unidad}.</b><br>
                </br><i>SKU: {item.SKU}</i><br>
                </br>Stock: <b>{item.Stock} kg</b></p>
            </div>
        </div>)

}

export default Productos