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
   <KnowledgeBlock mainTitle={'My knowledge'} card1Description="LOREM IPSUM LOREM somethingsomethingsomething  somethingsomethingsomething   IPSUM LOREM IPSUm" card1Title="FrontEnd React NEXTJS" card1Image={card1Image} card2Description={"LOREMsomethingsomethingsomethingsomethingsomethingsomething ISPUMMMMM"} card2Title={"Custom CMS"} card2Image={card1Image}
    card3Description={"somethingsomethingsomethingsomethingsomethingsomethingso  methingsomethi ngsomething"} card3Title={"something"} card3Image={card1Image}></KnowledgeBlock>
    </main>
    </Layout>
  );
}
