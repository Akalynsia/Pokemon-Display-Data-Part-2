import React, { useState, useEffect } from "react";
import "./styles.css";
import PokeCards from "./component/PokeCards";
import { mockPokemonsData } from "./mock/pokeData";

export default function App() {
  const [sortedDatas, setSortedDatas] = useState([]);

  useEffect(() => {
    const sortedData = [...mockPokemonsData].sort(
      (first, second) => first.name.length - second.name.length
    );
    setSortedDatas(sortedData);
  }, []);

  return (
    <div className="App">
      <h1>2. Challenge: Loops</h1>
      {sortedDatas.map((pokemon) => (
        <PokeCards key={pokemon.name} pokemonData={pokemon} />
      ))}
    </div>
  );
}
