import { useEffect, useState } from "react";
import PokemonPagination from "./Pagination";
import PokemonCard from "./PokemonCard";
import Topbar from "./Topbar";

//Fetch
async function fetchAllPokemonData(limit = 8) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
  );
  const data = await response.json();

  const pokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      return pokemonData;
    }),
  );

  return pokemons;
}

const ListView = () => {
  //Setting Pokemon State
  const [pokemonData, setPokemonData] = useState([]); //

  //Fetching Pokemon Data in Effect Hook
  useEffect(() => {
    const getPokemonData = async () => {
      const data = await fetchAllPokemonData();
      setPokemonData(data);
    };

    getPokemonData();
  }, []);

  //Setting State for Searchig Pokemon
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchUpdate = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="">
      <Topbar onSearchUpdate={handleSearchUpdate} />

      <div className="mt-10 pb-4 mb-6 max-w-[80%] mx-auto">
        {pokemonData.length ? (
          <div className="grid xl:grid-cols-4 flex-grow lg:grid-cols-3 md:grid-cols-2 sm:grid-col-2  gap-3">
            {pokemonData
              .filter((pokemon) =>
                pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
              )
              .map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
        <div className="mx-4 my-8">
          <PokemonPagination pokemon={pokemonData} />
        </div>
      </div>
    </div>
  );
};

export default ListView;
