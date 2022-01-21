import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export const contactMe = [
  {
    ariaLabel: "visit LinkedIn Profile",
    button: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/chintansawla/",
  },
  {
    ariaLabel: "visit GitHub Profile",
    button: <GitHubIcon />,
    href: "https://www.github.com/sawlachintan/",
  },
  {
    ariaLabel: "visit Twitter Profile",
    button: <TwitterIcon />,
    href: "https://www.twitter.com/sawlachintan/",
  },
  {
    ariaLabel: "send an email",
    button: <EmailIcon />,
    href: "mailto:sawlachintan@gmail.com",
  },
];
