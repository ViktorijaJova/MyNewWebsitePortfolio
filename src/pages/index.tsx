import KnowledgeBlock from "@/blocks/KnowledgeBlock/KnowledgeBlock";
import Layout from "../layout/Layout/Layout";
import HomeHeroBlock from "@/blocks/HomeHeroBlock/HomeHeroBlock";
import card1Image from '../../public/vercel.svg'


export default function Home() {
  return (
    <Layout>
    <main
      className={`flex flex-col min-h-screen phoneS:pt-64 md:pt-60 pt-40 bg-pink  dark:bg-black`}>
   <HomeHeroBlock title={'HHi, I am Viktorija'} description={'A A developer with a passion for creating engaging, entertaining user experiences. My goal is to create immersive experiences that captivates users attention and leaves a lasting impact.'}></HomeHeroBlock>
   <KnowledgeBlock mainTitle={'My knowledge'} 
   card1Description="With knowledge in HTML, CSS, and TypeScript, I specialize in crafting custom CMS solutions, leveraging frameworks like React and NextJS for seamless integration."
    card1Title="Custom CMS Developer
   " card1Image={card1Image} 
   card2Description={"Passionate about development. 3 years of development experience in React and NextJS frameworks, Typescript, Javascript, Tailwind CSS."} card2Title={"Frontend Development"} card2Image={card1Image}
    card3Description={" From writing clean code in React/TypeScript to ensuring seamless functionality across platforms, I oversee every development aspect with meticulous attention to detail."} card3Title={"Project Management"} card3Image={card1Image}></KnowledgeBlock>
    </main>
    </Layout>
  );
}
