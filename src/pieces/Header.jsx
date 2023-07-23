import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css'
import logo2 from '../../src/images/logo2.webp'
import coin from '../../src/images/coin.png'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='header'>
        <Container>
          <img  className='logoheader'src={logo2} alt=""  width='100px' style={{marginTop: '15px'}}/>
          <Navbar.Brand href="#home"><h4>Apadrinhe um Sorriso</h4></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.instagram.com/apadrinheumsorrisooficial/" target='_blank'><p>Instagram</p></Nav.Link>
            <Nav.Link target='_blank' href="https://www.facebook.com/apadrinheumsorrisoPQM/?locale=pt_BR"><p>Facebook</p></Nav.Link>
            <Nav.Link href="#equipe"><p>Equipe</p></Nav.Link>      
          </Nav>
          <Navbar.Brand href="https://www.vakinha.com.br/3855330" target='_blank'><img width='60px'src={coin} alt="" /><h4> Doar </h4></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;