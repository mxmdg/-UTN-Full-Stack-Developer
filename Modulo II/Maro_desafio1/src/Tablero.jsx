import {useState} from 'react'
import Equipo from './components/Equipo'
import Arg from "./img/arg.svg"
import Usa from "./img/usa.svg"



const Tablero = (props)=> {
  const [useLocal, setLocal] = useState(0)
  const [useVisitante, setVisitante] = useState(0)

  const pointsHandler = (e)=>{
    let local = parseInt(useLocal)
    let visitante = parseInt(useVisitante)
    let tanto = parseInt((e.target.textContent.trim()[0] === "-")?e.target.textContent.trim()[2]*(-1):e.target.textContent.trim()[2]);
    if(e.target.parentElement.classList.value === 'contenedor_local') {
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
    setLocal(local)
    setVisitante(visitante)
  }

  const resetHandler = (e)=>{
    setLocal(0)
    setVisitante(0)
  }

  return (
    <>
      <h4>{props.children}</h4>
      <div className='tablero_grupo'>
        <div className='contenedor_local'>
          {/* Inyección de componente */}
          <Equipo bandera={ Arg } Pais="Argentina" Puntos={useLocal} Localia="Local"/>

          <button className='btn_inc' onClick={pointsHandler}>+ 1</button>
          <button className='btn_inc' onClick={pointsHandler}>+ 2</button>
          <button className='btn_inc' onClick={pointsHandler}>+ 3</button>
          <button className='btn_dec' onClick={pointsHandler}>- 1</button>
          <button className='btn_dec' onClick={pointsHandler}>- 2</button>
          <button className='btn_dec' onClick={pointsHandler}>- 3</button>
        </div>
        <div className='contenedor_visitante'>
          {/* Inyección de componente */}
          <Equipo bandera={ Usa } Pais="Estados Unidos" Puntos= {useVisitante} Localia="Visitante"/>

          <button className='btn_inc' onClick={pointsHandler}>+ 1</button>
          <button className='btn_inc' onClick={pointsHandler}>+ 2</button>
          <button className='btn_inc' onClick={pointsHandler}>+ 3</button>
          <button className='btn_dec' onClick={pointsHandler}>- 1</button>
          <button className='btn_dec' onClick={pointsHandler}>- 2</button>
          <button className='btn_dec' onClick={pointsHandler}>- 3</button>

        </div>
      </div>
      <button onClick={resetHandler} className="btn_reset">Reiniciar tablero</button>
    </>
  )

}

export default Tablero;