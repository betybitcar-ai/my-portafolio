import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Pokédex",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://pokedex.betina-bitancort.com/",
  source: "https://github.com/davidhckh/pokedex",
  videoBorder: true,
  description:
    "Eines meiner ersten Webprojekte, um Kernkonzepte der Webentwicklung zu üben. Der Pokédex ist Open Source, damit andere Entwickler auf die gleiche Weise lernen können wie ich.",

  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Standardansicht",
        caption: "Standardansicht",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Suchfunktion",
        caption: "Suchfunktion",
      },
    },
  ],
} as const satisfies ProjectContent;