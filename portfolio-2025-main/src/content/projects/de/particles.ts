import particles0 from "../../../assets/images/projects/particles/particles-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebGL Particles",
  theme: "dark",
  tags: ["ogl", "javascript", "glsl"],
  live: "https://particles.betina-bitancort.com/",
  videoBorder: false,
  description:
    "Ein experimentelles WebGL-Projekt mit OGL.js, das Partikel mithilfe mathematischer Formeln und Noise-Funktionen animiert.<br/><br/>Die Partikel bewegen sich fließend zwischen verschiedenen 3D-Formen, die ineinander übergehen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "Knoten Form",
        caption: "Knoten Form",
      },
    },
  ],
} as const satisfies ProjectContent;