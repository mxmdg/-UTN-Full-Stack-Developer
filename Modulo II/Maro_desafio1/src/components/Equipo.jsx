const Equipo = (props)=> {
  return (
      <div className='tablero_cabecera'>
          <h3>{props.Localia}</h3> 
          <h1>{props.Puntos}</h1>
          <h2>{props.Pais}</h2>
          <img className='img_sel' src={props.bandera} alt={props.Pais} />
          
      </div>
    )
}

export default Equipo;