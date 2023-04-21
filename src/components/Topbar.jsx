import {
  Header,
  TextInput,
  Burger,
  ActionIcon,
  useMantineTheme,
  MediaQuery,
  Button,
  useMantineColorScheme,
  Modal,
  Box,
  Portal,
  rem,
  Text,
} from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ColorTheme";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Topbar = ({ onSearchUpdate }) => {
  const [openColorModal, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { themeColor, setThemeColor } = useTheme();

  //Function to change Color
  const handleColorChange = (newColor) => {
    setThemeColor(newColor);
    close();
  };
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      {/* Pinned Header */}
      <Portal>
        <Box
          className="flex items-center justify-between"
          sx={(theme) => ({
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            padding: theme.spacing.xs,
            height: rem(60),
            zIndex: 1000000,
            transform: `translate3d(0, ${!pinned ? 0 : rem(-110)}, 0)`,
            transition: "transform 400ms ease",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          })}
        >
          <div>
            <Link
              to="/"
              className="md:flex items-center no-underline space-x-3 hidden"
            >
              <img src={Logo} alt="Pokebook Logo" className="h-16" />
              <span className="text-2xl font-bold pb-2 my-0 text-slate-800 flex items-center">
                Poké
                <Text color={theme.primaryColor}>book</Text>
              </span>
            </Link>
          </div>
          <Button
            onClick={open}
            className="rounded-full border-2 shadow-md border-white"
          ></Button>
        </Box>
      </Portal>
      {/* End of Pinned Header */}

      <Header height={{ base: 50, md: 70 }} className="shadow-sm">
        <div className="flex items-center justify-between">
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <div className="mx-4 mt-4">
            <Link
              to="/"
              className="md:flex items-center no-underline space-x-3 hidden"
            >
              <img src={Logo} alt="Pokebook Logo" className="h-16" />
              <span className="text-2xl font-bold pb-2 my-0 text-slate-800 flex items-center">
                Poké
                <Text color={theme.primaryColor}>book</Text>
              </span>
            </Link>
          </div>

          <div className="md:w-[30%] ">
            <TextInput
              icon={<AiOutlineSearch size="1.1rem" stroke={1.5} />}
              radius="xl"
              className="border-4 hidden sm:block text-sm sm:text-md"
              size="md"
              placeholder="Enter pokemon name"
              rightSectionWidth={42}
              onChange={(event) => onSearchUpdate(event.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4 mx-4 ">
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "gray"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
              className="hidden md:block"
            >
              {dark ? <BsSun size="1.1rem" /> : <FaMoon size="1.1rem" />}
            </ActionIcon>

            <Modal
              opened={openColorModal}
              classNames={{
                header: "shadow-sm flex justify-center",
                title: "text-xl font-bold items-center",
                body: "px-0",
              }}
              onClose={close}
              title={<Text color={theme.fn.primaryColor()}>Choose Theme</Text>}
              size="sm"
              centered
              withCloseButton={false}
              radius="xl"
              transitionProps={{
                transition: "fade",
                duration: 400,
                timingFunction: "linear",
              }}
              overlayProps={{
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.primaryColor,
                opacity: 0.2,
                blur: 3,
              }}
            >
              <div className="flex items-center justify-center py-6 space-x-4 bg-slate-50 sm:py-9">
                <Button
                  onClick={() => handleColorChange("enyata-pink")}
                  color="enyata-pink"
                  className="rounded-full border-2 sm:p-8  shadow-md border-white"
                ></Button>
                <Button
                  onClick={() => handleColorChange("enyata-blue")}
                  color="enyata-blue"
                  className="rounded-full sm:p-8 border-2 shadow-md border-white"
                ></Button>
                <Button
                  onClick={() => handleColorChange("enyata-gold")}
                  color="enyata-gold"
                  className="rounded-full sm:p-8 border-2 shadow-md border-white"
                ></Button>
                <Button
                  onClick={() => handleColorChange("enyata-violet")}
                  color="enyata-violet"
                  className="rounded-full sm:p-8 border-2 shadow-md border-white"
                ></Button>
              </div>
            </Modal>
            <Button
              onClick={open}
              className="rounded-full border-2 shadow-md border-white"
            ></Button>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Topbar;
