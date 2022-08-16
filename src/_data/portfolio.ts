import { CATEGORY, MediaItemType, PortfolioData } from "../domain";

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
    {
      id: 9,
      title: "Terraform Project - 個人開発用インフラ基盤",
      categoryID: CATEGORY["INFRASTRUCTURE"],
      thumbnailUrl: "https://images.igsr5.com/l/ksdmfd.png",
      imgUrl: "https://images.igsr5.com/l/ksdmfd.png",
      description:
        "自分が個人で使うためのインフラリソース基盤です。自分が公開するサービスは基本的に ECS に立てたコンテナをロードバランサーに繋げて、 igsr5.com のサブドメインで公開しています。その為の仕組み（新しいサービスを簡単に公開できる仕組み）を構築しました。",
      devStyle: 0,
      devDate: new Date("2021-10"),
      tags: ["AWS", "Terraform", "GitHub Action"],
      externalUrl: "https://github.com/igsr5/igsr5-terraform",
    },
    {
      id: 10,
      title: "fes-order - お祭り用事前決済ツール",
      categoryID: CATEGORY["BACKEND"],
      thumbnailUrl: "https://images.igsr5.com/l/grjeido.png",
      imgUrl: "https://images.igsr5.com/l/grjeido.png",
      description:
        "TwoGate Dev Camp 2021 で開発した Web サービスです。お祭りなどで事前に登録した屋台、商品に対してユーザがクレジットカードで購入することができます。屋台側も注文された商品を確認や商品の登録などができるようになっています。開発期間は2日ほどでしたがめちゃくちゃ機能を詰め込みました。",
      devStyle: 1,
      devDate: new Date("2021-04"),
      tags: ["Ruby", "Ruby on Rails", "Angular", "Docker"],
      externalUrl: "https://github.com/youngeek-0410/fes-order",
    },
    {
      id: 11,
      title: "勤怠管理 Slack アプリ",
      categoryID: CATEGORY["BACKEND"],
      thumbnailUrl: "https://images.igsr5.com/l/ferefjio.png",
      imgUrl: "https://images.igsr5.com/l/ferefjio.png",
      description:
        "自分がインターン先で使うために作った Slack アプリです。仕事始めに `/start`を、離脱時に`/end`のスラッシュコマンドを打つことで後から日毎の勤務時間を確認することができます。会社として報告する勤怠サービスはあるものの、自分の場合1日の隙間時間で何回かに分けて働くことが多かったので、1日ごとの勤務時間の計算を効率化するために作りました。",
      devStyle: 0,
      devDate: new Date("2021-11"),
      tags: ["Golang", "Node.js", "Bolt/slack", "Docker"],
      externalUrl: "https://github.com/igsr5/time-management-go",
    },
    {
      id: 12,
      title: "Metagros - OGP Metadaba 取得 npm Package",
      categoryID: CATEGORY["BACKEND"],
      thumbnailUrl: "https://images.igsr5.com/l/jfioefi.webp",
      imgUrl: "https://images.igsr5.com/l/jfioefi.webp",
      description:
        "ESM + TypeScript で作った npm package です。任意のサイトURLを与えるとそのサイトのOGP Metadataをオブジェクトとして返してくれます。調子に乗って Native ESM only で作ったので使うのが大変でした。この npm package きっかけで Node.js 周りのモジュールシステムをとても勉強しているので作ってよかったです。名前は適当につけました。",
      devStyle: 0,
      devDate: new Date("2022-03"),
      tags: ["Node.js", "ESM", "OGP"],
      externalUrl: "https://github.com/igsr5/metagros",
    },
    {
      id: 13,
      title: "株式会社夢尊 HP",
      categoryID: CATEGORY["CODING"],
      thumbnailUrl:
        "https://res.cloudinary.com/drb9hgnv3/image/upload/v1660663428/portfolio/Screen_Shot_2022-08-17_at_0.23.05_bwevey.png",
      imgUrl:
        "https://res.cloudinary.com/drb9hgnv3/image/upload/v1660663428/portfolio/Screen_Shot_2022-08-17_at_0.23.05_bwevey.png",
      description:
        "個人で依頼を受けて株式会社夢尊のHP制作を行いました。HP の制作には Wordpress を採用、HP のイメージから伝えたい内容などのヒアリングも行いました。",
      devStyle: 0,
      devDate: new Date("2022-03"),
      tags: ["Wordpress", "PHP"],
      externalUrl: "https://muson.co.jp",
    },
  ].sort((a, b) => {
    if (a.devDate > b.devDate) {
      return -1;
    } else if (a.devDate === b.devDate) {
      return 0;
    } else {
      return 1;
    }
  }) as MediaItemType[],
};
