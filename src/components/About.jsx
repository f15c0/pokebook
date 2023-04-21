import { Paper } from "@mantine/core";

const AboutPokemon = ({ pokemon }) => {
  return (
    <>
      <h3 className="text-center pb-0 mb-0">About</h3>
      <Paper shadow="md" p="xs" className="mt-0 pt-0 pb-6 mb-4">
        <div className="grid grid-cols-1">
          <ul className="list-none text-center space-y-3">
            <li className="flex justify-center space-x-6">
              <span>Height</span>
              <span className="font-bold">{pokemon.height * 0.1}m</span>
            </li>
            <li className="flex justify-center space-x-4">
              <span>Weight</span>
              <span className="font-bold">{pokemon.weight * 0.1}kg</span>
            </li>
            <li className="flex justify-center space-x-6">
              <span>Abilities</span>
              <span className="font-bold">
                <ul className="text-sm list-disc">
                  {pokemon.abilities.map((abilityObj) => (
                    <li key={abilityObj.ability.name}>
                      {abilityObj.ability.name}
                    </li>
                  ))}
                </ul>
              </span>
            </li>
          </ul>
        </div>
      </Paper>
    </>
  );
};

export default AboutPokemon;
