import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import module2_0 from "../../../assets/images/projects/module2/module2-0.webp";
import module2_1 from "../../../assets/images/projects/module2/module2-1.webp";
import module2_2 from "../../../assets/images/projects/module2/module2-2.webp";
import module2_3 from "../../../assets/images/projects/module2/module2-3.webp";
import module2_4 from "../../../assets/images/projects/module2/module2-4.webp";
import module2_5 from "../../../assets/images/projects/module2/module2-5.webp";
import module2_6 from "../../../assets/images/projects/module2/module2-6.webp";
import module2_7 from "../../../assets/images/projects/module2/module2-7.webp";
import module2_8 from "../../../assets/images/projects/module2/module2-8.webp";
import module2_9 from "../../../assets/images/projects/module2/module2-9.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Módulo 2",
  theme: "light",
  tags: ["javascript", "html", "css"],
  videoBorder: true,
  description:
    "Module 2 consists of Skills, Curriculum, My Profile, and CV, followed by the Job Application Process: application letters, picture analysis and a job interview.<br/><br/>By carrying out these activities, I was able to identify my qualities and the skills I excel at.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "My Profile",
        caption: "My Profile",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Skills",
        caption: "Skills",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_0,
        alt: "Job Application Process",
        caption: "Job Application Process",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_1,
        alt: "Application Letter – Administrative Assistant (draft)",
        caption: "Application Letter – Administrative Assistant (draft)",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_2,
        alt: "Application Letter – Miller Ltd.",
        caption: "Application Letter – Miller Ltd.",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_3,
        alt: "Application Letter – Junior Programmer",
        caption: "Application Letter – Junior Programmer",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_4,
        alt: "Application Letter – Customer Service Assistant",
        caption: "Application Letter – Customer Service Assistant",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_5,
        alt: "Application Letter – Receptionist",
        caption: "Application Letter – Receptionist",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_6,
        alt: "Application Letter – Waiter / Waitress",
        caption: "Application Letter – Waiter / Waitress",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_7,
        alt: "Application Letter – Delivery Staff",
        caption: "Application Letter – Delivery Staff",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_8,
        alt: "Picture Analysis – Communication",
        caption: "Picture Analysis – Communication",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_9,
        alt: "Job Interview – Assessment",
        caption: "Job Interview – Assessment",
        portrait: true,
      },
    },
    {
      type: "text",
      props: {
        title: "Reflection",
        text:
          "In Module 2 I learned how a job application works, from reading a job advertisement to attending an interview. Writing application letters for six different jobs taught me to match my skills to each requirement, and my corrected drafts show how much I improved with every version.<br/><br/>The hardest part was the job interview: speaking in real time is more difficult for me than writing, so I want to work on my pronunciation and on organising my answers. Next time I will prepare key phrases in advance and practise out loud.",
      },
    },
  ],
} as const satisfies ProjectContent;
