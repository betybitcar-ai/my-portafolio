import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Curriculum",
  theme: "light",
  tags: ["three", "node", "kubernetes", "redis", "postgresql"],
  videoBorder: true,
  description:
    "This is my digital resume.<br/><br/>Putting together my resume made me reflect on everything I’ve done so far this year; I have a job, and even though it might not seem like much, it motivates me to keep moving forward.",
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