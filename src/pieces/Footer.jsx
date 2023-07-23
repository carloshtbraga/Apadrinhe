import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Footer.css'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='footer' style={{margin:'auto'}}>
        <Container >
          <Navbar.Brand href="#home" style={{margin:'auto'}}>By Devs4Good - 2013</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;