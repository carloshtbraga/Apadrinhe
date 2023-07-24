import { Component } from "react";
import logo from '../images/logo.png';
import '../styles/Welcome.css'
import { FcMoneyTransfer } from "react-icons/fc";

export default class Welcome extends Component {
  render() {
    return (
      <>
        <section className="welcome">
          <div className="texto1 animate__animated animate__fadeIn">
            <div className="logo-div">
              <img className="textoimg" src={logo} alt="" width='400px'/>
            </div>
            <div>
              <h1><b>Seja Bem-Vindo</b></h1>
              <p className="p">
                É com imensa alegria e gratidão que lhe damos as boas-vindas a esta plataforma dedicada a uma causa tão nobre e transformadora. Aqui, a magia acontece através da solidariedade, amor ao próximo e da oportunidade de fazer a diferença na vida de crianças e adolescentes.
                Nossa missão é simples, mas carrega um significado profundo: proporcionar sorrisos, esperança e um futuro mais brilhante para crianças em situações vulneráveis. Sabemos que, muitas vezes, uma pequena ação pode ter um impacto imensurável na vida de alguém. E é por isso que contamos com pessoas especiais como você, dispostas a se unirem a nós nessa jornada de amor e cuidado.
              </p>
              <br />
              <a
                target="_blank"
                className='clique animate__animated animate__fadeInDown'
                href="https://www.vakinha.com.br/vaquinha/rumo-ao-teatro-municipal"
                rel="noreferrer"
              >
                <p className="p"><FcMoneyTransfer className="ico"/> Clique aqui para doar <FcMoneyTransfer className="ico"/></p>
              </a>
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--verde)" d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,96C840,107,960,149,1080,160C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </>
    );
  }
}
