import React from "react";

export interface P {
  title: string;
  alignment: "left" | "center" | "right" | "left_center";
  fontSize:  "big" | "medium" | "small";
  fontColor: "pink" |  "black" |  "white";
}

function Title({ title, alignment, fontSize, fontColor }: P): JSX.Element {
  let alignmentText = "";
  let fontSizeText = "";
  let styleText = "";
  switch (fontColor) {
    case "white":
      styleText = ` text-white`;
      break;
    case "pink":
      styleText = ` text-pink `;
      break;
      break;
    case "black":
      styleText = ` text-black dark:text-white `;
      break;
    default:
      null;
      break;
  }

  switch (alignment) {
    case "center":
      alignmentText = ` text-center`;
      break;
    case "left":
      alignmentText = ` text-left `;
      break;
    case "right":
      alignmentText = ` text-right `;
      break;
    case "left_center":
      alignmentText = ` text-center lg:text-left `;
      break;
    default:
      null;
      break;
  }

  switch (fontSize) {
    case "big":
      fontSizeText = ` text-[46px] md:text-[46px] lg:text-[56px]`;
      break;
    case "medium":
      fontSizeText = ` text-[44px] md:text-[46px] lg:text-[56px] `;
      break;
    case "small":
      fontSizeText = ` text-[40px] md:text-[44px] lg:text-[56px] `;
      break;
    default:
      fontSizeText = ` text-[44px] md:text-[46px] lg:text-[56px] `;
      break;
  }
  return (
    <div className="">
      <h2
        className={` ${styleText} ${alignmentText} ${fontSizeText} break-words`}
        lang="en"
      >
        <div className="leading-[100%] ">
          {title}
        </div>
      </h2>
    </div>
  );
}
export default Title;
