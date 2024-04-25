import { useMemo } from "react";
import PokemonImage from "@/components/common/pokemon-image/PokemonImage";

type PokemonByIDProps = {
  pokemon?: PokemonDetail;
};

const PokemonByID: React.FC<PokemonByIDProps> = ({ pokemon }) => {
  const renderTypeColor = (type: string) => {
    const typeStyles: Record<string, string> = {
      grass: "bg-lime-600/90 border-lime-200",
      poison: "bg-pink-700/95 border-pink-200",
      fire: "bg-orange-600/95 border-orange-200",
      flying: "bg-sky-400 border-sky-200",
      bug: "bg-green-500/95 border-green-200",
      normal: "bg-gray-500/95 border-green-200",
      default: "bg-sky-700/95 border-sky-200",
    };

    const style = typeStyles[type] || typeStyles.default || "";

    return (
      <span className={`py-1.5 px-5 text-sm ${style} text-white font-medium capitalize rounded-full`}>{type}</span>
    );
  };

  const renderTypes = useMemo(() => {
    const types = pokemon?.types;

    return (
      <div className="flex items-center justify-center gap-4">
        {types?.map((data) => renderTypeColor(data.type?.name || ""))}
      </div>
    );
  }, []);

  return (
    <div className="flex">
      <div className="flex items-center gap-4">
        <PokemonImage pokemon={pokemon} />
        <div className="flex flex-col gap-2">
          <h1 className="font">Name: {pokemon?.name}</h1>
          <div className="flex items-center gap-2">Type: {renderTypes}</div>
          <p>Height: {pokemon?.height}</p>
          <p>Weight: {pokemon?.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonByID;
