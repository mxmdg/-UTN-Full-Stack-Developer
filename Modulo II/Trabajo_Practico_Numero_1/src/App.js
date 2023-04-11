import Frutas from './Frutas';
import ProductosML from './ProductosML';
import Navegador from './Navegador';
import Contacto from './Contacto';
import Footer from './Footer';
import './App.css';
import Home from "./Home";
import {BrowserRouter , Routes , Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <div className='App'>
            <h1>
                La Verdulería
            </h1>
          <div >
            <Navegador />
           </div>
           <div className='App'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/frutas" element={<Frutas />} />
                <Route path="/productosML" element={<ProductosML />} />
                <Route path="/contacto" element={<Contacto />} />
              </Routes>  
            </div>
        </div>    
        <div>
            <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App;
