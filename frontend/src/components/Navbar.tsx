import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Spacex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/next">Próximos lançamentos</Nav.Link>
                        <Nav.Link as={Link} to="/previous">Lançamentos passados</Nav.Link>
                        <Nav.Link as={Link} to="/latest">Último lançamento</Nav.Link>
                        <Nav.Link as={Link} to="/upcoming">Próximos lançamentos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
