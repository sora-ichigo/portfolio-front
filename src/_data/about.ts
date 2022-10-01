import {
  FaDocker,
  FaFacebook,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaMountain,
  FaRegLightbulb,
  FaTwitter,
} from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { RiMotorbikeFill } from "react-icons/ri";
import { SiRuby, SiTypescript, SiZenn } from "react-icons/si";

import { WtdIcon } from "../common/components/WtdIcon";
import { AboutData } from "../domain";

export const aboutData: AboutData = {
  description:
    "こんにちは！愛知県の情報工学科学生です。\nソフトウェア開発を通じて課題を解決するのが好きです。\n普段はコードを書いたり, バイクに乗ったり, 温泉に入ったりしています。",
  tweet: "最近早起きをおぼえました",
  services: [
    {
      icon: SiTypescript,
      color: "yellow",
      title: "Web Frontend",
      text: "TypeScript, React, Next.js, GraphQL",
    },
    {
      icon: SiRuby,
      color: "green",
      title: "web backend",
      text: "Golang, Ruby, Ruby on Rails, Node.js, REST API, gRPC",
    },
    {
      icon: FaDocker,
      color: "blue",
      title: "infrastructure",
      text: "Linux, Docker, AWS, Terraform",
    },
    {
      icon: FaHtml5,
      color: "red",
      title: "coding",
      text: "HTML5, CSS3, Wordpress",
    },
  ],
  funFacts: [
    { icon: FaRegLightbulb, text: "Always making services" },
    { icon: FaMountain, text: "Every 3 days go to onsen" },
    { icon: RiMotorbikeFill, text: "Riding on MT-25" },
    { icon: FiMusic, text: "Like J-POP" },
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
