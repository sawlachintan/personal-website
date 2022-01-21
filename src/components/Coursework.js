import { Grid, ThemeProvider, createTheme } from "@mui/material";
import { CourseCard } from "./CourseCard";
import { courseWorkContent } from "../assets/constants/courseWorkContent";

export const Coursework = ({ dark }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eee",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"stretch"}
        spacing={2}
        sx={{ width: "80vw", overflow: "auto", height: "70vh" }}
        mt={6}
      >
        {courseWorkContent.map((d, i) => {
          return (
            <CourseCard
              key={i}
              index={i}
              title={d.title}
              semester={d.semester}
              content={d.content}
              dark={dark}
            />
          );
        })}
      </Grid>
    </ThemeProvider>
  );
};
