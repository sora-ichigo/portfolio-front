import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";

import { GlobalCenterHeading } from "../common/components/GlobalCenterHeading";

const CATEGORY = {
  ABOUT_ME: 0,
  RESUME: 1,
  PORTFOLIO: 2,
  CONTACT: 3,
} as const;
type CategoryType = typeof CATEGORY[keyof typeof CATEGORY];

const categoryData: { name: string; id: CategoryType }[] = [
  {
    name: "all",
    id: 0,
  },
  {
    name: "coding",
    id: 1,
  },
  {
    name: "design",
    id: 2,
  },
  {
    name: "logo",
    id: 3,
  },
];

export const Portfolio: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryType>(0);

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
    </>
  );
};
