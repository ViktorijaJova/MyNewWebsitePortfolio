import React from "react";

export interface P {
  description: string;
  alignment: "left" | "center" | "right" | "left_center";
  fontSize: "big" | "medium" | "small";
  fontColor:  "black" | "pink" | "white";
}

function Description({
  fontColor,
  description,
  alignment,
  fontSize,
}: P): JSX.Element {
  let alignmentTextDesc = "";
  let fontSizeTextDesc = "";
  let styleTextDesc = "";

  switch (fontColor) {
    case "white":
      styleTextDesc = ` text-white`;
      break;
    case "pink":
      styleTextDesc = ` text-pink `;
      break;
    case "black":
      styleTextDesc = ` text-charcoal dark:text-white `;
     break;  
    default:
      null;
      break;
  }

  switch (alignment) {
    case "center":
      alignmentTextDesc = ` text-center`;
      break;
    case "left":
      alignmentTextDesc = ` text-left `;
      break;
    case "right":
      alignmentTextDesc = ` text-right `;
      break;
    case "left_center":
      alignmentTextDesc = ` text-center lg:text-left `;
      break;
    default:
      null;
      break;
  }

  switch (fontSize) {
    case "big":
      fontSizeTextDesc = ` text-lg md:text-xl lg:text-2xl`;
      break;
    case "medium":
      fontSizeTextDesc = ` text-lg md:text-xl lg:text-2xl `;
      break;
    case "small":
      fontSizeTextDesc = ` smallest:text-[14px] xs:text-[18px] md:text-[20px] lg:text-[22px] `;
      break;
    default:
      fontSizeTextDesc = ` smallest:text-[14px] xs:text-[18px] md:text-[20px] lg:text-[24px] `;
      break;
  }
  return (
    <div>
      <div
        className={`${styleTextDesc} ${alignmentTextDesc} ${fontSizeTextDesc}`}
      >
        <div className='font-light'>{description}</div>
      </div>
    </div>
  );
}
export default Description;
