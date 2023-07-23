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
            <h1>Seja Bem-Vindo</h1>
            <p className="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptates deleniti obcaecati possimus at natus maxime numquam neque itaque, fugiat cumque sint voluptatibus consequatur. Quam placeat ut eligendi enim voluptatum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptates deleniti obcaecati possimus at natus maxime numquam neque itaque, fugiat cumque sint voluptatibus consequatur. Quam placeat ut eligendi enim voluptatum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptates deleniti obcaecati possimus at natus maxime numquam neque itaque, fugiat cumque sint voluptatibus consequatur. Quam placeat ut eligendi enim voluptatum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptates deleniti obcaecati possimus at natus maxime numquam neque itaque, fugiat cumque sint voluptatibus consequatur. Quam placeat ut eligendi enim voluptatum.
            </p>
            <br />
            <p className="p"><FcMoneyTransfer className="ico"/> Clique aqui para fazer uma doação <FcMoneyTransfer className="ico"/></p>
        </div>
      </div>
    );
  }
}
