import { Button, Card, Group, Paper, Text } from "@mantine/core";

const SimilarPokemon = ({ targetPokemon, allPokemon }) => {
  //Function to find similar Pokemons
  function findSimilarPokemon(targetPokemon, allPokemon) {
    const targetTypes = targetPokemon.types.map((typeObj) => typeObj.type.name);
    const similarPokemon = allPokemon.filter((pokemon) => {
      const pokemonTypes = pokemon.types.map((typeObj) => typeObj.type.name);
      return targetTypes.some((type) => pokemonTypes.includes(type));
    });

    // Removing the target Pokémon from the similar Pokémon array
    return similarPokemon.filter((pokemon) => pokemon.id !== targetPokemon.id);
  }

  const similarPokemon = findSimilarPokemon(targetPokemon, allPokemon);
  return (
    <>
      <h3 className="text-center pt-0 mt-2 pb-2 sm:text-lg text-md">
        Similar Pokémon
      </h3>
      <div className="sm:grid grid  grid-cols-2 pb-6 mb-3 sm:gap-6 sm:max-w-[80%] mx-auto">
        {similarPokemon.map((pokemon) => (
          <Card
            key={pokemon.id}
            shadow="sm"
            padding="xs"
            radius={16}
            className="relative overflow-visible w-24   sm:w-full mx-auto sm:h-32"
          >
            <div className="sm:h-16 h-12 bg-pokemonBg rounded-xl text-center relative">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 h-16 sm:h-20 -translate-y-4"
              />
            </div>
            <Text
              weight={500}
              className="text-center sm:text-base text-xs pt-2"
            >
              {pokemon.name}
            </Text>
          </Card>
        ))}
      </div>
    </>
  );
};

export default SimilarPokemon;
