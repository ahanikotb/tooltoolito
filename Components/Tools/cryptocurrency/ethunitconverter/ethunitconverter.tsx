import {
  TextField,
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import Units from "./logic";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { copyToClipboard } from "../../../helper";
export default function EthUnitConverter(props: any) {
  const [wei, setWei] = useState(1000000000000000000);
  const [gwei, setGwei] = useState(1000000000);
  const [eth, setEth] = useState(1);
  // const copyToClipboard = props.alltools.copyToClipboard;

  function updateValues(type: any, e: any) {
    if (isNaN(e.target.value)) {
      return;
    }
    switch (type) {
      case "eth":
        if (e.target.value == undefined || e.target.value == "") {
          setEth(e.target.value);
          break;
        }
        setEth(e.target.value);
        //@ts-ignore
        setWei(Units.convert(e.target.value, "eth", "wei"));
        //@ts-ignore
        setGwei(Units.convert(e.target.value, "eth", "gwei"));
        break;
      case "wei":
        if (e.target.value == undefined || e.target.value == "") {
          setWei(e.target.value);
          break;
        }
        setWei(e.target.value);
        //@ts-ignore
        setEth(Units.convert(e.target.value, "wei", "eth"));
        //@ts-ignore
        setGwei(Units.convert(e.target.value, "wei", "gwei"));
        break;
      case "gwei":
        if (e.target.value == undefined || e.target.value == "") {
          setGwei(e.target.value);
          break;
        }
        setGwei(e.target.value);
        //@ts-ignore
        setWei(Units.convert(e.target.value, "gwei", "wei"));
        //@ts-ignore
        setEth(Units.convert(e.target.value, "gwei", "eth"));
        break;

      default:
        break;
    }
  }
  return (
    <div>
      <Box sx={{ m: 2 }}></Box>

      <Box sx={{ m: 2 }}></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ margin: "10px" }}>
          <CardContent>
            <Typography variant="h4"> WEI</Typography>
            <Box sx={{ m: 2 }}></Box>

            <TextField
              label="WEI"
              value={wei}
              onChange={(e) => {
                updateValues("wei", e);
              }}
            ></TextField>
            <IconButton onClick={() => copyToClipboard(wei)}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </CardContent>
        </Card>

        <Card sx={{ margin: "10px" }}>
          <CardContent>
            <Typography variant="h4"> GWEI</Typography>
            <Box sx={{ m: 2 }}></Box>

            <TextField
              label="GWEI"
              value={gwei}
              onChange={(e) => {
                updateValues("gwei", e);
              }}
            ></TextField>

            <IconButton onClick={() => copyToClipboard(gwei)}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </CardContent>
        </Card>

        <Card sx={{ margin: "10px" }}>
          <CardContent>
            <Typography variant="h4"> ETH</Typography>
            <Box sx={{ m: 2 }}></Box>

            <TextField
              label="ETH"
              value={eth}
              onChange={(e) => {
                updateValues("eth", e);
              }}
            ></TextField>
            <IconButton onClick={() => copyToClipboard(eth)}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 2 }}></Box>

      <Box sx={{ m: 2 }}></Box>
    </div>
  );
}
