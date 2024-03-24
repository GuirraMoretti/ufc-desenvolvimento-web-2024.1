import React, { useContext } from "react";
import PokemonContext from "./PokemonContext";

function ComponenteNeto() {
  const { numero, contador } = useContext(PokemonContext);

  return (
    <div>
      <h2>Componente Neto</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero +
          2}.png`}
        alt="Pokemon"
      />
      {contador}
    </div>
  );
}

export default ComponenteNeto;