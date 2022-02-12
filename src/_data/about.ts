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
import { WtdIcon } from "../common/components/WtdIcon";
import { AboutData } from "../domain";

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
