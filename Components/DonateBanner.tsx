import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
function DonateBanner() {
  return (
    <div>
      <div
        style={{ display: "grid", height: "50vh", backgroundColor: "orange" }}
      >
        <div style={{ marginLeft: "10vw", marginRight: "10vw" }}>
          <Typography sx={{ marginTop: "10vh" }} color="white" variant="h5">
            Are you benefiting from our site and want to Support TOOLTOOLITO ?
          </Typography>
          <div style={{ display: "grid", placeContent: "center" }}>
            <a
              style={{ margin: "5vh" }}
              href="https://www.buymeacoffee.com/tooltoolito"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={200}
                height={60}
                src="/buymeacoffee.png"
                alt="Buy Me A Coffee"
              />
            </a>
          </div>
          <Typography color="white">
            Your Donations and Support is the only thing keeping us going.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default DonateBanner;
