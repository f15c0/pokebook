import { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import ColorThief from "colorthief";

import {
  Card,
  Text,
  Button,
  Group,
  Drawer,
  createStyles,
  SegmentedControl,
  rem,
  Skeleton,
} from "@mantine/core";
import { AiFillEye } from "react-icons/ai";
import { CgArrowLeft } from "react-icons/cg";
import AboutPokemon from "./About";
import PokemonStats from "./Stats";
import SimilarPokemon from "./Similar";

//Getting Dominant color
function getDominantColor(imageUrl, callback) {
  const img = document.createElement("IMG");
  const colorThief = new ColorThief();
  img.setAttribute("src", imageUrl);
  img.crossOrigin = "Anonymous";
  if (img.complete) {
    callback(colorThief.getColor(img));
  } else {
    img.addEventListener("load", function () {
      callback(colorThief.getColor(img));
    });
  }
}

function darkenColor(color, percent) {
  return {
    r: Math.max(Math.round(color.r * (1 - percent / 100)), 0),
    g: Math.max(Math.round(color.g * (1 - percent / 100)), 0),
    b: Math.max(Math.round(color.b * (1 - percent / 100)), 0),
  };
}
function lightenColor(color, percent) {
  return {
    r: Math.min(color.r + Math.round(color.r * (percent / 100)), 255),
    g: Math.min(color.g + Math.round(color.g * (percent / 100)), 255),
    b: Math.min(color.b + Math.round(color.b * (percent / 100)), 255),
  };
}

const PokemonCard = ({ pokemon, allPokemon, isLoading }) => {
  const imgURL = `${pokemon.sprites.other.dream_world.front_default}`;
  const [rgb, setRgb] = useState([]);

  useEffect(() => {
    getDominantColor(imgURL, setRgb);
  }, [imgURL]);

  //Creating a color tone for the Light and dark color
  const lighterColor = lightenColor({ r: rgb[0], g: rgb[1], b: rgb[2] }, 50); // 50% lighter
  const darkerColor = darkenColor({ r: rgb[0], g: rgb[1], b: rgb[2] }, 50); // 50% darker

  //Setting Hover State
  const [hovered, setHovered] = useState(false);

  //setting state for Modal
  const [opened, { open, close }] = useDisclosure(false);

  //Pokemon profile state
  const [content, setContent] = useState("About");

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  //
  //Helper Function to Capitalize a word
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  //
  const getTypeEmoji = (typeName) => {
    switch (typeName) {
      case "fire":
        return "🔥";
      case "electric":
        return "⚡";
      case "ground":
        return "🪨";
      case "flying":
        return "🦋";
      case "poison":
        return "☠️";
      case "grass":
        return "🌿";
      case "normal":
        return "🐻";
      case "bug":
        return "🐞";
      case "water":
        return "💦";
      case "fighting":
        return "🤺";
      case "psychic":
        return "📿";
      default:
        return "";
    }
  };

  if (isLoading) {
    return (
      <div className="mt-10 mx-3 sm:mx-2">
        <Card
          shadow="sm"
          padding="sm"
          radius="md"
          className="relative overflow-visible"
        >
          <div className="h-36  bg-pokemonBg rounded-lg text-center relative">
            <Skeleton height="100%" />
          </div>
          <div className="pt-3">
            <Skeleton height={20} />
          </div>
          <div className="pt-3 flex space-x-4 justify-center">
            <Skeleton height={10} width={100} />
            <Skeleton height={10} width={100} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-10 mx-3 sm:mx-2 ">
      <Card
        shadow="sm"
        padding="sm"
        radius="md"
        className="relative overflow-visible  "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-36  bg-pokemonBg rounded-lg text-center relative">
          <img
            src={imgURL}
            alt={pokemon.name}
            className="text-center absolute top-[-35%] left-1/2 transform -translate-x-1/2 h-44"
          />
        </div>

        <Text className="text-center pt-3 text-2xl font-medium font-clashdisplay">
          {pokemon?.name}
        </Text>
        <Group position="center" className="flex pb-2 pt-1">
          {pokemon.types.map((typeObj) => (
            <Button
              key={typeObj.type.name}
              variant="light"
              color="gray"
              radius={24}
              className="flex justify-between items-center text-sm font-generalsans font-normal"
              compact
            >
              {getTypeEmoji(typeObj.type.name)}
              {capitalizeFirstLetter(typeObj.type.name)}
            </Button>
          ))}
        </Group>

        {hovered && (
          <div className="py-3 transition-all duration-300 ease-in-out">
            <Button
              onClick={open}
              rightIcon={<AiFillEye size={18} />}
              className="rounded-2xl text-xs sm:text-sm text-white border-none transition ease-in-out duration-150 cursor-pointer  w-full py-3"
            >
              <div className=" font-generalsans font-normal flex items-center justify-start mx-3 space-x-6 text-xs sm:text-sm">
                <span>View Pokemon</span>
              </div>
            </Button>
          </div>
        )}
      </Card>

      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        position="right"
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        <div>
          <div
            className="h-64  rounded-3xl text-center relative"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgb(${lighterColor.r}, ${lighterColor.g}, ${lighterColor.b}), rgb(${darkerColor.r}, ${darkerColor.g}, ${darkerColor.b}))`,
            }}
          >
            <img
              src={imgURL}
              alt={pokemon.name}
              className="h-56 absolute bottom-[-18%] left-1/2 transform -translate-x-1/2"
            />
            <span
              onClick={close}
              className="transition ease-in-out duration-150 hover:shadow-md absolute left-3 top-3 bg-white py-2 px-3 rounded-lg cursor-pointer"
            >
              <CgArrowLeft className=" text-3xl " />
            </span>
          </div>

          <div className=" border-none shadow-sm">
            <h1 className="text-center pb-0 mb-0 pt-2 font-clashdisplay font-semibold">
              {pokemon.name}
            </h1>
            <Group position="center" mb="xs" className="flex pb-3 mt-1 pt-1">
              {pokemon.types.map((typeObj) => (
                <Button
                  key={typeObj.type.name}
                  variant="light"
                  color="gray"
                  className="text-sm rounded-3xl px-6 font-generalsans font-normal"
                  compact
                >
                  {getTypeEmoji(typeObj.type.name)}{" "}
                  {capitalizeFirstLetter(typeObj.type.name)}
                </Button>
              ))}
            </Group>
          </div>
        </div>
        {content === "About" && <AboutPokemon pokemon={pokemon} />}
        {content === "Stats" && <PokemonStats pokemon={pokemon} />}
        {content === "Similar" && (
          <SimilarPokemon targetPokemon={pokemon} allPokemon={allPokemon} />
        )}

        <Group position="center" className="pt-4 mt-2 bottom-0 ">
          <SegmentedControl
            transitionDuration={500}
            transitionTimingFunction="linear"
            value={content}
            onChange={setContent}
            radius="xl"
            size="md"
            data={["About", "Stats", "Similar"]}
            className="shadow-inner"
          />
        </Group>
      </Drawer>
    </div>
  );
};

export default PokemonCard;
