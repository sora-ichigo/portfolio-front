import { CategoryType } from "../../domain/type";

// TODO: テスト書く
export const getCategoryName = (
  categoryID: CategoryType,
  categoryData: { name: string; id: CategoryType }[]
): string => {
  let categoryName = "undefined";
  categoryData.find((v) => {
    if (v.id === categoryID) {
      categoryName = v.name;
    }
  });

  return categoryName;
};
