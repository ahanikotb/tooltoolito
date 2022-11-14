//@ts-nocheck
import React, { useState } from "react";
import {
  TextField,
  Box,
  Card,
  CardContent,
  ToggleButton,
  Typography,
  ToggleButtonGroup,
  IconButton,
  Snackbar,
} from "@mui/material";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function TokenPriceCalculator(props: any) {
  const [totalSupply, setTotalSupply] = useState(1000000);
  const [targetPrice, setTargetPrice] = useState(0.000001);
  const [liquidityCapital, setLiquidityCapital] = useState(10);
  const [mode, setMode] = useState("liquidityCapital");
  //   const copyToClipboard = props.alltools.copyToClipboard;
  const copyToClipboard = () => {};
  function calculateTotalSupply() {
    /*
formula 
totalSupply = 1 token * totalLiquidity / targetPrice
*/
    return liquidityCapital / targetPrice;
  }

  function calculateTargetPrice() {
    /*
formula
targetPrice = 1 * CAPITAL / TOTAL SUPPLY
*/
    return liquidityCapital / totalSupply;
  }

  function calculateliquidityCapital() {
    /*
    formula
    liquidityCapital= totalSupply * targetPrice / token     ####//(1)
    */
    return totalSupply * targetPrice;
  }

  function updateValues(eventType, e) {
    if (isNaN(e.target.value)) {
      return;
    }
    if ((e.target.value === null) | (e.target.value === "")) {
      return;
    }
    switch (eventType) {
      case "totalsupply":
        if (mode === "targetPrice") {
          setTargetPrice(calculateTargetPrice());
        }
        if (mode === "liquidityCapital") {
          setLiquidityCapital(calculateliquidityCapital());
        }
        if (mode != "totalSupply") {
          setTotalSupply(e.target.value);
        }
        break;

      case "targetprice":
        if (mode === "liquidityCapital") {
          setLiquidityCapital(calculateliquidityCapital());
        }
        if (mode != "targetPrice") {
          setTargetPrice(e.target.value);
        }

        if (mode === "totalSupply") {
          setTotalSupply(calculateTotalSupply());
        }
        break;
      case "liquidityCapital":
        if (mode != "liquidityCapital") {
          setLiquidityCapital(e.target.value);
        }

        if (mode === "targetPrice") {
          setTargetPrice(calculateTargetPrice());
        }
        if (mode === "totalSupply") {
          setTotalSupply(calculateTotalSupply());
        }
        break;
      default:
        break;
    }
  }

  function makeCard(text, target, value) {
    return (
      <Card>
        <CardContent>
          <Box sx={{ m: 2 }}></Box>
          <Typography variant="h6">{text}</Typography>
          <Box sx={{ m: 2 }}></Box>

          <TextField
            label={text}
            value={value}
            onChange={(e) => updateValues(target, e)}
          ></TextField>
          <IconButton onClick={() => copyToClipboard(value)}>
            {" "}
            <ContentCopyIcon></ContentCopyIcon>
          </IconButton>
          <Box sx={{ m: 2 }}></Box>
        </CardContent>
      </Card>
    );
  }

  function handleSelection(e) {
    if (e.target.value !== null) {
      setMode(e.target.value);
    }
  }

  return (
    <div>
      <Box sx={{ m: 2 }}></Box>

      {mode === "totalSupply" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {makeCard(
            "Liquidity Capital in usd",
            "liquidityCapital",
            liquidityCapital
          )}
          {makeCard("Target Price", "targetprice", targetPrice)}
          {makeCard("Total Supply", "totalsupply", totalSupply)}
        </Box>
      )}

      {mode === "targetPrice" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {makeCard("Total Supply", "totalsupply", totalSupply)}
          {makeCard(
            "Liquidity Capital in usd",
            "liquidityCapital",
            liquidityCapital
          )}
          {makeCard("Target Price", "targetprice", targetPrice)}
        </Box>
      )}
      {mode === "liquidityCapital" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {makeCard("Total Supply", "totalsupply", totalSupply)}
          {makeCard("Target Price", "targetprice", targetPrice)}
          {makeCard(
            "Liquidity Capital in usd",
            "liquidityCapital",
            liquidityCapital
          )}
        </Box>
      )}

      <Box sx={{ m: 2 }}></Box>
      <Box textAlign="center">
        <ToggleButtonGroup
          exclusive
          onChange={(e) => {
            handleSelection(e);
          }}
          value={mode}
        >
          <ToggleButton value="totalSupply">Total Supply</ToggleButton>
          <ToggleButton value="liquidityCapital">
            Liquidity Capital{" "}
          </ToggleButton>
          <ToggleButton value="targetPrice">Target Price</ToggleButton>
        </ToggleButtonGroup>
        <Box sx={{ m: 2 }}></Box>
      </Box>
    </div>
  );
}
