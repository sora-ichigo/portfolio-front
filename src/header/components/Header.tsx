import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { END_PAGE, MainPageType } from "../../common/utils/mainPages";

const PageList = new Map<MainPageType, { name: string; path: string }>([
  [
    0,
    {
      name: "about me",
      path: "/",
    },
  ],
  [
    1,
    {
      name: "resume",
      path: "/resume",
    },
  ],
  [
    2,
    {
      name: "portfolio",
      path: "/portfolio",
    },
  ],
  [
    3,
    {
      name: "contact",
      path: "/contact",
    },
  ],
]);

export const Header: React.FC<{ pageType: MainPageType }> = ({ pageType }) => {
  const isWindowMd = useMediaQuery({ query: "(min-width: 768px)" });
  const router = useRouter();

  // TODO: テスト書く
  const visibleTab = [
    PageList.get(pageType > 0 ? ((pageType - 1) as MainPageType) : END_PAGE),
    PageList.get(pageType),
    PageList.get(pageType < END_PAGE ? ((pageType + 1) as MainPageType) : 0),
  ];

  return (
    <header className="pt-6 text-center sm:px-4 sm:pb-1 md:p-8">
      <Image
        src="/profile_icon.png"
        width={isWindowMd ? 160 : 140}
        height={isWindowMd ? 160 : 140}
        alt="Ichigo Sora"
      />
      <h1 className="mt-3.5 text-2xl font-light leading-snug">Sora Ichigo</h1>
      <p className="mb-2 inline-block rounded  bg-yellow-marker px-2.5 py-1.5 italic leading-none">
        software engineer
      </p>
      <ul className="mx-auto flex h-24 max-w-5xl items-center text-xl sm:text-3xl md:text-4xl lg:text-4-5xl ">
        <li
          className="w-2/6 cursor-pointer font-tabTitle font-bold text-grey-4"
          onClick={() =>
            router.push(visibleTab[0]!.path, undefined, { shallow: true })
          }
        >
          {visibleTab[0]!.name}
        </li>
        <li className="w-2/6 font-tabTitle font-bold">{visibleTab[1]!.name}</li>
        <li
          className="w-2/6 cursor-pointer font-tabTitle font-bold text-grey-4"
          onClick={() =>
            router.push(visibleTab[2]!.path, undefined, { shallow: true })
          }
        >
          {visibleTab[2]!.name}
        </li>
      </ul>
    </header>
  );
};
