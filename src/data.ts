import {
  FaFacebook,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaPeopleArrows,
  FaRegLightbulb,
  FaTwitter,
} from "react-icons/fa";
import { FiType } from "react-icons/fi";
import { MdDesignServices } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { SiWebflow, SiZenn } from "react-icons/si";
import { WtdIcon, WtdIconForResume } from "./common/components/WtdIcon";
import {
  AboutData,
  CATEGORY,
  HeaderDataType,
  PortfolioData,
  ResumeData,
} from "./domain";

// -------------------
// Header
// -------------------
export const headerData: HeaderDataType = {
  name: "Sora Ichigo",
  description: "software engineer",
};

// -------------------
// About me
// -------------------
export const aboutData: AboutData = {
  description:
    "Hello.I am a writer.\nI live in a small town somewhere in the world.\nI am passionated about minimalistic and flat design.",
  services: [
    {
      icon: FaHtml5,
      color: "yellow",
      title: "web design",
      text: "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      icon: FiType,
      color: "blue",
      title: "type design",
      text: "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      icon: SiWebflow,
      color: "green",
      title: "web design",
      text: "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      icon: MdDesignServices,
      color: "red",
      title: "web design",
      text: "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
    },
  ],
  funFacts: [
    { icon: FaInstagram, text: "24000 SHOT CAPTURED" },
    { icon: FaRegLightbulb, text: "37 PROJECTS COMPLETED" },
    { icon: FaPeopleArrows, text: "87 SATISFIED CUSTOMERS" },
    { icon: RiMotorbikeFill, text: "1450 KM CYCLED" },
  ],
  snsAccounts: [
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
      icon: WtdIcon,
    },
    {
      url: "https://www.facebook.com/igsr5/",
      icon: FaFacebook,
    },
    {
      url: "https://github.com/igsr5",
      icon: FaGithub,
    },
    {
      url: "https://zenn.dev/ichigo_dev",
      icon: SiZenn,
    },
  ],
};

// -------------------
// Resume
// -------------------
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

// -------------------
// Portfolio
// -------------------
export const portfolioData: PortfolioData = {
  categoryData: [
    {
      name: "all",
      id: -1,
    },
    {
      name: "coding",
      id: CATEGORY["CODING"],
    },
    {
      name: "design",
      id: CATEGORY["DESIGN"],
    },
    {
      name: "logo",
      id: CATEGORY["LOGO"],
    },
  ],
  mediaItems: [
    {
      id: 0,
      title: "personal cv project",
      categoryID: CATEGORY["DESIGN"],
      thumbnailUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      imgUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      devStyle: 0,
      tags: ["HTML5", "CSS3", "TypeScript", "Ruby"],
      externalUrl: "https://github.com/igsr5",
    },
    {
      id: 1,
      title: "personal cv project",
      categoryID: CATEGORY["DESIGN"],
      thumbnailUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      imgUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      devStyle: 1,
      tags: ["HTML5", "CSS3", "TypeScript", "Ruby"],
      externalUrl: "https://github.com/igsr5",
    },
    {
      id: 2,
      title: "personal cv project",
      categoryID: CATEGORY["DESIGN"],
      thumbnailUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      imgUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      devStyle: 1,
      tags: ["HTML5", "CSS3", "TypeScript", "Ruby"],
      externalUrl: "https://github.com/igsr5",
    },
    {
      id: 3,
      title: "personal cv project",
      categoryID: CATEGORY["DESIGN"],
      thumbnailUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      imgUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      devStyle: 0,
      tags: ["HTML5", "CSS3", "TypeScript", "Ruby"],
      externalUrl: "https://github.com/igsr5",
    },
  ],
};
