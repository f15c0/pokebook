import { Text, useMantineTheme } from "@mantine/core";
import PropTypes from "prop-types";
const Layout = ({ children }) => {
  const theme = useMantineTheme();
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">My App</h1>
        </div>
      </header> */}
      <main className="flex-grow container mx-auto pb-4">{children}</main>
      <footer className="bg-gray-200 py-4 mt-auto text-center bg-opacity-20  shadow-xl ">
        <div className="container">
          <div className="flex justify-center items-center ">
            © 2023
            <Text c={theme.fn.primaryColor()} className="mx-2 font-bold">
              Enyata
            </Text>
            Frontend Task.
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
