import React, { useState } from "react";
import PokemonCard from "../pokemon-card/PokemonCard";
import { useDebouncedCallback } from "use-debounce";

type ListPokemonProps = {
  pokemonDetails?: PokemonDetail[];
};

const ListPokemon: React.FC<ListPokemonProps> = ({ pokemonDetails }) => {
  const [sortBy, setSortBy] = useState<"id" | "name">("id");
  const [keyword, setKeyword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSearch = useDebouncedCallback((term?: string) => {
    setIsLoading(true);

    setKeyword(term ?? "");

    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  }, 750);

  const filteredPokemon = pokemonDetails?.filter((pokemon) =>
    pokemon?.name?.toLowerCase().includes(keyword.toLowerCase())
  );

  const filteredByType = selectedType
    ? filteredPokemon?.filter((pokemon) => pokemon.type?.includes(selectedType))
    : filteredPokemon;

  const sortedPokemon = filteredByType?.sort((a: any, b: any) => {
    if (sortBy === "id") {
      return sortOrder === "asc" ? a?.id - b?.id : b?.id - a?.id;
    } else if (sortBy === "name") {
      return sortOrder === "asc" ? a?.name?.localeCompare(b?.name) : b?.name.localeCompare(a?.name);
    }
    return 0;
  });

  return (
    <>
      <h1 className="md:text-2xl text-xl font-semibold underline underline-offset-4">Pokedex</h1>
      <div className="flex items-center gap-20">
        <div className="flex items-center gap-3">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by name..."
            className="border px-5 py-1.5 rounded-md"
          />
        </div>

        <div className="">
          Type:
          <select
            onChange={(e) => setSelectedType(e.target.value === "default" ? null : e.target.value)}
            className="ml-2 border px-2 py-1 rounded-md"
          >
            <option value="default">-All-</option>
            <option value="grass">Grass</option>
            <option value="poison">Poison</option>
            <option value="fire">Fire</option>
            <option value="flying">Flying</option>
            <option value="bug">Bug</option>
            <option value="normal">Normal</option>
          </select>
        </div>

        <div className="flex items-center">
          Sort by:
          <select
            onChange={(e) => setSortBy(e.target.value as "id" | "name")}
            className="ml-2 border px-2 py-1 rounded-md"
          >
            <option value="id">ID</option>
            <option value="name">Name</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="ml-2 border px-2 py-1 rounded-md"
          >
            {sortOrder === "asc" ? "↓" : "↑"}
          </button>
        </div>
      </div>

      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        {!isLoading ? (
          sortedPokemon?.length !== 0 ? (
            sortedPokemon?.map((pokemon, index) => <PokemonCard pokemon={pokemon} key={index} />)
          ) : (
            <div>No data</div>
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default ListPokemon;
