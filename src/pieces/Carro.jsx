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
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage className="carro-img" src={banner2}/>
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage className="carro-img" src={banner3}/>
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carro;
