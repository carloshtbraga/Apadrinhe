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
    <div>
     <Title title="Destaques do Mês" img={trofeu}/>
    

    <br /><br /><br /><br />
    
    <div style={{ display: 'flex'}}>
  <Card style={{ width: "100%", marginLeft: '10px', marginBottom:'50px' }} className="destaque">
    <Card.Body>
      <Card.Title className="card-title" style={{ textAlign:'center' }}>João <FaMedal /></Card.Title>

    </Card.Body>
    <Card.Img variant="top" src={destaque2} style={{ maxHeight: '600px', objectFit: 'cover' }} />
  </Card>
  <Card style={{ width: "100%", marginLeft: '50px', marginBottom:'50px' }} className="destaque">
    <Card.Body>
      <Card.Title className="card-title" style={{ textAlign:'center' }}>Maria <FaMedal /></Card.Title>
  
    </Card.Body>
    <Card.Img variant="top" src={destaque3} style={{ maxHeight: '600px', objectFit: 'cover' }} />
  </Card>
  <Card style={{ width: "100%", marginLeft: '50px', marginBottom:'50px', marginRight: '10px' }} className="destaque">
    <Card.Body>
      <Card.Title className="card-title" style={{ textAlign:'center' }}>Joana <FaMedal /></Card.Title>
  
    </Card.Body>
    <Card.Img variant="top" src={destaque1} style={{ maxHeight: '600px', objectFit: 'cover' }} />
  </Card>
</div>
    </div>
  )
}
