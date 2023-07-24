import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import '../styles/Carro.css'

function Carro() {
  return (
    <Carousel className="main-carro">
      <Carousel.Item>
        <ExampleCarouselImage className="carro-img" src={banner1}/>
        <Carousel.Caption className='texto-banner'>
          <h1>Apadrinhe um Sorriso</h1>
          <p>Quel tal apadrinhar o sorriso de uma criança?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage className="carro-img" src={banner2}/>
        <Carousel.Caption className='texto-banner'>
          <h1>Quer ajudar?</h1>
          <p>Você pode nos ajudar com doações ou trabalho voluntário!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage className="carro-img" src={banner3}/>
      <Carousel.Caption className='texto-banner'>
          <h1>Parque das Missões</h1>
          <p>
            Ficamos em uma comunidade em situação muito vulnerável.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Carro;
