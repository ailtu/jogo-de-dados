"use client"

import React, { useState } from "react";

const valorDado = () => Math.floor(Math.random() * 6) + 1;

export default function JogoDeDados() {

  const [rodada, setRodada] = useState(1);
  const [pontuacaoJogador1, setPontuacaoJogador1] = useState(0);
  const [pontuacaoJogador2, setPontuacaoJogador2] = useState(0);
  const [mensagem] = useState("Clique para jogar os dados");
  const [dadoJogador1, setDadoJogador1] = useState(null);
  const [dadoJogador2, setDadoJogador2] = useState(null);

  const jogarRodada = () => {

    if (rodada > 5) return;
    const valorDadoJ1 = valorDado();
    const valorDadoJ2 = valorDado();
    setDadoJogador1(valorDadoJ1);
    setDadoJogador2(valorDadoJ2);

    if (valorDadoJ1 > valorDadoJ2) {
      setPontuacaoJogador1(pontuacaoJogador1 + 1);
    } else if (valorDadoJ1 < valorDadoJ2) {
      setPontuacaoJogador2(pontuacaoJogador2 + 1);
    }
    setRodada(rodada + 1);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "white", color: "black", minHeight: "100vh" }}>
      <p>Rodada {rodada > 5 ? "Finalizada" : rodada} de 5</p>
      <p>{mensagem}</p>
      <p> Jogador 1 {pontuacaoJogador1} // Jogador 2 {pontuacaoJogador2} </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
        <div style={{ width: "50px", height: "50px", border: "2px solid black", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", backgroundColor: "white", color: "black" }}>
          {dadoJogador1}
        </div>
        <div style={{ width: "50px", height: "50px", border: "2px solid black", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", backgroundColor: "white", color: "black" }}>
          {dadoJogador2}
        </div>
      </div>

      {rodada <= 5 ? (
        <button onClick={jogarRodada} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "white", color: "black", border: "1px solid black" }}>Jogar os dados</button>
      ) : (
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          {pontuacaoJogador1 > pontuacaoJogador2 ? "Jogador 1 venceu!" : pontuacaoJogador1 < pontuacaoJogador2 ? "Jogador 2 venceu!" : "Empate!"}
        </p>
      )}
    </div>
  );
}
