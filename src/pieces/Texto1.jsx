import { Component } from "react";
import logo from '../images/logo.png';
import '../styles/Texto1.css'
import { FcMoneyTransfer } from "react-icons/fc";

export default class Texto1 extends Component {
  render() {
    return (
    <div className="texto1">
        <div>
            <img className="textoimg" src={logo} alt="" width='400px'/>
        </div>
        <div>
            <h1><b>Seja Bem-Vindo</b></h1>
            <p className="p">
            É com imensa alegria e gratidão que lhe damos as boas-vindas a esta plataforma dedicada a uma causa tão nobre e transformadora. Aqui, a magia acontece através da solidariedade, amor ao próximo e da oportunidade de fazer a diferença na vida de crianças e adolescentes.

Nossa missão é simples, mas carrega um significado profundo: proporcionar sorrisos, esperança e um futuro mais brilhante para crianças em situações vulneráveis. Sabemos que, muitas vezes, uma pequena ação pode ter um impacto imensurável na vida de alguém. E é por isso que contamos com pessoas especiais como você, dispostas a se unirem a nós nessa jornada de amor e cuidado.
            </p>
            <br />
            <a target="_blank"className='clique'href="https://www.vakinha.com.br/vaquinha/rumo-ao-teatro-municipal" rel="noreferrer"><p className="p"><FcMoneyTransfer className="ico"/> Clique aqui para fazer uma doação <FcMoneyTransfer className="ico"/></p></a>
        </div>
      </div>
    );
  }
}
