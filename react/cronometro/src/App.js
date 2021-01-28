import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Cronômetro</h1>
      <p>
        Criar um cronômetro que será usado na transmissão online de partidas de
        futebol para exibir o tempo de jogo!
      </p>

      <h2>Features desejadas</h2>
      <ol>
        <li>Deve apresentar minutos e segundos</li>
        <li>Deve poder ser pausado</li>
        <li>Deve poder ser zerado (reset)</li>
        <li>Ao chegar em 60 minutos deve pausar e zerar</li>
        <li>
          Ao pausar, o tempo pode ser editado e quando retomar deve continuar a
          partir do momento inserido.
        </li>
      </ol>

      <h2>Pontos de atenção</h2>
      <ol>
        <li>O tempo deve ser preciso</li>
        <li>Não vale se basear em cronômetros prontos em react</li>
        <li>Deve ser testado</li>
      </ol>
    </div>
  );
}
