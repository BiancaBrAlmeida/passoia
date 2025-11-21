import "./footer.scss";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import pix from "../../assets/pix.svg";
import boleto from "../../assets/boleto.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import twitter from "../../assets/twitter.svg";

function Footer() {
  return (
    <footer>
      <section className="footer_atend">
        <h3>ATENDIMENTO</h3>
        <ul>
          <li>
            <a href="">Fale Conosco</a>
          </li>
          <li>
            <a href="">Perguntas Frequentes</a>
          </li>
          <li>
            <a href="">Meus Pedidos</a>
          </li>
          <li>
            <a href="">Nossas Lojas</a>
          </li>
        </ul>
      </section>
      <section className="footer_pag">
        <h3>FORMAS DE PAGAMENTO</h3>
        <div className="footer_pag_icon">
          <img
            className="img_pag_icon"
            src={mastercard}
            alt="Icone Mastercard"
          />
          <img className="img_pag_icon" src={visa} alt="Icone Visa" />
          <img className="img_pag_icon" src={pix} alt="Icone Pix" />
          <img className="img_pag_icon" src={boleto} alt="Icone Boleto" />
        </div>
      </section>
      <section className="footer_redes">
        <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
        <div className="footer_redes_icon">
          <img
            className="img_redes_icon"
            src={instagram}
            alt="Icone Instagram"
          />
          <img className="img_redes_icon" src={facebook} alt="Icone Facebook" />
          <img className="img_redes_icon" src={youtube} alt="Icone Youtube" />
          <img className="img_redes_icon" src={twitter} alt="Icone Twitter" />
        </div>
      </section>
    </footer>
  );
}
export default Footer;
