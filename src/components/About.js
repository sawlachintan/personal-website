import { Stack, Typography, ThemeProvider, createTheme } from "@mui/material";
import { motion } from "framer-motion";
import { aboutMe } from "../assets/constants/aboutMe";

export const About = ({accentColor}) => {
  return (
    <ThemeProvider
      theme={createTheme({
        typography: {
          fontFamily: "Poppins",
          body1: {
            fontSize: "1.6rem",
            fontWeight: 500,
          },
          body2: {
            fontSize: "1.6rem",
            fontWeight: 600,
          },
        },
      })}
    >
      <Stack mx={40} spacing={2}>
        {aboutMe.map((d, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.65, delay: i * 0.35 }}
            >
              <Typography
                textAlign={"left"}
                variant={i !== 2 ? "body1" : "body2"}
                color={i === 2 ? accentColor : null}
                sx={{transition: "color 0.65s ease-in-out"}}
              >
                {d}
              </Typography>
            </motion.div>
          );
        })}
      </Stack>
    </ThemeProvider>
  );
};
