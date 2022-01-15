import {
  IconButton,
  Stack,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Profile from "../assets/Ellipse 1.png";
import Typewriter from "typewriter-effect";

export const Home = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
      h2: {
        fontSize: "2.65rem",
        fontWeight: 600,
      },
      h4: {
        fontSize: "2rem",
        fontWeight: 600,
      },
    },
  });
  return (
    <Stack direction="row" alignItems={"center"} spacing={3}>
      <Stack spacing={2}>
        <ThemeProvider theme={theme}>
          <Typography textAlign={"left"} variant="h2">
            Hey, I am Chintan Sawla
          </Typography>
          <Typography textAlign={"left"} variant="h4" sx={{ color: "#6250F4" }}>
            <Typewriter
              options={{
                strings: [
                  "Data Scientist",
                  "Web Developer",
                  "Student",
                  "BoilerMaker",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </ThemeProvider>

        <Stack direction={"row"} spacing={2}>
          <IconButton
            color="inherit"
            aria-label="send an email"
            href={"mailto:sawlachintan@gmail.com"}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="visit github profile"
            href={"https://github.com/sawlachintan/"}
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="visit twitter profile"
            href={"https://twitter.com/sawlachintan/"}
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="visit linkedin profile"
            href={"https://www.linkedin.com/in/chintansawla/"}
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack justifyContent={"right"}>
        <img className="profile" src={Profile} alt="face of Chintan Sawla" />
      </Stack>
    </Stack>
  );
};
