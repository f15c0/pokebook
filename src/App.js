import "./App.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./Layout";
import ListView from "./components/PokemonListView";
import { useState, useContext } from "react";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const [defaultColor, setDefaultColor] = useState("enyata-pink");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          colors: {
            "enyata-pink": [
              "#ffe6f0",
              "#fabace",
              "#f18ead",
              "#f18ead",
              "#e3376c",
              "#c91d52",
              "#9d1540",
              "#710d2e",
              "#45051b",
              "#1d0009",
            ],
            "enyata-blue": [
              "#dbfaff",
              "#b5e9f8",
              "#8cdaef",
              "#62c9e7",
              "#39badf",
              "#20a1c6",
              "#117d9b",
              "#025970",
              "#003745",
              "#00141c",
            ],
            "enyata-gold": [
              "#fff6de",
              "#f8e4b6",
              "#f1d28c",
              "#e9c060",
              "#e3ae35",
              "#ca941c",
              "#9d7314",
              "#71520b",
              "#443102",
              "#1a0f00",
            ],
          },
          primaryColor: `${defaultColor}`,
          primaryShade: 4,
        }}
      >
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/list-view" element={<ListView />} />
              {/* <Route path="/contact" component={Contact} /> */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
