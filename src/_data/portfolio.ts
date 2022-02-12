import { CATEGORY, PortfolioData } from "../domain";

export const portfolioData: PortfolioData = {
  categoryData: [
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
  ],
  mediaItems: [
    {
      id: 0,
      title: "personal cv project",
      categoryID: CATEGORY["DESIGN"],
      thumbnailUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      imgUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      devStyle: 0,
      tags: ["HTML5", "CSS3", "TypeScript", "Ruby"],
      externalUrl: "https://github.com/igsr5",
    },
    {
      id: 1,
      title: "personal cv project",
      categoryID: CATEGORY["DESIGN"],
      thumbnailUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      imgUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      devStyle: 1,
      tags: ["HTML5", "CSS3", "TypeScript", "Ruby"],
      externalUrl: "https://github.com/igsr5",
    },
    {
      id: 2,
      title: "personal cv project",
      categoryID: CATEGORY["DESIGN"],
      thumbnailUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      imgUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      devStyle: 1,
      tags: ["HTML5", "CSS3", "TypeScript", "Ruby"],
      externalUrl: "https://github.com/igsr5",
    },
    {
      id: 3,
      title: "personal cv project",
      categoryID: CATEGORY["DESIGN"],
      thumbnailUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      imgUrl:
        "https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/single-05.png",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      devStyle: 0,
      tags: ["HTML5", "CSS3", "TypeScript", "Ruby"],
      externalUrl: "https://github.com/igsr5",
    },
  ],
};
