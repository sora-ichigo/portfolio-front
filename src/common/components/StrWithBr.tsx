import React from "react";

export const StrWithBr: (text: string) => JSX.Element[] = (text) => {
  const respStr = text.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.match(/\n/) ? <br /> : item}
      </React.Fragment>
    );
  });

  return respStr;
};
