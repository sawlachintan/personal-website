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
import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { MobileSvg } from "../../assets/images/MobileSvg";
import { renderToStaticMarkup } from "react-dom/server";
import { useDarkLight } from "../../hooks/useDarkLight";

import { useAccentColor } from "../../hooks/useAccentColor";

const pages = ["Home", "About", "Coursework", "Projects", "Skills", "Resume"];
const routeParser = (page) => {
  if (page === "Home") {
    return "/personal-website";
  } else if (page === "Resume") {
    return "https://drive.google.com/file/d/1-Qogw36NHTUS--idBBVM9nRbnxuRwB0U/view?usp=sharing";
  }
  return "/personal-website/" + page.toLowerCase();
};

function MobileApp() {
  const [newDark, toggleTheme] = useDarkLight();
  const [accentColor, setAccent] = useAccentColor();

  const [svgBack, setSvgBack] = useState(
    <MobileSvg accentColor={accentColor} />
  );

  useEffect(() => {
    setSvgBack(<MobileSvg accentColor={accentColor} />);
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

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${newDark === "dark" ? "#111" : "#eee"}`,
        transition: "background-color 0.65s ease-in-out",
      }}
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
      ></header>
    </div>
  );
}

export default MobileApp;
