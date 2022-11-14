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
import React, { useState, useEffect } from "react";

function SalaryCalculator() {
  const [hourlyWage, setHourlyWage] = useState(5);
  const [hoursWorkedPerday, setHoursWorkedPerday] = useState(9);
  const [daysWorkedPerWeek, setDaysWorkedPerWeek] = useState(5);
  const [result, setResult] = useState(900);

  useEffect(() => {
    setResult(hourlyWage * hoursWorkedPerday * daysWorkedPerWeek * 4);
  }, [hourlyWage, hoursWorkedPerday, daysWorkedPerWeek]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ textAlign: "center", margin: "10px" }}>
          <CardContent>
            <Typography variant="h4"> Hourly Wage</Typography>
            <Box sx={{ m: 2 }}></Box>
            <TextField
              label="Hourly Wage"
              value={hourlyWage}
              onChange={(e: any) => setHourlyWage(parseFloat(e.target.value))}
              // onChange={(e) => {
              //   updateValues("wei", e);
              // }}
            ></TextField>
          </CardContent>
        </Card>
        <Card sx={{ textAlign: "center", margin: "10px" }}>
          <CardContent>
            <Typography variant="h4"> Hours Worked Daily</Typography>
            <Box sx={{ m: 2 }}></Box>
            <TextField
              label="Hours Worked Daily"
              value={hoursWorkedPerday}
              onChange={(e: any) =>
                setHoursWorkedPerday(parseFloat(e.target.value))
              }
              // onChange={(e) => {
              //   updateValues("wei", e);
              // }}
            ></TextField>
          </CardContent>
        </Card>
        <Card sx={{ display: "flex", textAlign: "center", margin: "10px" }}>
          <CardContent>
            <Typography variant="h4"> Days Worked Per Week</Typography>
            <Box sx={{ m: 2 }}></Box>
            <TextField
              label="Days Per Week"
              value={daysWorkedPerWeek}
              onChange={(e: any) =>
                setDaysWorkedPerWeek(parseFloat(e.target.value))
              }
              // value={wei}
              // onChange={(e) => {
              //   updateValues("wei", e);
              // }}
            ></TextField>
          </CardContent>
        </Card>
        <Card sx={{ display: "flex", textAlign: "center", margin: "10px" }}>
          <CardContent>
            <Typography variant="h4">Monthly Salary</Typography>
            <Box sx={{ m: 2 }}></Box>
            <TextField
              label=""
              value={result}
              // value={wei}
              // onChange={(e) => {
              //   updateValues("wei", e);
              // }}
            ></TextField>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default SalaryCalculator;
