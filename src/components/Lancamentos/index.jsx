import { useState } from "react";
import "./lancamentos.scss";
import azul from "../../assets/azul.png";
import vermelho from "../../assets/vermelho.png";
import marrom from "../../assets/marrom.png";
import nude from "../../assets/nude.png";
import estrelas from "../../assets/estrelas.svg";
import batons1 from "../../assets/batons1.png";
import batons2 from "../../assets/batons2.png";
import batons3 from "../../assets/batons3.png";

function Lancamentos() {
  // essa linha serve para atualizar estados
  const [cor, setCor] = useState(vermelho);
  return (
    <>
      <h2>APROVEITE OS LANÇAMENTOS</h2>
      <section section className="lanca">
        <div className="kits">
          <img src={batons1} alt="" />
          <img src={batons2} alt="" />
          <img src={batons3} alt="" />
        </div>
        <img className="cor" src={cor} alt="Imagem de uma mulher com batom" />
        <div className="mulher">
          <img className="estrela" src={estrelas} alt="Estrelas" />
          <h3>Matte Premium</h3>
          <p>Cores disponível</p>
          <section className="batons_cores">
            <button
              className="btn_cores"
              id="vermelho"
              onClick={() => setCor(vermelho)}
            ></button>
            <button
              className="btn_cores"
              id="azul"
              onClick={() => setCor(azul)}
            ></button>
            <button
              className="btn_cores"
              id="marrom"
              onClick={() => setCor(marrom)}
            ></button>
            <button
              className="btn_cores"
              id="nude"
              onClick={() => setCor(nude)}
            ></button>
          </section>
          <h3 className="desc">Descrição</h3>
          <p className="texto_desc">
            O Batom Matte possui uma fórmula inovadora desenvolvida para
            entregar o máximo de cor na primeira aplicação com um deslize suave
            e macio. Tem acabamento matte aveludado e manteiga de manga que
            ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
            na hidratação dos lábios, textura fina e macia que não pesa nos
            lábios.
          </p>
        </div>
      </section>
    </>
  );
}
export default Lancamentos;
