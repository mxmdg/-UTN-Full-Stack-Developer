import {Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavigationBar() {
  const [useSearch, setSearch] = useState('')
 

   const onChangeHandler = (e)=>{
    e.preventDefault(e)
    setSearch(e.target.value)
  } 

    return (
      <Navbar 
        variant="dark"
        bg='success' 
        expand="sm"
        sticky='top' 
        style={{
          background:'var(--color31)', 
          borderRadius:'0px 0 10px 10px',
          boxShadow: '10px 15px 20px #00000066'
          }}>
        <Container fluid>
          <Navbar.Brand as={Link}to="/"><h6>La Verduleria</h6></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '120px' }}
              navbarScroll
            >
                <Nav.Link as={Link}to="/">Home</Nav.Link>
                <Nav.Link as={Link}to="/frutas">Frutas</Nav.Link>
                <Nav.Link as={Link}to="/productosML/search/bananas">Mercado Libre</Nav.Link>
                <Nav.Link as={Link}to="/contacto">Contacto</Nav.Link>
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link}to="/producto/nuevo">Nuevo</NavDropdown.Item>
                <NavDropdown.Item as={Link}to="/producto/catalogue">
                  Nuestros Productos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={onChangeHandler}
              />
              <Button variant="outline-light" as={Link} to={"/productosML/search/" + useSearch}>Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  


export default NavigationBar;