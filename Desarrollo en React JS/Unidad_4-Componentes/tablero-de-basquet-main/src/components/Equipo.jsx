import { Component } from "react";

class Equipo extends Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='tablero_cabecera'>
          <h3>{this.props.Localia}</h3> 
          <h1>{this.props.Puntos}</h1>
          <h2>{this.props.Pais}</h2>
          <img className='img_sel' src={this.props.bandera} alt="" />
          
      </div>
    )
  }
}

export default Equipo;