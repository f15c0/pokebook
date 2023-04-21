import { Link } from "react-router-dom";
import Search from "./Search";
import { Text, useMantineTheme } from "@mantine/core";
const Home = () => {
  const theme = useMantineTheme();
  return (
    <div className="flex justify-center flex-col items-center mt-20 ">
      <h1 className="font-semibold text-3xl">Logo</h1>
      <h3 className="text-3xl py-0 my-0 flex items-center">
        Poké
        <Text className="ml-1" color={theme.primaryColor}>
          book
        </Text>
      </h3>
      <p className="py-2">
        Largest Pokémon index with information <br /> about every Pokemon you
        can think of.
      </p>
      <div className="pt-3 mt-4">
        <Search />
      </div>
      <div className="pt-3">
        <Link to="/list-view" className="text-slate-900">
          View all
        </Link>
      </div>
    </div>
  );
};

export default Home;
