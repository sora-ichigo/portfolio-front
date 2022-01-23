import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const Header: React.FC = () => {
  const isWindowMd = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <header className="text-center md:p-8 sm:pt-6 sm:px-4 sm:pb-1">
      <Image
        src="/profile_icon.png"
        width={isWindowMd ? 160 : 140}
        height={isWindowMd ? 160 : 140}
        alt="Ichigo Sora"
      />
      <h1 className="text-2xl font-light mt-3.5 leading-snug">Sora Ichigo</h1>
      <p className="leading-none italic mb-2  px-2.5 py-1.5 bg-yellow-marker inline-block rounded">
        software engineer
      </p>
      <ul className="flex max-w-5xl mx-auto h-24 items-center">
        <li className="w-2/6 md:text-4/5xl sm:text-xl font-tabTitle font-bold text-grey-4 cursor-pointer">
          about me
        </li>
        <li className="w-2/6 md:text-4/5xl sm:text-xl font-tabTitle font-bold">
          portfolio
        </li>
        <li className="w-2/6 md:text-4/5xl sm:text-xl font-tabTitle font-bold text-grey-4  cursor-pointer">
          contact
        </li>
        <li className="hidden">resume</li>
      </ul>
    </header>
  );
};
