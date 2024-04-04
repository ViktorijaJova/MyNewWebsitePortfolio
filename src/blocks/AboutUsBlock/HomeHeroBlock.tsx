import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";

interface P {
  title:any,
  description:any}


function HomeHeroBlock({
  title,
  description,
}: P): JSX.Element {
  return (
    <div className="bg-pink pt-[15%] justify-end items-end pl-40  dark:bg-black">
      <div>
                 <Title title={title ?? ''} alignment={"center"} fontSize={"big"} fontColor={"black"}  />
      </div>
      <div className=' w-[50%]  pt-8 flex reltive'>
            <Description 
              description={description ?? ""}
              alignment={ "left"}
              fontSize={ "medium"}
              fontColor={"black"}
            />
      </div>
    </div>
  );
}
export default HomeHeroBlock;
