import "../styles/Footer.css";
import dev from "../images/devs4good.webp";
import { FaAddressBook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

function ColorSchemesExample() {
  return (
    <>
      <nav className="footer">
        <p className="endereco">
          <FaAddressBook /> - Parque das Missões, Duque de Caxias, RJ, Brasil
        </p>
        <p className="endereco">
          <BsFillTelephoneFill /> - Telefone:(21) 99506-7449
        </p>

        <p className="endereco">
          <a href="https://www.devs4good.com.br">
            By Devs4Good © 2023{" "}
            <img className='imgfooter'src={dev} alt="" />
          </a>
        </p>
      </nav>
    </>
  );
}

export default ColorSchemesExample;
