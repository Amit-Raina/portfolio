import DataObjectTwoToneIcon from "@mui/icons-material/DataObjectTwoTone";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
import TerminalIcon from "@mui/icons-material/Terminal";

export const information = {
  firstName: "Amit",
  lastName: "Raina",
  fullName: "Amit Raina",
  proffession: ["Front-End Developer.", "Photographer.", "Gamer."],
  aboutMe:
    "I am Amit Raina, Frontend developer from Delhi, India. I have rich experience in web site design and development with responsive behaviour and building custom components.",
  skills: [
    {
      name: "React-JS",
      percent: 90,
      color: "#FFD15C",
    },
    {
      name: "Next-JS",
      percent: 75,
      color: "#FF4C60",
    },
    {
      name: "Scss",
      percent: 90,
      color: "#6C6CE5",
    },
  ],
  badge: {
    projectsCompleted: 14,
    cupOfCoffee: 5312,
    satisfiedClients: 3,
    nomineesWinner: 1,
  },
  services: [
    {
      name: "Frontend Development",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
      icon: <TerminalIcon style={{ width: "60px", height: "60px" }} />,
      color: "rgb(108, 108, 229)",
      shadowColor: "rgba(108, 108, 229, 0.5)",
    },
    {
      name: "Project Management",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
      icon: (
        <ManageAccountsTwoToneIcon style={{ width: "60px", height: "60px" }} />
      ),
      color: "rgb(249, 215, 76)",
      shadowColor: "rgba(249, 215, 76, 0.5)",
    },
    {
      name: "Techninal Support",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
      icon: <DataObjectTwoToneIcon style={{ width: "60px", height: "60px" }} />,
      color: "rgb(249, 123, 139)",
      shadowColor: "rgba(249, 123, 139, 0.5)",
    },
  ],
};
