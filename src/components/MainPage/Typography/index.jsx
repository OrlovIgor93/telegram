import React from "react";

export const Typography = ({variant , children, style }) => {
    let options={};
    (() => {
      switch (variant) {
        case "title":
              options= { fontSize: 13, fontWeight: 800 };
          break;
        case "title2":
              options= { fontSize: 12, fontWeight: 700 };
          break;
        case "caption":
              options = { fontSize: 11, fontWeight: 400 };
          break;
        case "body":
              options = { fontSize: 13, fontWeight: 400 };
          break;
        default:
        
          break;
      }
    })();
    let styleText = { ...options, ...style };
    return <span style={styleText}>{children}</span>;
};

