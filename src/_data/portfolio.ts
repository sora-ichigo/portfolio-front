import { CATEGORY, PortfolioData } from "../domain";

export const portfolioData: PortfolioData = {
  categoryData: [
    {
      name: "all",
      id: -1,
    },
    {
      name: "backend",
      id: CATEGORY["BACKEND"],
    },
    {
      name: "frontend",
      id: CATEGORY["FRONTEND"],
    },
    {
      name: "infrastructure",
      id: CATEGORY["INFRASTRUCTURE"],
    },
    {
      name: "coding",
      id: CATEGORY["CODING"],
    },
  ],
  mediaItems: [
    {
      id: 0,
      title: "wantedly.com を Next.js に移行した話",
      categoryID: CATEGORY["FRONTEND"],
      thumbnailUrl: "https://images.igsr5.com/l/fljdfgk.jpeg",
      imgUrl: "https://images.igsr5.com/l/ifjsdf.webp",
      description:
        "インターン先での開発として自社サービスのフロントエンドに Next.js を導入しました。自分が行ったのはフレームワーク導入前の調査と実際に1つのリポジトリにフレームワークを実装する2つです。それまでフロントエンドを少ししか触ったことがなかったのでとても勉強になりました。導入後にブログも書いており、移行の背景ややったことをまとめています。",
      devStyle: 2,
      devDate: new Date("2021-08"),
      tags: ["TypeScript", "Next.js", "React"],
      externalUrl:
        "https://www.wantedly.com/companies/wantedly/post_articles/359076",
    },
    {
      id: 1,
      title: "五目並べアプリ",
      categoryID: CATEGORY["FRONTEND"],
      thumbnailUrl: "https://images.igsr5.com/l/ngmpRo2.png",
      imgUrl: "https://images.igsr5.com/l/ngmpRo2.png",
      description:
        "ブラウザ上で 1人 / 2人の五目並べが出来ます。フロントはReact、サーバーはRails、Pythonで実装しています。自分の領域としては React, Rails のコードを担当しました。",
      devStyle: 0,
      devDate: new Date("2021-06"),
      tags: ["TypeScript", "React", "styled-component"],
      externalUrl: "https://github.com/youngeek-0410/gomoku-app-front",
    },
    {
      id: 3,
      title: "ポートフォリオサイト",
      categoryID: CATEGORY["FRONTEND"],
      thumbnailUrl: "https://images.igsr5.com/l/afjife.png",
      imgUrl: "https://images.igsr5.com/l/afjife.png",
      description:
        "今開いているこのサイトです。Next.js を用いてコーディングしました。デザインは cvcard-wp-responsive-vcard-theme を参考に自分で React Component にコーディングし直しました。（購入しました）今はフロントのみですがこの先バックエンドでのデータ永続化やパフォーマンス改善などの施策を行う予定です。",
      devStyle: 0,
      devDate: new Date("2022-02"),
      tags: ["TypeScript", "Next.js", "Tailwind CSS"],
      externalUrl: "https://github.com/igsr5/igsr5-front",
    },
    {
      id: 4,
      title: "株式会社夢尊ワークス HP",
      categoryID: CATEGORY["CODING"],
      thumbnailUrl: "https://images.igsr5.com/l/fiighle.png",
      imgUrl: "https://images.igsr5.com/l/fiighle.png",
      description:
        "個人で依頼を受けて株式会社夢尊ワークスのHP制作を行いました。HP の制作には Wordpress を採用、HP のイメージから伝えたい内容などのヒアリングも行いました。",
      devStyle: 0,
      devDate: new Date("2021-07"),
      tags: ["Wordpress", "PHP"],
      externalUrl: "https://musonworks.co.jp",
    },
    {
      id: 5,
      title: "DUAL LIFE LP ページ",
      categoryID: CATEGORY["CODING"],
      thumbnailUrl: "https://images.igsr5.com/l/ieignber.png",
      imgUrl: "https://images.igsr5.com/l/ieignber.png",
      description:
        "個人で依頼を受けてDUAL LIFEの LP ページ制作を行いました。（残念ながら制作途中でキャンセルになりましたが、、） HTML と CSS と少しの JS で書かれています。自分が人生で初めて仕事としてコードを書いた案件だったのでキャンセルになったとはいえ心に残っています。",
      devStyle: 0,
      devDate: new Date("2020-07"),
      tags: ["HTML5", "CSS3", "JavaScript", "JQuery"],
      externalUrl: "https://igsr5.github.io/dual_life_lp/",
    },
    {
      id: 6,
      title: "GURUSUPO - 飲食店検索サービス",
      categoryID: CATEGORY["FRONTEND"],
      thumbnailUrl: "https://images.igsr5.com/l/jiefaf.png",
      imgUrl: "https://images.igsr5.com/l/jiefaf.png",
      description:
        "現在置から近くの飲食店を検索・マップ表示してくれるサービスです。Google Maps API と ぐるなび API を使って作りました。自分が人生で初めて作ったサービスなので心に残っていますが、ぐるなび API の提供が終了したので現在はまともに機能していません。",
      devStyle: 0,
      devDate: new Date("2020-06"),
      tags: ["HTML5", "CSS3", "JavaScript", "Vue.js"],
      externalUrl: "https://igsr5.github.io/gurusupo/",
    },
    {
      id: 7,
      title: "旧ポートフォリオサイト",
      categoryID: CATEGORY["CODING"],
      thumbnailUrl: "https://images.igsr5.com/l/jijfigb.png",
      imgUrl: "https://images.igsr5.com/l/jijfigb.png",
      description:
        "現在のポートフォリオサイト以前に作ったポートフォリオサイトです。このポートフォリオサイトを持ってインターンやアルバイト、案件を探しまっくてました。",
      devStyle: 0,
      devDate: new Date("2020-07"),
      tags: ["HTML5", "SCSS", "JavaScript", "jQuery"],
    },
    {
      id: 8,
      title: "assets-syncer - 画像配信ツール",
      categoryID: CATEGORY["BACKEND"],
      thumbnailUrl: "https://images.igsr5.com/l/alkvm.png",
      imgUrl: "https://images.igsr5.com/l/alkvm.png",
      description:
        "「個人開発で使える最強の画像サーバを作りたいプロジェクト」で作った画像配信ツールです。（僕が勝手にやっているプロジェクトです）このツールではローカルにあるディレクトリに画像を置くだけでいい感じに CloudFront から画像を配信してくれます。作った勢いでブログを書いたので詳しくはそのブログに書いてあります。",
      devStyle: 0,
      devDate: new Date("2022-02"),
      tags: ["Ruby", "CloudFront", "S3", "Docker"],
      externalUrl: "https://zenn.dev/ichigo_dev/articles/b435fba30a73e23e78ad",
    },
  ],
};
