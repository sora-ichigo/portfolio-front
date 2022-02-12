import React from "react";
import { IconColorType, ServiceListItemType } from "../../domain/type";

export const ServiceListItem: React.FC<ServiceListItemType> = ({
  icon,
  color,
  title,
  text,
}) => {
  const iconClass = (color: IconColorType): string => {
    const classString =
      "mx-auto flex items-center justify-center rounded-full text-3-4xl text-white";

    switch (color) {
      case "red": {
        return classString + " bg-red";
      }
      case "blue": {
        return classString + " bg-blue";
      }
      case "green": {
        return classString + " bg-green";
      }
      case "yellow": {
        return classString + " bg-yellow";
      }
      default: {
        throw new Error("color must be either red, blue, green, yellow");
      }
    }
  };

  return (
    <div className="pt-6 pb-8 text-center">
      <div
        className={iconClass(color)}
        style={{ width: "86px", height: "86px" }}
      >
        {React.createElement(icon)}
      </div>
      <h3
        className="mt-6 mb-2 font-extrabold uppercase tracking-widest"
        style={{ fontSize: "13px" }}
      >
        {title}
      </h3>
      <p
        className="mx-auto mt-2 mb-5 w-5/6 text-grey lg:w-11/12"
        style={{ fontSize: "15px" }}
      >
        {text}
      </p>
    </div>
  );
};
