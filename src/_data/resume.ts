import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { WtdIconForResume } from "../common/components/WtdIcon";
import { ResumeData } from "../domain";

export const resumeData: ResumeData = {
  history: [
    {
      title: "開発したり、遊んだり、学校行ったり、、",
      subTitle: "development, play, school etc...",
      text: "普段は 2021 年の秋頃に決まった就職先で内定者インターンとして働きながら、友達と遊んだり、学校行ったりしてます。",
      date: "2022",
      current: true,
    },
    {
      title: "バイクの免許取る",
      subTitle: "driver licence, Motorbike",
      text: "普通二輪の免許を取りました。ちなみに前の年に車の免許も取っています。2022 年、車とバイクを両方抱えているので駐車場代、保険代がやばいです。",
      date: "2021",
    },
    {
      title: "軽い気持ちで HTML5/CSS3 に触れた",
      subTitle: "WEB CODING",
      text: "暇だったのでなんとなく HTML5/CSS3 の勉強をしました。そうしたらとても面白くてそこからバックエンド、フロントエンド、インフラなど色々触るようになりました。",
      date: "2019",
    },
    {
      title: "愛知県の高専に進学",
      subTitle: "NITTC, information",
      text: "愛知県にある高専の情報工学科に入学しました。学科選びは消去法です。（環境科水槽が臭かった、、）",
      date: "2018",
    },
    {
      title: "地元の中学校に進学",
      subTitle: "junior high school",
      text: "地元刈谷にあった富士松中学校に入学しました。家から歩いて 5 分の場所にあったのでたまに（綺麗なトイレを求めて）家に帰ってました。",
      date: "2015",
    },
    {
      title: "Golang v1.0 がリリース",
      subTitle: "released",
      text: "最近自分がよく書いている言語のv1.0リリースがありました。もちろんこの時は Golang の存在自体全く知りません。自分が Golang を書き始めたのは Go Modules が出たあたりからなので本当にいい時代に生まれたなと思っています。",
      date: "2009",
    },
    {
      title: "愛知県に移住",
      subTitle: "moved",
      text: "実はこの時までは大阪に住んでいました。しかし生まれた場所は愛知県であることなどを考慮し愛知県に引っ越すことを決意しました。",
      date: "2005",
    },
    {
      title: "誕生",
      subTitle: "was born",
      text: "愛知県刈谷市にてこの世に生を受けました。3000gくらいの男の子でした。",
      date: "2002",
    },
  ],
  skills: {
    development: [
      {
        name: "Golang",
        level: 4,
      },
      {
        name: "Ruby, Ruby on Rails",
        level: 4,
      },
      {
        name: "TypeScript",
        level: 3,
      },
      {
        name: "React, Next.js",
        level: 3,
      },
      {
        name: "Cloud Infrastructure",
        level: 3,
      },
      {
        name: "HTML5/CSS3",
        level: 3,
      },
      {
        name: "GraphQL",
        level: 2,
      },
      {
        name: "gRPC",
        level: 2,
      },
      {
        name: "Python, C, Haskell",
        level: 1,
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
    text: "ここまでこのサイトを読んだ人は分かっているかもしれませんが、このサイトはあまり情報を載せていません。もしこのサイト以上のことで知りたいことがあれば、開発関連は GitHub, Wantedly Profile を、それ以外なら Instagram, Twitter にとんでほしいです。SNS はよく分からないので基本的に投稿は少なめですが DM は使えます。",
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
