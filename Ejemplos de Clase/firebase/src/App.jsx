import logo from "./logo.svg";
//Alias en el import. Ej BrowserRouter
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Contador from "./Pages/Contador";
import Registro from "./Pages/Registro";
import Detalle from "./Pages/Detalle";
import NavBarMenu from "./Components/NavBarMenu";
import NotFound from "./Pages/NotFound";
import Container from "react-bootstrap/Container";
import Login from "./Pages/Login";
import ProductosAlta from "./Pages/ProductosAlta";
import ProductosModificar from "./Pages/ProductosModificar";

function App() {
  return (
    <Router>
      <NavBarMenu />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alta" element={<Registro />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path="/producto/alta" element={<ProductosAlta />} />
          <Route
            path="/producto/modificar/:id"
            element={<ProductosModificar />}
          />
          <Route path="/contador" element={<Contador />} />
          <Route path="/producto/:id" element={<Detalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      Footer
    </Router>
  );
}

export default App;
