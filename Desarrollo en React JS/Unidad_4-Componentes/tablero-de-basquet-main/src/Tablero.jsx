import React, { Component } from 'react'
import Equipo from './components/Equipo';
import Arg from "./img/arg.svg";
import Usa from "./img/usa.svg";

class Tablero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 0,
      visitante: 0
    }
  }

  /* Cree sus funciones aquí abajo */

  moreLess = (e)=>{
    let local = parseInt(this.state.local)
    let visitante = parseInt(this.state.visitante)
    let tanto = parseInt((e.target.textContent.trim()[0] === "-")?e.target.textContent.trim()[2]*(-1):e.target.textContent.trim()[2]);
    if(e.target.parentElement.classList.value == 'contenedor_local') {
      if(tanto + local >= 0){
        local = local + tanto
      } else {
        return local
      }
    } else {
      if(tanto + visitante >= 0){
        visitante = visitante + tanto
      } else {
        return visitante
      }
    }
    this.setState({local: local , visitante: visitante})
  }
  
  resetTable = (e)=>{
    this.setState({local: 0 , visitante: 0})
  }



  render () {
    return (
      <>
        <h4>{this.props.children}</h4>
        <div className='tablero_grupo'>
          <div className='contenedor_local'>
            {/* Inyección de componente */}
            <Equipo bandera={ Usa } Pais="Estados Unidos" Puntos= {this.state.local} Localia="Local"/>

            <button className='btn_inc' onClick={this.moreLess}>+ 1</button>
            <button className='btn_inc' onClick={this.moreLess}>+ 2</button>
            <button className='btn_inc' onClick={this.moreLess}>+ 3</button>
            <button className='btn_dec' onClick={this.moreLess}>- 1</button>
            <button className='btn_dec' onClick={this.moreLess}>- 2</button>
            <button className='btn_dec' onClick={this.moreLess}>- 3</button>
          </div>
          <div className='contenedor_visitante'>
            {/* Inyección de componente */}
            <Equipo bandera={ Arg } Pais="Argentina" Puntos={this.state.visitante} Localia="Visitante"/>

            <button className='btn_inc' onClick={this.moreLess}>+ 1</button>
            <button className='btn_inc' onClick={this.moreLess}>+ 2</button>
            <button className='btn_inc' onClick={this.moreLess}>+ 3</button>
            <button className='btn_dec' onClick={this.moreLess}>- 1</button>
            <button className='btn_dec' onClick={this.moreLess}>- 2</button>
            <button className='btn_dec' onClick={this.moreLess}>- 3</button>

          </div>
        </div>
        <button onClick={this.resetTable} className="btn_reset">Reiniciar tablero</button>
      </>
    )
  }
}

export default Tablero;