import { TextInput, ActionIcon, useMantineTheme, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  // Creating a click search function
  const handleSearchClick = () => {
    navigate("/list-view");
  };

  // Customizing styles for TextInput
  const customTextInputStyles = {
    input: {
      width: "100%",
      border: `4px solid ${theme.fn.primaryColor()}`,
      fontFamily: "GeneralSans-Regular",
      backgroundColor: "transparent",
    },
  };

  return (
    <TextInput
      styles={customTextInputStyles}
      radius="xl"
      size="lg"
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
          onClick={handleSearchClick}
        >
          {theme.dir === "ltr" ? (
            <AiOutlineSearch size="1.1rem" stroke={1.5} />
          ) : (
            <AiOutlineSearch size="1.1rem" stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Enter pokemon name"
      rightSectionWidth={42}
    />
  );
};

export default Search;
