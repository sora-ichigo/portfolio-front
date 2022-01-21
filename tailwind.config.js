module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Lato", "sans-serif"], // サイト全体の基本フォント
        tabTitle: ["Arial", "Helvetica", "sans-serif"], // タブ文字
      },
      colors: {
        navy: "#334455", // 基本のテキストカラー
        grey: {
          DEFAULT: "#96A5A8", // 少し薄めのテキストカラー
          1: "#F4F6F7", // ボーダー、WORK PROCESS のアイコンのところ
          2: "#C9D5D6", // Resume > History のサブタイトルのテキストカラー
          3: "#6A7686", // 背景が白以外の時の文字色
          4: "#D0DADC", // タブタイトル(inactive), 見出しアイコン色
        },
        green: {
          DEFAULT: "#5BCF80",
          link: "#009966", // a タグに使う
        },
        yellow: "#F8CB30",
        blue: {
          DEFAULT: "#74BADE",
          light: "#E4F1F6",
        },
        red: "#E25E5B",
      },
    },
  },
  plugins: [],
};
