import Typed from "typed.js";
import { useEffect, useRef } from "react";
import {
  Divider,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import { useRouter } from "next/router";
import Image from "next/image";
function HomeHero() {
  const router = useRouter();
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        "Tools and calculators for Finance.",
        "Tools and calculators for Music.",
        "Tools and calculators for Images.",
        "Tools and calculators for SEO.",
        "Tools and calculators for Crypto.",
        "Tools and calculators for You.",
      ], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        color: "white",
        placeContent: "center",
        display: "grid",
      }}
    >
      <div
        style={{
          width: "70vw",
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "rgba(255,255,255, 0.3)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/logo.png"
            alt="TOOLTOOLITO LOGO"
            width={1000}
            height={800}
            style={{ maxWidth: "60vw", height: "auto" }}
          />
          <Typography variant="h1" color="black"></Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4" ref={el} color="black">
            Tools and calculators for
          </Typography>
        </div>

        <Box sx={{ m: 3 }}></Box>
        <Box textAlign="center">
          <Button
            onClick={() => {
              router.push("/tools/");
            }}
            sx={{ width: "200px" }}
            variant="contained"
          >
            <Typography sx={{ color: "white" }}>Explore</Typography>
          </Button>
        </Box>
      </div>
      {}
    </div>
  );
}

export default HomeHero;
