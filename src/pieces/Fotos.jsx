import { Component } from "react";
import Card from "react-bootstrap/Card";
import foto1 from '../images/foto1.jpg'
import fabi from '../images/fabi.jpg'
import foto2 from '../images/foto2.jpg'
import foto3 from '../images/foto3.jpg'
import foto4 from '../images/foto4.jpg'

export default class Fotos extends Component {
  render() {
    return (
        <div>
            <div style={{ display: 'flex'}}>

<Card style={{ width: "60%", marginLeft: '10px', marginTop:'50px', marginRight: '50px', marginBottom:'50px', backgroundColor:'lightgray' }}>
  <Card.Img variant="top" src={fabi} />
  <Card.Body>
  <Card.Title style={{ textAlign:'center' }}>O Nascimento</Card.Title>
    <Card.Text style={{ textAlign:'center' }}>
    
    Jovem que se alfabetizou aos 12 anos abriu primeira sala de leitura em favela de Caxias
    Jovem que se alfabetizou aos 12 anos abriu primeira sala de leitura em favela de Caxias
    Jovem que se alfabetizou aos 12 anos abriu primeira sala de leitura em favela de Caxias
    Jovem que se alfabetizou aos 12 anos abriu primeira sala de leitura em favela de Caxias
    Jovem que se alfabetizou aos 12 anos abriu primeira sala de leitura em favela de Caxias
    Jovem que se alfabetizou aos 12 anos abriu primeira sala de leitura em favela de Caxias
    Jovem que se alfabetizou aos 12 anos abriu primeira sala de leitura em favela de Caxias
    Jovem que se alfabetizou aos 12 anos abriu primeira sala de leitura em favela de Caxias
    Jovem que se alfabetizou aos 12 anos abriu primeira sala de leitura em favela de Caxias
    </Card.Text>
  </Card.Body>
</Card>
 <Card style={{ width: "40%", marginTop:'50px', marginRight: '10px', marginBottom:'50px', backgroundColor:'lightgray' }}>
<Card.Img variant="top" src={foto2} />
  <Card.Body>
    <Card.Title style={{ textAlign:'center' }}>Card Title</Card.Title>
    <Card.Text style={{ textAlign:'center' }}>
      Some quick example text to build on the card title and make up the
      bulk of the cards content.
    </Card.Text>
  </Card.Body>
</Card>


</div>
<div style={{ display: 'flex'}}>
  <Card style={{ width: "100%", marginLeft: '10px', marginBottom:'50px', backgroundColor:'lightgray' }}>
    <Card.Body>
      <Card.Title style={{ textAlign:'center' }}>Card Title</Card.Title>
      <Card.Text style={{ textAlign:'center'}}>
        Some quick example text to build on the card title and make up the
        bulk of the cards content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={foto1} style={{ maxHeight: '200px', objectFit: 'cover' }} />
  </Card>
  <Card style={{ width: "100%", marginLeft: '50px', marginBottom:'50px', backgroundColor:'lightgray' }}>
    <Card.Img variant="top" src={foto3} style={{ maxHeight: '200px', objectFit: 'cover' }} />
    <Card.Body>
      <Card.Title style={{ textAlign:'center' }}>Card Title</Card.Title>
      <Card.Text style={{ textAlign:'center' }}>
        Some quick example text to build on the card title and make up the
        bulk of the cards content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: "100%", marginLeft: '50px', marginBottom:'50px', marginRight: '10px', backgroundColor:'lightgray' }}>
    <Card.Body>
      <Card.Title style={{ textAlign:'center' }}>Card Title</Card.Title>
      <Card.Text style={{ textAlign:'center' }}>
        Some quick example text to build on the card title and make up the
        bulk of the cards content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={foto4} style={{ maxHeight: '200px', objectFit: 'cover' }} />
  </Card>
</div>





        </div>
    );
  }
}
