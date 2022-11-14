import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navigation/Nav";
import HomeHero from "../Components/HomePage/HomeHero";
import Alltools from "../Components/Tools/Alltools";
export default function Home() {
  return (
    <div>
      <Head>
        <title>TOOLTOOLITO - FREE ONLINE TOOLS AND CALCULATORS</title>
        <meta
          name="description"
          content="USE OUR FREE ONLINE TOOLS AND CALCULATORS ON TOOLTOOLITO THE SWISS ARMY KNIFE OF TOOLS AND CALCULATORS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <HomeHero></HomeHero>
      <Alltools></Alltools>
      <Footer></Footer>
    </div>
  );
}
