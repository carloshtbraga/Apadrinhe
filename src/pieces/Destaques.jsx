import Card from "react-bootstrap/Card";
import destaque1 from '../images/destaque1.jpg'
import destaque3 from '../images/destaque3.jpg'
import destaque2 from '../images/destaque2.jpg'
import { FaMedal,  } from 'react-icons/fa';
import { PiMedalLight } from "react-icons/pi";
import '../styles/Destaques.css'


export default function Destaques() {
  return (
    <div><h1><PiMedalLight/>Destaques do mês:</h1>

    <br /><br />
    
    <div style={{ display: 'flex'}}>
  <Card style={{ width: "100%", marginLeft: '10px', marginBottom:'50px' }} className="destaque">
    <Card.Body>
      <Card.Title style={{ textAlign:'center' }}>João <FaMedal /></Card.Title>

    </Card.Body>
    <Card.Img variant="top" src={destaque2} style={{ maxHeight: '600px', objectFit: 'cover' }} />
  </Card>
  <Card style={{ width: "100%", marginLeft: '50px', marginBottom:'50px' }} className="destaque">
    <Card.Body>
      <Card.Title style={{ textAlign:'center' }}>Maria <FaMedal /></Card.Title>
  
    </Card.Body>
    <Card.Img variant="top" src={destaque3} style={{ maxHeight: '600px', objectFit: 'cover' }} />
  </Card>
  <Card style={{ width: "100%", marginLeft: '50px', marginBottom:'50px', marginRight: '10px' }} className="destaque">
    <Card.Body>
      <Card.Title style={{ textAlign:'center' }}>Joana <FaMedal /></Card.Title>
  
    </Card.Body>
    <Card.Img variant="top" src={destaque1} style={{ maxHeight: '600px', objectFit: 'cover' }} />
  </Card>
</div>
    </div>
  )
}
