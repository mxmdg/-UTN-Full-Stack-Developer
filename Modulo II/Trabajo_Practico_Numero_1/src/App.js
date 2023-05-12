import Frutas from './frutas/Frutas';
import GetProductoDetalleML from './ml_Services/GetProductoDetalleML';
import SearchProductsML from './ml_Services/SearchProductsML';

// import SearchProductsML from './ml_Services/SearchProductsML';
// import Navegador from './navBar/Navegador';
import NavigationBar from './navBar/NavigationBar'
import Contacto from './contact/Contacto';
import Footer from './footer/Footer';
import './styles/App.css';
import Home from "./home/Home";
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import ErrorMessage from './components/ErrorMessage';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function App() {


  return (
    <BrowserRouter >
        <div className='App' >
            {/* <h1>
                La Verdulería
            </h1> */}
            <Container >
              <NavigationBar />
            </Container>
            <Container sm={12} md={6} lg={4} xl={3} xxl={2} >
              <Row> 
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/frutas" element={<Frutas />} />
                      <Route path="/productosML/search/:id" element={<SearchProductsML />} />
                      <Route path="/productosML/:id" element={<GetProductoDetalleML />} />
                      <Route path="/contacto" element={<Contacto />} />
                      <Route path="*" element={<ErrorMessage message={`404- Lo sentimos mucho. No pudimos encontrar esta dirección.`}/>} />              
                    </Routes>  
              </Row>
          </Container>
          <div className='footerContainer'>
              <Footer />
          </div>   
        </div>
         
        
      </BrowserRouter>
  )
}

export default App;
