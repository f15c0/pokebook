import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  //Creating a click search function
  const handleSearchClick = () => {
    navigate("/list-view");
  };

  return (
    <TextInput
      radius="xl"
      className="border-4 border-red-500"
      size="md"
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
