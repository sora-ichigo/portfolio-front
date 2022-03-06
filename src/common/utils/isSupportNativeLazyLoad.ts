import { isServer } from "./isSerer";

export const isSupportNativeLazyLoad =
  !isServer && "loading" in HTMLImageElement.prototype;
