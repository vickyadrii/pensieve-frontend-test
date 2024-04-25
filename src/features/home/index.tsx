'use client'

import ListPokemon from "./list-pokemon/ListPokemon";

type HomeProps = {
  pokemonDetails?: PokemonDetail[];
};

const Home: React.FC<HomeProps> = ({ pokemonDetails }) => {
  
  return (
    <div className="flex flex-col items-center gap-10">
      <ListPokemon pokemonDetails={pokemonDetails} />
    </div>
  );
};

export default Home;
