import { Paper } from "@mantine/core";

const AboutPokemon = ({ pokemon }) => {
  return (
    <>
      <h3 className="text-center pb-0 mb-0 font-clashdisplay font-semibold">
        About
      </h3>
      <Paper
        shadow="md"
        p="xs"
        className="mt-0 pt-0 pb-6 mb-4 bg-gray-50 shadow-sm"
      >
        <div className="flex justify-center space-x-6 ">
          <div>
            <p className="font-clashdisplay font-normal">Height</p>
            <p className="font-clashdisplay font-normal">Weight</p>
            <p className="font-clashdisplay font-normal">Abilities</p>
          </div>
          <div>
            <p className="font-semibold font-clashdisplay">
              {(pokemon.height * 0.1).toFixed(1)}m
            </p>
            <p className="font-semibold font-clashdisplay">
              {(pokemon.weight * 0.1).toFixed(1)}kg
            </p>
            <p className="font-semibold font-clashdisplay ">
              {pokemon.abilities.map((abilityObj) => (
                <li key={abilityObj.ability.name} className="py-0 my-0 text-sm">
                  {abilityObj.ability.name}
                </li>
              ))}
            </p>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default AboutPokemon;
