import { useMemo } from "react";
import Link from "next/link";
import PokemonImage from "@/components/common/pokemon-image/PokemonImage";
import PokemonTypes from "@/components/common/pokemon-types/PokemonTypes";

type PokemonCardProps = {
  pokemon?: PokemonDetail;
};

const PokemonCard: React.FC<PokemonCardProps> = async ({ pokemon }) => {
  

  return (
    <Link
      href={`/${pokemon?.id}`}
      className="flex flex-col gap-5 p-5 border rounded-xl hover:shadow-lg hover:shadow-slate-200 transition-shadow ease-in"
    >
      <PokemonImage pokemon={pokemon} />

      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <span className="text-slate-500 text-sm">#{pokemon?.id}</span>
          <h1 className="text-lg font-semibold capitalize">{pokemon?.name}</h1>
        </div>
        <PokemonTypes pokemon={pokemon} />
      </div>
    </Link>
  );
};

export default PokemonCard;
