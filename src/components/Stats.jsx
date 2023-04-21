import { Progress, Paper, Text } from "@mantine/core";

function capitalizeFirstLetter(str) {
  return str
    .split("-") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "); // Join the words back together
}

const PokemonStats = ({ pokemon }) => {
  return (
    <>
      <h3 className="text-center">Stats</h3>
      <Paper shadow="md" p="xs" className="mt-0 pt-0 pb-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-2">
            {pokemon.stats.map((statObj) => (
              <li
                key={statObj.stat.name}
                className="flex items-center justify-between"
              >
                <Text className="w-32">
                  {capitalizeFirstLetter(statObj.stat.name)}
                </Text>
                <Progress
                  size="md"
                  className="mx-4 flex-grow"
                  value={statObj.base_stat}
                />
                <Text>{statObj.base_stat}</Text>
              </li>
            ))}
          </div>
        </div>
      </Paper>
    </>
  );
};

export default PokemonStats;
