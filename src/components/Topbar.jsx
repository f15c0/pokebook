import {
  Header,
  TextInput,
  Burger,
  ActionIcon,
  useMantineTheme,
  Navbar,
  Text,
  MediaQuery,
  Button,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Topbar = ({ onSearchUpdate }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
      <Header height={{ base: 50, md: 70 }} p="md">
        <div className="flex items-center justify-between mx-6">
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <h1 className="m-0 hidden md:block">Logo</h1>

          <div className="md:w-[30%] ">
            <TextInput
              icon={<AiOutlineSearch size="1.1rem" stroke={1.5} />}
              radius="xl"
              className="border-4 border-red-500"
              size="md"
              placeholder="Enter pokemon name"
              rightSectionWidth={42}
              onChange={(event) => onSearchUpdate(event.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <BsSun size="1.1rem" /> : <FaMoon size="1.1rem" />}
            </ActionIcon>

            <Button className="rounded-full border-2 shadow-md border-white"></Button>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Topbar;
