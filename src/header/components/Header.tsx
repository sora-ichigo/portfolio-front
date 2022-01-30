import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const Header: React.FC = () => {
  const isWindowMd = useMediaQuery({ query: "(min-width: 768px)" });
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
        <li className="w-2/6 cursor-pointer font-tabTitle font-bold text-grey-4">
          contact
        </li>
        <li className="w-2/6 font-tabTitle font-bold">about me</li>
        <li className="w-2/6 cursor-pointer font-tabTitle font-bold text-grey-4">
          resume
        </li>
        <li className="hidden">portfolio</li>
      </ul>
    </header>
  );
};
