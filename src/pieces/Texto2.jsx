import { Component } from "react";
import '../styles/Texto2.css'
import equipe from '../images/equipe.png'
import equipeperfil from '../images/equipeperfil.png'
import equipeperfil2 from '../images/equipeperfil2.png'
import equipeperfil3 from '../images/equipeperfil3.png'
import equipeperfil4 from '../images/equipeperfil4.png'
import equipeperfil5 from '../images/equipeperfil5.png'
import equipeperfil6 from '../images/equipeperfil6.png'
import equipeperfil7 from '../images/equipeperfil7.png'
import equipeperfil8 from '../images/equipeperfil8.png'



export default class Texto2 extends Component {
  render() {
    return (
    <div className="texto2" id="equipe">        
        <div>
            <h1><img src={equipe} className="equipe" alt="" /> <b>Nossa Equipe </b><img src={equipe} className="equipe" alt="" /></h1>
            <p className="p">
            A equipe do Apadrinhe um Sorriso é composta por corações generosos e dedicados, unidos por uma causa maior: transformar vidas e levar esperança às crianças da comunidade Parque das Missões, em Caxias, Rio de Janeiro. Cada membro dessa família tem um papel fundamental na construção de um futuro mais brilhante para nossos pequenos, e juntos formamos um time imbatível.

            </p>
            <div className="container-perfil">
            <div>
            <img className="perfil" src={equipeperfil} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil2} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil3} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil4} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil5} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil6} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil7} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil8} alt="" />
            <p>Rosane</p>
            </div>
            </div>
          
            
            
            
            <br />

        </div>
      </div>
    );
  }
}
