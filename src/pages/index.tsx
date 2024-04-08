import Layout from "../layout/Layout/Layout";
import HomeHeroBlock from "@/blocks/AboutUsBlock/HomeHeroBlock";


export default function Home() {
  return (
    <Layout>
    <main
      className={`flex min-h-screen phoneS:pt-64 md:pt-60 pt-40 bg-pink  dark:bg-black`}>
   <HomeHeroBlock title={'Hi, I am Viktorija'} description={'A developer with a passion for creating engaging, entertaining user experiences. My goal is to create immersive experiences that captivates users attention and leaves a lasting impact.'}></HomeHeroBlock>
    </main>
    </Layout>
  );
}
