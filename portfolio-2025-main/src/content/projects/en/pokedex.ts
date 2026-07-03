import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Módulo 2",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://pokedex.david-hckh.com/",
  source: "https://github.com/davidhckh/pokedex",
  videoBorder: true,
  description:
    "Module 2 consists of Skills, Curriculum, My Profile, and CV.<br/><br/>By carrying out this activity, I was able to identify my qualities and the skills I excel at.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Beina Bitancort",
        caption: "Default View",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Search Function",
        caption: "Search Function",
      },
    },
  ],
} satisfies ProjectContent;