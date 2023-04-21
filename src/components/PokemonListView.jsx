import { useEffect, useState } from "react";
import PokemonPagination from "./Pagination";
import PokemonCard from "./PokemonCard";
import Topbar from "./Topbar";
import Search from "./Search";

// Fetching Pokemon Data
async function fetchAllPokemonData(limit = 10, offset = 0) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
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
  // Setting Pokemon State
  const [pokemonData, setPokemonData] = useState([]);

  // Setting State for current page and items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Fetching Pokemon Data in useEffect Hook
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getPokemonData = async () => {
      const offset = (currentPage - 1) * itemsPerPage;
      const data = await fetchAllPokemonData(itemsPerPage, offset);
      setPokemonData(data);
    };

    getPokemonData();

    // Aborting the fetch requests on component unmount or when a new request is made
    return () => {
      controller.abort();
    };
  }, [currentPage, itemsPerPage]);

  // Setting State for Searching Pokemon
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchUpdate = (query) => {
    setSearchQuery(query);
  };

  //Filtering Pokemon
  const filteredPokemonData = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Handling page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="">
      <Topbar onSearchUpdate={handleSearchUpdate} />

      <div className="mt-10 pb-4 mb-6 max-w-[80%] mx-auto">
        {pokemonData.length ? (
          <div className="grid xl:grid-cols-4 flex-grow lg:grid-cols-3 md:grid-cols-2 sm:grid-col-2  gap-3">
            {filteredPokemonData.length ? (
              filteredPokemonData.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  allPokemon={pokemonData}
                />
              ))
            ) : (
              <h3 className="text-center text-lg">
                Sorry, No Pokémon found! 🙇🏾‍♂️
              </h3>
            )}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
        <div className="mx-4 my-8 hidden md:block">
          <PokemonPagination
            pokemon={pokemonData}
            onPageChange={handlePageChange}
            onItemsPerPageChange={(value) => setItemsPerPage(value)}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ListView;
