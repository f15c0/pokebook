import { Link } from "react-router-dom";
import Search from "../components/Search";
import { Text, useMantineTheme } from "@mantine/core";
import Logo from "../assets/logo.png";
const Home = () => {
  const theme = useMantineTheme();
  return (
    <>
      <div className="flex justify-center flex-col items-center mt-16 gap-1 ">
        <div>
          <Link to="/">
            <img src={Logo} alt="Pokebook Logo" className="h-32 sm:h-[100%]" />
          </Link>
        </div>
        <h3 className="text-3xl py-0 my-0 flex items-center">
          Poké
          <Text className="ml-1" color={theme.primaryColor}>
            book
          </Text>
        </h3>
        <p className="pb-2 text-sm sm:text-base">
          Largest Pokémon index with information <br /> about every Pokemon you
          can think of.
        </p>
      </div>
      <div className="pt-3 mt-4 w-[80%] sm:w-[55%] md:w-[50%] lg:w-[30%] mx-auto ">
        <Search />
      </div>
      <div className="flex justify-center pt-4">
        <Link to="/list-view" className="text-slate-900">
          View all
        </Link>
      </div>
    </>
  );
};

export default Home;
