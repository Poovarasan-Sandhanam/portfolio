import nwsImage from "../assets/nwss.png";
import barkleImage from "../assets/barkle.png";

const projects = [
  {
    id: 1,
    name: "NWS – Fitness Planner",
    description:
      "A comprehensive fitness planner app built with React Native, allowing users to set and track workout routines, integrated with Firebase for authentication and data storage.",
    technologies: ["React Native", "Firebase", "Redux", "CodePush"],
    image: nwsImage,
    storeLink: "https://play.google.com/store/apps/details?id=com.nws&hl=en_GB&pli=1",
  },
  {
    id: 2,
    name: "Barkle – Fitness Challenge App",
    description:
      "A social fitness challenge app where users can participate in challenges with friends, track progress, and win rewards. Built using native modules for high-performance animations.",
    technologies: ["React Native", "Firebase", "Redux", "Native Modules"],
    image: barkleImage,
    storeLink: "https://play.google.com/store/apps/details?id=com.Barkle.subscription&hl=en_GB",
  },
];

export default projects;
