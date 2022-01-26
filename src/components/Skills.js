import { motion } from "framer-motion";
import { ForceGraph } from "./ForceGraph";
import { data } from "./SkillsData";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  IconButton,
  Stack,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useRef } from "react";
import { useGATracker } from "../hooks/useGATracker";

export const Skills = ({ dark, accentColor }) => {
  useGATracker();
  const linkRef = useRef(null);
  const projectRef = useRef(null);
  const theme = createTheme({
    palette: {
      primary: {
        main: accentColor,
      },
    },
    typography: {
      fontFamily: "Poppins",
      h2: {
        fontSize: "2.65rem",
        fontWeight: 600,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 500,
      },
    },
  });
  return (
    <Stack justifyContent={"center"} sx={{ width: "70vw" }}>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.65 }}
      >
        <ThemeProvider theme={theme}>
          <Stack direction={"row"} justifyContent={"center"}>
            <Typography
              variant="h2"
              color={accentColor}
              style={{
                transition: "color 0.65s ease-in-out",
              }}
              ref={projectRef}
            >
              GitHub Repo
            </Typography>

            <IconButton
              href={"https://github.com/sawlachintan/"}
              target={"_blank"}
              rel={"noopener"}
              color="primary"
              disableRipple
              sx={{ transition: "color 0.5s ease-in-out" }}
              ref={linkRef}
            >
              <LaunchIcon />
            </IconButton>
          </Stack>
          <Typography
            variant="h6"
            color={accentColor}
            style={{
              transition: "color 0.65s ease-in-out",
            }}
          >
            *Hover over a link to find out a project done
          </Typography>
        </ThemeProvider>
        <ForceGraph
          data={data}
          accentColor={accentColor}
          linkRef={linkRef}
          projectRef={projectRef}
          dark={dark}
        ></ForceGraph>
      </motion.div>
    </Stack>
  );
};
