import Frutas from './frutas/Frutas';
import GetProductosML from './ml_Services/GetProductosML';
import GetProductoDetalleML from './ml_Services/GetProductoDetalleML';
import SearchProductsML from './ml_Services/SearchProductsML';
import Navegador from './navBar/Navegador';
import Contacto from './contact/Contacto';
import Footer from './footer/Footer';
import './styles/App.css';
import Home from "./home/Home";
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import ErrorMessage from './components/ErrorMessage';


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
        </div>
        <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/frutas" element={<Frutas />} />
                <Route path="/productosML" element={<GetProductosML />} />
                <Route path="/productosML/:id" element={<GetProductoDetalleML />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<ErrorMessage message={`404- Lo sentimos mucho. No pudimos encontrar esta dirección.`}/>} />              
              </Routes>  
        </div>    
        <div className='footerContainer'>
            <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App;
