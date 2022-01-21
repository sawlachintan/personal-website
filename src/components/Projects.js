import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h3: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h5: {
      fontWeight: 500,
      fontSize: "0.9rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

const projectData = [
  {
    link: "https://sawlachintan.github.io/iplDash/",
    location: "./project1.png",
    imgDesc: "Screenshot of IPL Dashboard",
    title: "IPL Dashboard",
    description:
      "This is a dashboard to visualize the performances of the teams in the IPL based on time & venues",
  },
  {
    link: "https://sawlachintan.github.io/cricket_data/",
    location: "./project2.png",
    imgDesc: "Screenshot of Cricket API",
    title: "Cricket API",
    description:
      "This API contains ball by ball and meta information of the T20I, IPL & PSL matches",
  },
];

const ProjectCard = ({ dark, project, index }) => {
  return (
    <Grid sm={5} item>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 50 }}
        transition={{ duration: 0.65, delay: index * 0.35 }}
      >
        <Card
          style={{
            backgroundColor: `${dark ? "#242424" : "#ebebeb"}`,
            height: "35vh",
          }}
        >
          <CardActionArea href={project.link} target={"_blank"} rel="noopener">
            <CardMedia
              component="img"
              height="200"
              image={require(`${project.location}`)}
              alt={project.imgDesc}
              sx={{ backgroundPosition: "top" }}
            />
            <CardContent>
              <Typography color={dark ? "#eee" : "#111"} variant="h3">
                {project.title}
              </Typography>
              <Typography
                textAlign={"left"}
                color={dark ? "#eee" : "#111"}
                variant="h5"
              >
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </Grid>
  );
};

export const Projects = ({ dark }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      direction={"row"}
      sx={{ width: "80vw", overflow: "auto", height: "50vh" }}
    >
      <ThemeProvider theme={theme}>
        {projectData.map((data, index) => {
          return (
            <ProjectCard key={index} dark={dark} project={data} index={index} />
          );
        })}
      </ThemeProvider>
    </Grid>
  );
};
