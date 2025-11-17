import { useState } from "react";
import azul from "../../assets/azul.png";
import vermelho from "../../assets/vermelho.png";
import marrom from "../../assets/marrom.png";
import nude from "../../assets/nude.png";

function Lancamentos() {
  // essa linha serve para atualizar estados
  const [cor, setCor] = useState(vermelho);
  return (
    <>
      <h2>APROVEITE OS LANÇAMENTOS</h2>
      <img src={cor} alt="Imagem de uma mulher com batom" />
      <button onClick={() => setCor(vermelho)}>Vermelho</button>
      <button onClick={() => setCor(azul)}>Azul</button>
      <button onClick={() => setCor(marrom)}>Marrom</button>
      <button onClick={() => setCor(nude)}>Nude</button>
    </>
  );
}
export default Lancamentos;
