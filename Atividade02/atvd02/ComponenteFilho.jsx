import React, { useContext } from "react";
import PokemonContext from "./PokemonContext";
import ComponenteNeto from "./ComponenteNeto";

function ComponenteFilho() {
  const { numero, contador } = useContext(PokemonContext);


  return (
    <div>
      <h2>Componente Filho</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero +
          1}.png`}
        alt="Pokemon"
      />
      <ComponenteNeto />
      {contador}
    </div>
  );
}

export default ComponenteFilho;