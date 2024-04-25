import { BASE_URL } from "@/constants/config";
import PokemonByID from "@/features/pokemon-by-id/PokemonByID";

async function getDataPokemonDetail(url: string) {
  const res = await fetch(url);
  const data = res.json();

  return data;
}

export default async function HomePageByID({ params }: { params: { slug: string } }) {
  const pokemonDetail = await getDataPokemonDetail(`${BASE_URL}/pokemon/${params.slug}`);

  return <PokemonByID pokemon={pokemonDetail} />;
}
