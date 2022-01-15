import { Stack, Typography, ThemeProvider, createTheme } from "@mui/material";
import { motion } from "framer-motion";
import { aboutMe } from "../assets/aboutMe";

export const About = () => {
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
