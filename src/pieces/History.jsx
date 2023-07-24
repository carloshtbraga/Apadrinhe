import { Component } from "react";
import Card from "react-bootstrap/Card";
import foto1 from '../images/foto1.jpg'
import fabi from '../images/fabi.jpg'
import foto2 from '../images/foto2.jpg'
import foto3 from '../images/foto3.jpg'
import foto4 from '../images/foto4.jpg'
import Title from "./Title";
import historia from '../images/historia.png'
import '../styles/History.css'

export default class History extends Component {
  render() {
    return (
      <section className="history-section">
        <Title title="Nossa História" img={historia}/>
        <div className="container-foto">
          <Card className='card-foto1 nascimento animate__animated animate__fadeIn'>
          <Card.Img variant="top" src={fabi} />
            <Card.Body className="body-foto">
              <Card.Title>O Nascimento</Card.Title>
              <br />
              <Card.Text className="text-foto">
                A origem da ONG é parecida com muitas outras que já foram criadas, que é ajudar ao próximo e quem precisa. Por esse motivo em dezembro de 2009, a Fabiana da Silva, pedagoga e moradora da região do Parque das Missões, em Duque de Caxias, na Baixada Fluminense, criou a ONG Apadrinhe um Sorriso
                <span className="span">
                  pensando em realizar ações sociais e filantropia para os moradores da comunidade na qual mora.
                  Durante a realização de sua monografia, Fabbi teve a ideia de criar uma organização não governamental com o objetivo de ajudar os jovens da sua região, para isso pediu auxílio de seus colegas da faculdade de pedagogia da UERJ, para levar educação, cultura e cidadania para esses moradores da comunidade do Parque das Missões. Foi assim que ela criou a ONG, que começou de forma pontual, mas com a ajuda de doações de pessoas físicas, apoio e parcerias com os comerciantes da própria comunidade, das organizações sociais, campanhas pontuais pela comercialização de produtos doados em bazares beneficentes e do aumento de voluntários, fez com que as ações sociais que eram pontuais virassem constantes.
                  Fabiana da Silva, a Fabbi, como é conhecida em sua comunidade, é um símbolo para todos do Parque das Missões de como é possível vencer na vida através de muita luta e da educação. A Fabbi, sempre teve uma paixão enorme pela literatura e pedagogia, e foi através desse amor que ela dedicava o tempo que tinha dentro do ônibus para ir e voltar do trabalho de auxiliar geral para estudar e foi assim que ela conseguiu realizar o sonho de cursar pedagogia na UERJ.
                </span>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='card-foto1 mais animate__animated animate__fadeIn'>
          <Card.Img variant="top" src={foto2} />
            <Card.Body>
              <Card.Title>Um pouco mais...</Card.Title>
              <br />
              <Card.Text className="text-foto">
                Nós, do Apadrinhe um Sorriso, estamos dedicados a espalhar alegria e esperança nas vidas das crianças da comunidade do Parque das Missões. Com paixão e comprometimento, trabalhamos incansavelmente para fazer a diferença na vida desses jovens, proporcionando-lhes um futuro mais promissor.<span className="span">
                O Parque das Missões é uma comunidade vibrante e cheia de vida, mas também enfrenta desafios significativos. Sabemos que a infância é uma fase crucial na formação de um ser humano, e é por isso que buscamos oferecer apoio e oportunidades para cada criança que vive nesse lugar especial.
                Cada sorriso que ilumina o rosto de uma criança é uma prova do impacto positivo que podemos alcançar juntos.
                Nossas atividades variadas incluem programas educacionais, atividades recreativas, oficinas de arte e cultura, além de iniciativas que incentivam a consciência ambiental e a saúde. Com cada ação, esperamos não apenas expandir horizontes, mas também cultivar valores como solidariedade, respeito e empatia.</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />   <br />   <br />
        <Title title="Algumas atividades" img={historia}/>
        <br />   <br />   <br />

        <div className="container-foto2">
          <Card className='card-foto2 animate__animated animate__fadeInLeft'>
            <Card.Body className="body-foto">
              <Card.Title>Lazer</Card.Title>
              <Card.Text>
                Montamos um Sarau dentro da comunidade e aqui as crianças podem se expressar através da arte, seja lendo, recitando poesias, tocando instrumentos, etc.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={foto1} style={{ maxHeight: '300px', objectFit: 'cover' }} />
          </Card>

          <Card className='card-foto2 animate__animated animate__fadeInUp'>
            <Card.Img variant="top" src={foto3} style={{ maxHeight: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Esporte</Card.Title>
              <Card.Text>
                No Apadrinhe um Sorris  o, acreditamos que o esporte é muito mais do que uma atividade física; é uma poderosa ferramenta de transformação na vida de nossas crianças.
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card className='card-foto2 animate__animated animate__fadeInRight'>
            <Card.Body>
              <Card.Title>Dança e Cultura</Card.Title>
              <Card.Text>
               Além disso, também proporcionamos aulas de dança e atividades culturais, enriquecendo a vida das crianças com expressão artística e valorizando suas tradições.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={foto4} style={{ maxHeight: '300px', objectFit: 'cover' }} />
          </Card>
        </div>
        <br />   <br />   <br />
      </section>
    );
  }
}
