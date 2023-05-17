import Frutas from './frutas/Frutas';
import GetProductoDetalleML from './components/GetProductoDetalleML';
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
import ShowProducts from './frutas/ShowProducts';
import AddProduct from './frutas/AddProduct';
import EditProduct from './frutas/EditProduct';
import GetProductoDetalle from './components/GetProductoDetalle';


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
                      <Route path="/producto/nuevo" element={<AddProduct />} />
                      <Route path="/producto/edit/:id" element={<EditProduct />} />
                      <Route path="/producto/catalogue" element={<ShowProducts />} />
                      <Route path="/producto/:id" element={<GetProductoDetalle/>} />
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
