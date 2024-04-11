import Title from "@/components/Title";
import React from "react";
import Card from '../../components/Card';
import backgroundImage from './assets/bg.jpg'

interface P {
  mainTitle: any,
  card1Description: string;
  card1Title:string;
  card1Image:any;
  card2Description: string;
  card2Title:string;
  card2Image:any;
  card3Description: string;
  card3Title:string;
  card3Image:any;
}

function KnowledgeBlock({
  mainTitle,
  card1Description,
  card1Title,
  card1Image,
  card2Description,
  card2Title,
  card2Image,
  card3Description,
  card3Title,
  card3Image,
}: P): JSX.Element {


  return (
    <div
      className=""
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <div className='px-4 py-4 mx-auto pt-56 flex flex-col'>
        <div className='flex text-center justify-center mb-12'>
          <Title alignment="center" fontColor="black" fontSize="medium" title={mainTitle}></Title>
        </div>
        <div className='relative'>
          <div className='flex flex-row justify-center'>
            <Card
              description={card1Description}
              title={card1Title}
              image={card1Image}
            />
            <Card
              description={card2Description}
              title={card2Title}
              image={card2Image}
            />
            <Card
              description={card3Description}
              title={card3Title}
              image={card3Image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeBlock;
