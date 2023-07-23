import { Component } from "react";
import '../styles/Texto2.css'
import equipe from '../images/equipe.png'
import equipeperfil from '../images/equipeperfil.png'


export default class Texto2 extends Component {
  render() {
    return (
    <div className="texto2">        
        <div>
            <h1><img src={equipe} className="equipe" alt="" /> Nossa Equipe <img src={equipe} className="equipe" alt="" /></h1>
            <p className="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptates deleniti obcaecati possimus at natus maxime numquam neque itaque, fugiat cumque sint voluptatibus consequatur. Quam placeat ut eligendi enim voluptatum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptates deleniti obcaecati possimus at natus maxime numquam neque itaque, fugiat cumque sint voluptatibus consequatur. Quam placeat ut eligendi enim voluptatum.

            </p>
            <div className="container-perfil">
            <div>
            <img className="perfil" src={equipeperfil} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil} alt="" />
            <p>Rosane</p>
            </div>
            <div>
            <img className="perfil" src={equipeperfil} alt="" />
            <p>Rosane</p>
            </div>
            </div>
          
            
            
            
            <br />

        </div>
      </div>
    );
  }
}
