import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='justify-content-end'>
          <Navbar.Brand href="#">UNIR</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Footer;