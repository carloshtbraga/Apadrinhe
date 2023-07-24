import Card from "react-bootstrap/Card";
import destaque1 from '../images/destaque1.jpg'
import destaque3 from '../images/destaque3.jpg'
import destaque2 from '../images/destaque2.jpg'
import { FaMedal,  } from 'react-icons/fa';
import '../styles/Destaques.css'
import Title from "./Title";
import trofeu from '../images/trofeu.png'


export default function Destaques() {
  return (
    <>
      <section className="destaques-section">
      <Title title="Destaques do Mês" img={trofeu}/>
      <br />   <br />   <br />
        <div style={{ display: 'flex'}} className="container-destaque">
          <Card className="destaque animate__animated animate__fadeInLeft">
            <Card.Body>
              <Card.Title className="card-title" style={{ textAlign:'center' }}>João <FaMedal /></Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={destaque2} style={{ maxHeight: '600px', maxWidth:'300px', objectFit: 'cover' }} />
          </Card>

          <Card className="destaque animate__animated animate__fadeInLeft">
            <Card.Body>
              <Card.Title className="card-title" style={{ textAlign:'center' }}>Maria <FaMedal /></Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={destaque3} style={{ maxHeight: '600px',  maxWidth:'300px', objectFit: 'cover' }} />
          </Card>
          
          <Card className="destaque animate__animated animate__fadeInLeft">
            <Card.Body>
              <Card.Title className="card-title" style={{ textAlign:'center' }}>Joana <FaMedal /></Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={destaque1} style={{ maxHeight: '600px', maxWidth:'300px',  objectFit: 'cover' }} />
          </Card>
          
        </div>
        <br />   <br />   <br />  <br />   <br />   <br />
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 390"><path fill="var(--verde)" fillOpacity="1" d="M0,192L60,192C120,192,240,192,360,202.7C480,213,600,235,720,240C840,245,960,235,1080,224C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </>
  )
}
