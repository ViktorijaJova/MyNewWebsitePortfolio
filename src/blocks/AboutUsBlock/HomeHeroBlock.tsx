import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";

interface P {
  title: any,
  description: any
}

function HomeHeroBlock({
  title,
  description,
}: P): JSX.Element {
  return (
    <div className="bg-pink container px-4 mx-auto dark:bg-black">
      <div className="flex flex-col w-full max-w-[2000px] items-end">
        <div className="xl:w-[60%] md:w-[80%] w-full md:pt-10 md:pr-40 text-right">
          <Title
            title={title ?? ''}
            alignment={"left"}
            fontSize={"big"}
            fontColor={"black"}
          />
        </div>
        <div className="xl:w-[60%] md:w-[80%] w-full pt-10 md:pr-40 text-right">
          <Description
            description={description ?? ""}
            alignment={"left"}
            fontSize={"medium"}
            fontColor={"black"}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHeroBlock;