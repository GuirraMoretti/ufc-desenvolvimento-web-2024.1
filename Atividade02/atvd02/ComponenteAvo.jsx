import React, { useState } from "react";
import ComponenteFilho from "./ComponenteFilho";
import PokemonContext from "./PokemonContext";

function ComponenteAvo() {
  const [numero, setNumero] = useState(1);
  const [contador, setContador] = useState(1)

  return (
    <PokemonContext.Provider value={{ contador,numero, setNumero }}>
      <div>
        <h2>Componente Avô</h2>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
          alt="Pokemon"
        />
        <button onClick={() => setContador((contador) => contador + 1)}>
          Incrementar
        </button>
        <ComponenteFilho />
      </div>
    </PokemonContext.Provider>
  );
}

export default ComponenteAvo;
