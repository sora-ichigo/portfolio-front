import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { WtdIconForResume } from "../common/components/WtdIcon";
import { ResumeData } from "../domain";

export const resumeData: ResumeData = {
  history: [
    {
      title: "Frontend Web Developer",
      subTitle: "PIXELWARS INC.",
      text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
      date: "2014",
      current: true,
    },
    {
      title: "Frontend Web Developer",
      subTitle: "PIXELWARS INC.",
      text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
      date: "2014",
    },
    {
      title: "Frontend Web Developer",
      subTitle: "PIXELWARS INC.",
      text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
      date: "2014",
    },
    {
      title: "Frontend Web Developer",
      subTitle: "PIXELWARS INC.",
      text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
      date: "2014",
    },
  ],
  skills: {
    development: [
      {
        name: "HTML5",
        level: 4,
      },
      {
        name: "CSS3",
        level: 2,
      },
      {
        name: "TypeScript",
        level: 3,
      },
      {
        name: "Golang",
        level: 4,
      },
    ],
    design: [
      {
        name: "Fireworks",
        level: 4,
      },
      {
        name: "Photoshop",
        level: 2,
      },
      {
        name: "Illustrator",
        level: 3,
      },
    ],
  },
  viewMoreAbout: {
    text: "You can view my LinkedIn profile. I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    sns: [
      {
        url: "https://www.instagram.com/sora_ick12/",
        icon: FaInstagram,
      },
      {
        url: "https://twitter.com/igsr5_",
        icon: FaTwitter,
      },
      {
        url: "https://wantedly.com/id/igsr5",
        icon: WtdIconForResume,
      },
      {
        url: "https://github.com/igsr5",
        icon: FaGithub,
      },
    ],
  },
};
