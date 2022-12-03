import React from "react";
import Image from "next/image";

type HeaderData = {
  name: string;
  description: string;
  iconUrl: string;
};

type Props = {
  data: HeaderData;
};

export const GlobalHeader: React.FC<Props> = (props) => {
  return (
    <header className="pt-6 text-center sm:px-4 sm:pb-1 md:p-8">
      <Image
        className="mx-auto block rounded-full"
        src={props.data.iconUrl}
        width={160}
        height={160}
        priority={true}
        alt="Ichigo Sora"
      />
      <h1 className="mt-3.5 text-2xl font-light leading-snug">{props.data.name}</h1>
      <p className="mb-2 inline-block rounded  bg-yellow-marker px-2.5 py-1.5 italic leading-none">
        {props.data.description}
      </p>
    </header>
  );
};
