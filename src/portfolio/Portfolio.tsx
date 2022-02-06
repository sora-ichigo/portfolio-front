/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";

import { GlobalCenterHeading } from "../common/components/GlobalCenterHeading";

const CATEGORY = {
  CODING: 0,
  DESIGN: 1,
  LOGO: 2,
} as const;
type CategoryType = -1 | typeof CATEGORY[keyof typeof CATEGORY];

const categoryData: { name: string; id: CategoryType }[] = [
  {
    name: "all",
    id: -1,
  },
  {
    name: "coding",
    id: CATEGORY["CODING"],
  },
  {
    name: "design",
    id: CATEGORY["DESIGN"],
  },
  {
    name: "logo",
    id: CATEGORY["LOGO"],
  },
];

// TODO: テスト書く
const GetCategoryName = (categoryID: CategoryType): string => {
  let categoryName = "undefined";
  categoryData.find((v) => {
    if (v.id === categoryID) {
      categoryName = v.name;
    }
  });

  return categoryName;
};

export const Portfolio: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryType>(-1);

  const CategoryBtn: React.FC<{ text: string; id: CategoryType }> = ({
    text,
    id,
  }) => (
    <li
      className={`${
        id === currentCategory
          ? "border-navy  bg-navy text-white hover:text-white"
          : " border-grey-4  text-grey-2 hover:text-navy"
      } my-2.5 mx-1.5 cursor-pointer rounded border px-3 py-1.5 text-xs
       tracking-widest transition hover:border-navy`}
      onClick={() => setCurrentCategory(id)}
    >
      {text}
    </li>
  );

  return (
    <>
      <div className="my-3">
        <GlobalCenterHeading text="my works" icon={FaLeaf} />
      </div>

      <div className="my-8 flex justify-center">
        <ul className="flex uppercase">
          {categoryData.map((v) => (
            <CategoryBtn text={v.name} id={v.id} key={v.id} />
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <MediaItem
          id={0}
          title="personal cv project"
          categoryID={CATEGORY["CODING"]}
          imgUrl="https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png"
        />
      </div>
    </>
  );
};

const MediaItem: React.FC<{
  id: number;
  title: string;
  categoryID: CategoryType;
  imgUrl: string;
}> = ({ id, title, categoryID, imgUrl }) => (
  <div className="mx-auto w-11/12 rounded border border-grey-4">
    <a href={`#?${id}`}>
      <img src={imgUrl} alt={title} />
    </a>
    <div className="px-10 py-7 text-center">
      <h3 className="text-sm font-bold uppercase tracking-wider">{title}</h3>
      <p className="uppercase text-grey-2" style={{ fontSize: "13px" }}>
        {GetCategoryName(categoryID)}
      </p>
    </div>
  </div>
);
