import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/features/home"), {
  ssr: true,
});

import { BASE_URL } from "@/constants/config";

async function getDataPokeAPI() {
  const res = await fetch(`${BASE_URL}/pokemon`);
  const data = await res.json();

  return data;
}

async function getDataPokemonDetail(url: string) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const pokemon = { ...data, type: data.types.map((type: any) => type.type.name).join(", ") };

    return pokemon;
  } catch (error) {
    console.error("Error fetching Pokemon detail:", error);
    throw error;
  }
}

export default async function HomePage() {
  const dataPokeAPI = await getDataPokeAPI();

  const pokemonDetails = await Promise.all(
    dataPokeAPI?.results?.map(async (pokemon: Pokemon) => await getDataPokemonDetail(pokemon.url || "")) || []
  );

  return <Home pokemonDetails={pokemonDetails} />;
}
