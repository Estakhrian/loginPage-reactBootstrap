import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menus() {
  return (
    <Navbar collapseOnSelect expand="lg" bg='white'>
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:'bold'}}>EstakhrianWeb</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <NavDropdown title="Front End" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Html</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Css
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Javascript</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                React Js
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menus;