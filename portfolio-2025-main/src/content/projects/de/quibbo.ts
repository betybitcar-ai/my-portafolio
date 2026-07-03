import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Curriculum",
  theme: "light",
  tags: ["three", "node", "kubernetes", "redis", "postgresql"],
  videoBorder: true,
  description:
    "This is my digital resume.<br/><br/>The project started as a technical experiment and grew into a scalable application.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Avatar Creator",
        caption: "Avatar Creator",
      },
    },
  ],
} satisfies ProjectContent;