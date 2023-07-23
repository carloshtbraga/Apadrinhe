import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Footer.css'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='footer' style={{margin:'auto'}}>
        <p className='endereco'>Parque das Missões, Duque de Caxias, RJ, Brazil

 - Telefone: (21) 99506-7449</p>
        <Container >
          <Navbar.Brand href="www.devs4good.com.br" target='_blank' style={{margin:'auto'}}>By Devs4Good - 2013</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;