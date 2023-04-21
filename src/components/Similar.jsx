import { Button, Card, Group, Paper, Text } from "@mantine/core";

const SimilarPokemon = () => {
  return (
    <>
      <h3 className="text-center">Similar</h3>
      <div className="grid grid-cols-2 pb-6 mb-3">
        <Card
          shadow="sm"
          padding="sm"
          radius="xl"
          className="relative overflow-visible w-40 h-36"
        >
          <div className="h-20 bg-pokemonBg rounded-2xl text-center relative">
            <img
              src="https://archives.bulbagarden.net/media/upload/a/a0/0006Charizard-Mega_Y.png"
              alt="Chizard"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 h-24 -translate-y-4"
            />
          </div>

          <Text weight={500} className="text-center text-2xl">
            charizard
          </Text>
        </Card>

        <Card
          shadow="sm"
          padding="sm"
          radius="xl"
          className="relative overflow-visible w-40 h-36"
        >
          <div className="h-20 bg-pokemonBg rounded-2xl text-center relative">
            <img
              src="https://archives.bulbagarden.net/media/upload/a/a0/0006Charizard-Mega_Y.png"
              alt="Chizard"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 h-24 -translate-y-4"
            />
          </div>

          <Text weight={500} className="text-center text-2xl">
            charizard
          </Text>
        </Card>
      </div>
    </>
  );
};

export default SimilarPokemon;
