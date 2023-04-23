import "./App.css";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import Layout from "./Layout";
import ListView from "./components/PokemonListView";
import { useState } from "react";
import { ThemeProvider, useTheme } from "./contexts/ColorTheme";

function AppContent() {
  const { themeColor } = useTheme();
  const [colorScheme, setColorScheme] = useState("light");
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
            "enyata-violet": [
              "#f3eaff",
              "#d6c1f4",
              "#b699e7",
              "#9571dc",
              "#7248d0",
              "#622fb7",
              "#53248f",
              "#401968",
              "#2b0f40",
              "#14031b",
            ],
          },
          primaryColor: themeColor,
          primaryShade: 4,
        }}
      >
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/list-view" element={<ListView />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
