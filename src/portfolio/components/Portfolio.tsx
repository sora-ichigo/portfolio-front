import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { FaLeaf } from "react-icons/fa";

import { GlobalCenterHeading } from "../../common/components/GlobalCenterHeading";
import { MediaItem } from "./MediaItem";

export const CATEGORY = {
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
export const GetCategoryName = (categoryID: CategoryType): string => {
  let categoryName = "undefined";
  categoryData.find((v) => {
    if (v.id === categoryID) {
      categoryName = v.name;
    }
  });

  return categoryName;
};

export type MediaItemType = {
  id: number;
  title: string;
  categoryID: CategoryType;
  imgUrl: string;
};

const mediaData: MediaItemType[] = [
  {
    id: 0,
    title: "personal cv project",
    categoryID: CATEGORY["DESIGN"],
    imgUrl:
      "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
  },
  {
    id: 1,
    title: "personal cv project",
    categoryID: CATEGORY["CODING"],
    imgUrl:
      "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
  },
  {
    id: 2,
    title: "personal cv project",
    categoryID: CATEGORY["CODING"],
    imgUrl:
      "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
  },
  {
    id: 3,
    title: "personal cv project",
    categoryID: CATEGORY["CODING"],
    imgUrl:
      "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
  },
];

export const Portfolio: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryType>(-1);
  const [visibleMediaData, setVisibleMediaData] =
    useState<MediaItemType[]>(mediaData);

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

  // TODO: テスト書く
  useEffect(() => {
    setVisibleMediaData((): MediaItemType[] => {
      if (currentCategory === -1) return mediaData;

      let tmp = mediaData.map((v) => {
        if (v.categoryID === currentCategory) return v;
      });
      const newData = tmp.filter(Boolean);

      return newData as MediaItemType[];
    });
  }, [currentCategory]);

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

      <FlipMove className="mb-8 grid grid-cols-1 gap-10 gap-y-10 px-2 sm:grid-cols-2 lg:grid-cols-3">
        {visibleMediaData.map((v) => (
          <MediaItem
            key={v.id}
            id={v.id}
            title={v.title}
            categoryID={v.categoryID}
            imgUrl={v.imgUrl}
          />
        ))}
      </FlipMove>
    </>
  );
};
