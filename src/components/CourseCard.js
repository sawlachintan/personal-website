import {
  Grid,
  Card,
  CardContent,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { motion } from "framer-motion";
export const CourseCard = ({ index, title, semester, content, dark }) => {
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
  return (
    <Grid sm={4} item>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 50 }}
        transition={{ duration: 0.65, delay: index * 0.35 }}
      >
        <Card
          style={{
            backgroundColor: `${dark ? "#242424" : "#ebebeb"}`,
            minHeight: "20vh",
          }}
        >
          <CardContent style={{ height: "100%" }}>
            <ThemeProvider theme={theme}>
              <Typography
                color={dark ? "#eee" : "#111"}
                variant="h3"
                component="div"
              >
                {title}
              </Typography>
              <Typography
                sx={{ mt: 0.75, mb: 1.25 }}
                textAlign={"right"}
                variant="h5"
                color={dark ? "#eee" : "#111"}
              >
                {semester}
              </Typography>
              <Typography
                textAlign={"left"}
                color={dark ? "#eee" : "#111"}
                variant="body1"
              >
                {content}
              </Typography>
            </ThemeProvider>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};
// "#242424"
