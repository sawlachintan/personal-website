import { Grid, ThemeProvider, createTheme } from "@mui/material";
import { CourseCard } from "./CourseCard";
import { courseWorkContent } from "../assets/courseWorkContent";

export const Coursework = () => {
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
        sx={{ width: "80vw" }}
      >
        {courseWorkContent.map((d, i) => {
          return (
            <CourseCard
              key={i}
              index={i}
              title={d.title}
              semester={d.semester}
              content={d.content}
            />
          );
        })}
      </Grid>
    </ThemeProvider>
  );
};
