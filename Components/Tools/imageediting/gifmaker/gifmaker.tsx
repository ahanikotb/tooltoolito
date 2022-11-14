//@ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import gifshot from "gifshot";
import {
  Typography,
  TextField,
  Divider,
  Button,
  Card,
  CardContent,
  IconButton,
  Box,
} from "@mui/material";
import { useDrop } from "react-dnd";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import GifPictureAsset from "./GifPictureAsset";
import CloseIcon from "@mui/icons-material/Close";

function GifMaker() {
  const [result, setResult] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [images, setImages] = useState([]);
  const [disableNext, setDisableNext] = useState(true);
  const [frameDuration, setFrameDuration] = useState(5);
  const [gifWidth, setGifWidth] = useState(500);
  const [gifHeight, setGifHeight] = useState(500);
  var imagesList = [];
  const imageHandler = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      imagesList = [...images, URL.createObjectURL(event.target.files[0])];
      setImages(imagesList);
    }
  };
  const createGif = () => {
    gifshot.createGIF(
      {
        images,
        gifWidth,
        gifHeight,
        frameDuration: frameDuration,
      },
      function (obj: any) {
        if (!obj.error) {
          setResult(obj.image);
        }
      }
    );
  };

  useEffect(() => {
    if (images.length >= 2) {
      setDisableNext(false);
    }
  }, [images]);

  useEffect(() => {
    console.log(result);
  }, [result]);
  const download = () => {
    const link = document.createElement("a");
    link.href = result;
    link.setAttribute("download", `image.gif`);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  };
  const handleNext = () => {
    if (images.length >= 2) {
      if (activeStep !== 1) {
        setActiveStep(activeStep + 1);
        createGif();
      }
    }
  };
  const removeImage = (imageToRemove: any) => {
    for (const image in images) {
      if (images[image] !== imageToRemove) {
        imagesList.push(images[image]);
      }
    }
    setImages(imagesList);
  };

  function makeImage(image: any, index: any) {
    return (
      <Card sx={{ width: "150px" }}>
        <Box sx={{ m: 3 }}></Box>
        <Typography textAlign="center" variant="h6">
          Image {images.indexOf(image) + 1}
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "150px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: "100px" }} src={image}></img>
          <IconButton onClick={() => removeImage(image)}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </div>
      </Card>
    );
  }
  return (
    <Card>
      <CardContent>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Upload Images.</StepLabel>
          </Step>

          <Step>
            <StepLabel>Preview and Download</StepLabel>
          </Step>
        </Stepper>

        {activeStep === 0 && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginTop: "5vh" }}></div>

            <Typography>
              Please upload the images you want to turn into a gif in order then
              click next.
            </Typography>

            <div style={{ marginTop: "5vh" }}></div>

            <div style={{ display: "flex", direction: "row" }}>
              {images.map((image: any) => makeImage(image))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ marginTop: "5vh" }}></div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  onChange={imageHandler}
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  type="file"
                />
                <label htmlFor="raised-button-file">
                  <Button variant="contained" component="span">
                    <Typography color="white"> Add Image</Typography>
                  </Button>
                </label>
              </div>

              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button disabled={disableNext} onClick={handleNext}>
                  <Typography>Next</Typography>
                </Button>
              </div>
            </div>
          </div>
        )}
        {
          //second Screen Preview And Download
        }
        {activeStep === 1 && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginTop: "5vh" }}></div>
            <Typography variant="h5"> GIF Generation Successfull ! </Typography>
            <div style={{ marginTop: "2vh" }}></div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={result} style={{ width: "500px" }}></img>
            </div>
            <div style={{ marginTop: "5vh" }}></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ width: "250px" }}
                variant="contained"
                onClick={download}
              >
                <Typography color="white">Download</Typography>
              </Button>
            </div>
            <div style={{ marginTop: "2vh" }}></div>

            <Divider></Divider>
            <div style={{ marginTop: "5vh" }}></div>

            <Typography variant="h5">
              Want to edit your GIF even More ?
            </Typography>
            <div style={{ marginTop: "2vh" }}></div>
            <Typography variant="p">
              click{" "}
              <Typography
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                variant="p"
                onClick={() => {
                  setActiveStep(0);
                }}
              >
                Here
              </Typography>{" "}
              to upload more images or check the other options below.
            </Typography>
            <div style={{ marginTop: "2vh" }}></div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography variant="p">Frame Duration in seconds. </Typography>
              <TextField
                id="outlined-number"
                label="Frame Duration"
                type="number"
                value={frameDuration}
                onChange={(e: any) => setFrameDuration(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div
              style={{
                marginTop: "3vh",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography variant="p">Width of the GIF in pixels. </Typography>
              <TextField
                id="outlined-number"
                label="Image Width"
                type="number"
                value={gifWidth}
                onChange={(e: any) => setGifWidth(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div
              style={{
                marginTop: "3vh",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography variant="p">Height of the GIF in pixels. </Typography>
              <TextField
                id="outlined-number"
                label="Image Height"
                type="number"
                value={gifHeight}
                onChange={(e: any) => setGifHeight(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div style={{ marginTop: "2vh" }}></div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ width: "250px" }}
                variant="contained"
                onClick={createGif}
              >
                {" "}
                <Typography color="white"> Change Settings </Typography>{" "}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default GifMaker;
