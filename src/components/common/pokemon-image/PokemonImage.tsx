import Image from "next/image";

type PokemonImageProps = {
  pokemon?: PokemonDetail;
};

const PokemonImage: React.FC<PokemonImageProps> = ({ pokemon }) => {
  const pokemonImage = pokemon?.sprites?.other?.["official-artwork"].front_default;

  return (
    <div className="relative flex justify-center">
      <div className="w-20 h-20 left-1/2 shrink-0 -translate-x-1/2 top-0 bg-emerald-200/95 rounded-full p-5 absolute"></div>
      <Image
        src={pokemonImage ?? ""}
        alt={pokemon?.name || ""}
        width={700}
        height={700}
        className="w-40 object-cover relative z-20"
      />
    </div>
  );
};

export default PokemonImage;
