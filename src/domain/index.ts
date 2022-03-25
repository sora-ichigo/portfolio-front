import { AboutData } from "./about";
import { BlogData } from "./blog";
import { PortfolioData } from "./portfolio";
import { ResumeData } from "./resume";

export type Data = AboutData | ResumeData | PortfolioData | BlogData;

export * from "./header";
export * from "./about";
export * from "./resume";
export * from "./portfolio";
export * from "./post";
