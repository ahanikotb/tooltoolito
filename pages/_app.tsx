import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { orange, green } from "@mui/material/colors";
import Footer from "../Components/Footer/Footer";
import { useRouter } from "next/router";
import Image from "next/image";
import css from "../styles/Loader.module.css";
import { app } from "../Components/firebase";
import { getAnalytics } from "firebase/analytics";
import Head from "next/head";

function Loading() {
  const [imagename, setImageName] = useState(0);

  const changePic = () => {
    setImageName((prev) => (prev == 3 ? prev : prev + 1));
  };
  useEffect(() => {
    const myInterval = setInterval(changePic, 500);
    return () => clearInterval(myInterval);
  });
  return (
    <>
      <Head>
        <title>TOOLTOOLITO - FREE ONLINE TOOLS AND CALCULATORS</title>
        <meta
          name="description"
          content="USE OUR FREE ONLINE TOOLS AND CALCULATORS ON TOOLTOOLITO THE SWISS ARMY KNIFE OF TOOLS AND CALCULATORS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={css.loader}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          alt="tooltoolito loading animation"
          width={1000}
          height={1000}
          src={`/loader_frame${imagename}.png`}
        ></Image>
      </div>
    </>
  );
}
export default function App({ Component, pageProps }: AppProps) {
  const [themecolor, setThemeColor] = useState("light");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAnalytics(app);
    const handleStart = (url: any) => url !== router.asPath && setLoading(true);
    const handleComplete = (url: any) =>
      url === router.asPath && setTimeout(() => setLoading(false), 2000);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);
  function changeThemeColor() {
    if (themecolor === "light") {
      setThemeColor("dark");
    } else {
      setThemeColor("light");
    }
  }

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: orange[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {loading ? <Loading></Loading> : <Component {...pageProps} />}
    </ThemeProvider>
  );
}
