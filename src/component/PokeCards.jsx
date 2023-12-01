export default function PokeCards({ pokemonData }) {
  return (
    <div>
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_shiny} alt={pokemonData.name} />
    </div>
  );
}
