import React, { useState, useEffect } from "react";
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
  const [typedTitle, setTypedTitle] = useState('');
  const [typedDescription, setTypedDescription] = useState('');
  let titleInterval: NodeJS.Timeout | null = null;
  let descriptionInterval: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (title) {
      let index = 0;
      titleInterval = setInterval(() => {
        if (index < title.length) {
          setTypedTitle(prevTypedTitle => prevTypedTitle + title.charAt(index));
          index++;
        } else {
          clearInterval(titleInterval as NodeJS.Timeout);
        }
      }, 100);
    }

    if (description) {
      let index = 0;
      descriptionInterval = setInterval(() => {
        if (index < description.length) {
          setTypedDescription(prevTypedDescription => prevTypedDescription + description.charAt(index));
          index++;
        } else {
          clearInterval(descriptionInterval as NodeJS.Timeout);
        }
      }, 100);
    }

    return () => {
      if (titleInterval) clearInterval(titleInterval);
      if (descriptionInterval) clearInterval(descriptionInterval);
    };
  }, [title, description]);

  return (
    <div className="bg-pink container px-4 mx-auto max-h-[500px] h-60 dark:bg-black">
      <div className="flex flex-col w-full max-w-[2000px] items-end">
        <div className="xl:w-[60%] md:w-[80%] w-full md:pt-10 md:pr-40 text-right">
          <Title
            title={typedTitle}
            alignment={"left"}
            fontSize={"big"}
            fontColor={"black"}
          />
        </div>
        <div className="xl:w-[60%] md:w-[80%] w-full pt-10 md:pr-40 text-right">
          <Description
            description={typedDescription}
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
