import React from "react";
import Image from "next/image";

export interface P {
  title: string;
  image: string;
  description: string;
}

function Card({
  title,
  description,
  image,
}: P): JSX.Element {
  return (
    <div className='bg-pink dark:bg-black w-[420px] px-4 flex flex-col '>
      <div className="flex flex-row justify-between">
        <div className=''>
<Image src={image} alt="" width={40} height={40}></Image>
        </div>
      <h2 className='flex text-charcoal dark:text-white text-[25px] '>
        {title}
      </h2>
      </div>
        <div className='font-light text-[22px] w-[70%]	text-charcoal dark:text-white'>
         {description}
        </div>
          </div>
  );
}

export default Card;
