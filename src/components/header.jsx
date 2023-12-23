import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand onClick={()=>navigate('/')}>Ecuador Turistico</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title  id="offcanvasNavbar-expand-lg">
                            Ecuador Turistico
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            <Nav.Link onClick={()=>navigate('/ciudades')}>Ciudades</Nav.Link>
                            <Nav.Link onClick={()=>navigate('/sitios')}>Sitios</Nav.Link>
                            <Nav.Link onClick={()=>navigate('/test')}>404</Nav.Link> 
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="secondary">Buscar</Button>
                        </Form>
                    </Offcanvas.Body>

                </Navbar.Offcanvas>
            </Container>


        </Navbar>
    );
}

export default Header;