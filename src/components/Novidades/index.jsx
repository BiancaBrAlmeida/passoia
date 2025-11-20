import "./novidades.scss";
import novidades from "../../assets/novidades.jpg";

function Novidades() {
  return (
    <>
      <h2>NOVIDADES PARA VOCÊ</h2>
      <img className="novidades" src={novidades} alt="Banner de novidades" />
    </>
  );
}
export default Novidades;
