import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNavbar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">Portafolio </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='mx-2' href="#home">Inicio</Nav.Link>
            <Nav.Link className='mx-2' href="#link">Proyectos</Nav.Link>
            <Nav.Link className='mx-2' href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;