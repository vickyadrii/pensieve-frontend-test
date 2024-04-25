type Pokemon = {
  name?: string;
  url?: string;
};

type DataPokemon = {
  count?: number;
  next?: string;
  previous?: string;
  results?: Pokemon[];
};

type PokemonType = {
  name?: string;
  url?: string;
};

type PokemonTypes = {
  slot?: 1;
  type?: PokemonType;
};

type PokemonSpriteOther = {
  "official-artwork": {
    front_default?: string;
    front_shiny?: string;
  };
};

type PokemonSprite = {
  back_default?: string;
  back_shiny?: string;
  front_default?: string;
  front_shiny?: string;
  other?: PokemonSpriteOther;
};

type PokemonSpecies = {
  name?: string;
  url?: string;
};

type PokemonDetail = {
  id?: number;
  abilities?: string;
  base_experience?: number;
  types?: PokemonTypes[];
  type?: string;
  height?: number;
  weight?: number;
  name?: string;
  species?: PokemonSpecies;
  sprites?: PokemonSprite;
};
