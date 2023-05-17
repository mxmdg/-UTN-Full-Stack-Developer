/*function Producto(props){
  return (
    <div>
      <h1>{props.nombre}</h1>
      <p>{props.precio}</p>
      <p>{props.categoria}</p>
    </div>
  );
}
function Producto(props){
  const {nombre,precio,categoria} = props
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{precio}</p>
      <p>{categoria}</p>
    </div>
  );
}*/
function Producto({nombre,precio,categoria}){
  
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{precio}</p>
      <p>{categoria}</p>
    </div>
  );
}

export default Producto;
