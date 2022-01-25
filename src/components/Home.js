import {
  IconButton,
  Stack,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { contactMe } from "../assets/constants/contactMe";
import Profile from "../assets/images/ChintanProfile.png"

export const Home = ({ dark, accentColor }) => {
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
    <Stack direction="row" alignItems={"center"} spacing={3} height={"70vh"}>
      <Stack spacing={2} height={"70vh"} justifyContent={"center"}>
        <ThemeProvider theme={theme}>
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Typography textAlign={"left"} variant="h2">
              Hey, I am Chintan Sawla
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Typography
              textAlign={"left"}
              variant="h4"
              sx={{ color: accentColor, transition: "color 0.65s ease-in-out" }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Data Scientist",
                    "Web Developer",
                    "Student",
                    "BoilerMaker",
                    "Researcher",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
          </motion.div>
        </ThemeProvider>

        <Stack direction={"row"} spacing={2}>
          {contactMe.map((d, i) => {
            return (
              //wrap as a component, good refactoring point
              <motion.div
                key={i}
                initial={{ opacity: 0, translateY: 30 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.65, delay: i * 0.35 }}
              >
                <IconButton
                  color="inherit"
                  aria-label={d.ariaLabel}
                  href={d.href}
                  target={d.ariaLabel === "send an email" ? null : "_blank"}
                  rel={d.ariaLabel === "send an email" ? null : "noopener"}
                >
                  {d.button}
                </IconButton>
              </motion.div>
            );
          })}
        </Stack>
      </Stack>
      <Stack justifyContent={"center"} height={"70vh"}>
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.65 }}
        >
          <img className="profile" src={Profile} alt="face of Chintan Sawla" />
          {/* <svg height={"70vh"}>
            <circle
              r={150}
              cx={"50%"}
              cy="50%"
              fill={accentColor}
              style={{ transition: "fill 0.65s ease-in-out" }}
            ></circle>
          </svg> */}
        </motion.div>
      </Stack>
    </Stack>
  );
};
