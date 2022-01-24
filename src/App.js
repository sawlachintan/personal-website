import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Coursework } from "./components/Coursework";
import { Skills } from "./components/Skills";
import {
  useMediaQuery,
  ThemeProvider,
  IconButton,
  Typography,
  Stack,
  AppBar,
  Toolbar,
  Box,
  Button,
  createTheme,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { SvgBackground } from "./assets/images/SvgBackground";
import { renderToStaticMarkup } from "react-dom/server";
import { useDarkLight } from "./hooks/useDarkLight";
import { Projects } from "./components/Projects";
import { useAccentColor } from "./hooks/useAccentColor";

const pages = ["Home", "About", "Coursework", "Projects", "Skills", "Resume"];
const routeParser = (page) => {
  if (page === "Home") {
    return "/personal-website";
  } else if (page === "Resume") {
    return "https://drive.google.com/file/d/1oVX4Brx77tNKG1nqlw6VByalSOe8HQLD/view?usp=sharing";
  }
  return "/personal-website/" + page.toLowerCase();
};

function App() {
  const [newDark, toggleTheme] = useDarkLight();
  const [accentColor, setAccent] = useAccentColor();

  const [svgBack, setSvgBack] = useState(
    <SvgBackground accentColor={accentColor} />
  );

  useEffect(() => {
    setSvgBack(<SvgBackground accentColor={accentColor} />);
  }, [accentColor]);

  const svgString = encodeURIComponent(renderToStaticMarkup(svgBack));
  const dataUri = `url("data:image/svg+xml,${svgString}")`;

  const iconColor = newDark === "dark" ? "#eee" : "#111";
  const theme = createTheme({
    palette: {
      primary: {
        main: iconColor,
      },
    },
    typography: {
      fontFamily: "Poppins",
      h1: {
        fontWeight: 700,
        fontSize: "3rem",
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.5rem",
      },
    },
  });
  const nonDesktop = useMediaQuery("(max-width:900px)");
  if (nonDesktop)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#111",
          color: "#eee",
          fontFamily: "Poppins",
        }}
      >
        <Typewriter
          options={{
            strings: ["Mobile Site in Development"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    );
  return (
    <div
      className="App"
      style={{ backgroundColor: `${newDark === "dark" ? "#111" : "#eee"}` }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <AppBar position="fixed" color="transparent" elevation={0}>
            <Toolbar
              sx={{
                display: { md: "flex" },
                justifyContent: { md: "space-between" },
              }}
            >
              <Typography
                variant="h1"
                color={newDark === "dark" ? "#eee" : "#111"}
                component="div"
              >
                CS
              </Typography>
              <Stack direction={"row"}>
                {pages.map((d, i) => {
                  console.log(routeParser(d));
                  return (
                    <Button
                      href={routeParser(d)}
                      key={i}
                      disableRipple
                      color="inherit"
                      target={d === "Resume" ? "_blank" : "_self"}
                      rel={d === "Resume" ? "noopener" : null}
                    >
                      <Typography
                        variant="h4"
                        color={newDark === "dark" ? "#eee" : "#111"}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {d}
                      </Typography>
                    </Button>
                  );
                })}
                <IconButton
                  color="primary"
                  onClick={() => {
                    toggleTheme();
                  }}
                >
                  {newDark === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => {
                    setAccent();
                  }}
                >
                  <ColorLensIcon />
                </IconButton>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>

      <header
        className="App-header"
        style={{
          color: `${newDark === "dark" ? "#eee" : "#111"}`,
          backgroundImage: `${dataUri}`,
          backgroundSize: "cover",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home dark={newDark === "dark"} accentColor={accentColor} />
            }
          />
          <Route
            path="/about"
            element={
              <About dark={newDark === "dark"} accentColor={accentColor} />
            }
          />
          <Route
            path="/coursework"
            element={<Coursework dark={newDark === "dark"} />}
          />
          <Route
            path="/skills"
            element={
              <Skills dark={newDark === "dark"} accentColor={accentColor} />
            }
          />
          <Route
            path="/projects"
            element={<Projects dark={newDark === "dark"} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
