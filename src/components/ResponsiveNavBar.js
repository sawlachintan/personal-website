import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeProvider, createTheme, Stack } from "@mui/material";

const pages = ["Home", "About", "Coursework", "Projects", "Skills", "Resume"];
const routeParser = (page) => {
  if (page === "Home") {
    return "/";
  } else if (page === "Resume") {
    return "https://drive.google.com/file/d/1oVX4Brx77tNKG1nqlw6VByalSOe8HQLD/view?usp=sharing";
  }
  return page.toLowerCase();
};

export default function ResponsiveNavBar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eee",
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
            <Typography variant="h1" color="#eee" component="div">
              CS
            </Typography>
            <Stack direction={"row"}>
              {" "}
              {pages.map((d, i) => {
                return (
                  <Button
                    href={routeParser(d)}
                    key={i}
                    disableRipple
                    color="inherit"
                    target={d === "Resume" ? "_blank" : "_self"}
                  >
                    <Typography
                      variant="h4"
                      color="#eee"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {d}
                    </Typography>
                  </Button>
                );
              })}
              <IconButton color="primary">
                <DarkModeIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
