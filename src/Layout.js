import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">My App</h1>
        </div>
      </header> */}
      <main className="flex-grow container mx-auto pb-4">{children}</main>
      <footer className="bg-gray-200 py-4 mt-auto text-center">
        <div className="container mx-auto">
          © 2023 <strong>Enyata</strong> Frontend Task.
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
