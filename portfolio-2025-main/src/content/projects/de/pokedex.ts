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
    "Modul 2 besteht aus Fähigkeiten, Lebenslauf, Mein Profil und CV, gefolgt vom Bewerbungsprozess: Bewerbungsschreiben, Bildanalyse und Vorstellungsgespräch.",
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
    {
      type: "media",
      props: {
        type: "image",
        src: module2_0,
        alt: "Bewerbungsprozess",
        caption: "Bewerbungsprozess",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_1,
        alt: "Bewerbungsschreiben – Verwaltungsassistenz (Entwurf)",
        caption: "Bewerbungsschreiben – Verwaltungsassistenz (Entwurf)",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_2,
        alt: "Bewerbungsschreiben – Miller Ltd.",
        caption: "Bewerbungsschreiben – Miller Ltd.",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_3,
        alt: "Bewerbungsschreiben – Junior-Programmierer",
        caption: "Bewerbungsschreiben – Junior-Programmierer",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_4,
        alt: "Bewerbungsschreiben – Kundenservice",
        caption: "Bewerbungsschreiben – Kundenservice",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_5,
        alt: "Bewerbungsschreiben – Empfang",
        caption: "Bewerbungsschreiben – Empfang",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_6,
        alt: "Bewerbungsschreiben – Kellner/in",
        caption: "Bewerbungsschreiben – Kellner/in",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_7,
        alt: "Bewerbungsschreiben – Lieferdienst",
        caption: "Bewerbungsschreiben – Lieferdienst",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_8,
        alt: "Bildanalyse – Kommunikation",
        caption: "Bildanalyse – Kommunikation",
        portrait: true,
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: module2_9,
        alt: "Vorstellungsgespräch – Bewertung",
        caption: "Vorstellungsgespräch – Bewertung",
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
