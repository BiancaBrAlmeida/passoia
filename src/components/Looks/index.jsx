import "./looks.scss";
import labios from "../../assets/labios.png";
import olhos from "../../assets/olhos.jpg";
import rosto from "../../assets/rosto.png";
import tendencia from "../../assets/tendencia.png";

function Looks() {
  return (
    <>
      <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
      <section className="looks">
        <div className="cards">
          <button className="cards-btn">
            <img
              className="cards_img"
              src={labios}
              alt="Imagem de uma mulher passando gloss"
            />
            <span className="titles">LÁBIOS</span>
          </button>
        </div>
        <div className="cards">
          <button className="cards-btn">
            <img
              className="cards_img"
              src={olhos}
              alt="Imagem dos olhos de uma mulher com glitter dourado"
            />
            <span className="titles">OLHOS</span>
          </button>
        </div>
        <div className="cards">
          <button className="cards-btn">
            <img
              className="cards_img"
              src={rosto}
              alt="Imagem de uma mulher passando blush"
            />
            <span className="titles">ROSTO</span>
          </button>
        </div>
        <div className="cards">
          <button className="cards-btn">
            <img
              className="cards_img"
              src={tendencia}
              alt="Imagem de uma mulher uma paleta de cores na mão"
            />
            <span className="titles">TENDÊNCIA</span>
          </button>
        </div>
      </section>
    </>
  );
}
export default Looks;
