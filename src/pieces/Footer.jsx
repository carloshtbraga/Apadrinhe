import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Footer.css'
import dev from '../images/devs4good.webp'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='footer' style={{margin:'auto'}}>
        <p className='endereco'>Parque das Missões, Duque de Caxias, RJ, Brazil

 - Telefone: (21) 99506-7449</p>
        <Container >
          <Navbar.Brand href="https://www.devs4good.com.br" target='_blank' style={{margin:'auto'}}>By Devs4Good © 2023 <img style={{width:'40px'}} src={dev} alt="" /></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;