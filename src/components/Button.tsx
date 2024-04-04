import Link from "next/link";
import React from "react";

export interface P {
  cta: string;
  textColor: "purple" | "teal" | "yellow" | "black" | "peachy" | "white";
  colorButton: "purple" | "teal" | "yellow" | "black" | "peachy" | "white";
  gradientSide: "left" | "right";
  type?: "button" | "submit" | "reset" | undefined;
  link?: string;
  clickHandler?: () => void;
}

function Button({
  cta,
  textColor,
  colorButton,
  gradientSide,
  link,
  type,
  clickHandler,
}: P): JSX.Element {
  let styleText = "";
  let styleButton = "";
  let styleHoverButton = "";

  switch (textColor) {
    case "white":
      styleText = ` text-white`;
      break;
    case "purple":
      styleText = ` text-purple `;
      break;
    case "teal":
      styleText = ` text-tealteal `;
      break;
    case "yellow":
      styleText = ` text-yellow `;
      break;
    case "black":
      styleText = ` text-black `;
      break;
    case "peachy":
      styleText = ` text-peachy `;
      break;
    default:
      null;
      break;
  }
  switch (colorButton) {
    case "white":
      styleButton = ` bg-white `;
      break;
    case "purple":
      styleButton = ` bg-purple `;
      break;
    case "teal":
      styleButton = ` bg-teal `;
      break;
    case "yellow":
      styleButton = ` bg-yellow `;
      break;
    case "black":
      styleButton = ` bg-black dark:border-2 dark:border-${textColor} `;
      break;
    case "peachy":
      styleButton = ` bg-peachy `;
      break;
    default:
      null;
      break;
  }
 

  return (
    <>
      <div>
        {!clickHandler && !type && !link && <p className={styleText}>Error</p>}
        {clickHandler && (
          <button
            type={type}
            className={`${styleText} ${styleButton} ${styleHoverButton} transition-colors   whitespace-nowrap cursor-pointer flex items-center gap-3 font-normal sm:text-[26px] text-[19px] sm:w-[328px] sm:h-[70px] text-center  justify-center  w-[235px]  h-[51px] rounded-full`}
            onClick={clickHandler}
          >
            <div>{cta}</div>
          </button>
        )}
        {link && (
          <Link href={link} className='customBtn btn-12'>
            <button
              className={`${styleText} ${styleButton} ${styleHoverButton} transition-colors whitespace-nowrap cursor-pointer flex items-center gap-3 font-normal sm:text-[26px] text-[19px] sm:w-[328px] sm:h-[70px] text-center  justify-center  w-[235px]  h-[51px] rounded-full`}
            >
              <div>{cta}</div>
            </button>
          </Link>
        )}
        {type && (
          <button
            type={type}
            className={`${styleText} ${styleButton} ${styleHoverButton} transition-colors whitespace-nowrap cursor-pointer flex items-center gap-3 font-normal sm:text-[26px] text-[19px]  sm:w-[328px] sm:h-[70px] text-center  justify-center  w-[235px]  h-[51px] rounded-full `}
          >
            <div>{cta}</div>
          </button>
        )}
      </div>
    </>
  );
}
export default Button;
