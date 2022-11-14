import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Divider,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { getAllTools } from "../helper";
import { useRouter } from "next/router";
import DonateBanner from "../DonateBanner";
import { filter, some } from "lodash";
function Alltools() {
  const toolList = getAllTools();
  const allTools = toolList;
  const [searchQuery, setSearchQuery] = useState("");
  const [tools, setTools] = useState(toolList);
  const router = useRouter();
  const [params, setParams] = useState();

  function makeTool(toolTag: any, category: any) {
    const tooldata = require(`./${category
      .toLowerCase()
      .replaceAll(" ", "")}/${toolTag.replaceAll("-", "")}/${toolTag.replaceAll(
      "-",
      ""
    )}.json`);

    return (
      <Grid item md={4}>
        <Box
          onClick={() => {
            router.push(
              `/tools/${category
                .toLowerCase()
                .replaceAll(" ", "")}/${toolTag.replaceAll("-", "")}`
            );
          }}
          // sx={{ m: 3 }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography
                onClick={() =>
                  router.push(
                    "/tools/" +
                      tooldata.category.toLowerCase().replaceAll(" ", "") +
                      "/"
                  )
                }
                sx={{ fontSize: 12 }}
                color="text.secondary"
                gutterBottom
              >
                {tooldata.category}
              </Typography>
              <Typography variant="h5" component="div">
                {tooldata.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {tooldata.toolType}
              </Typography>
              <Typography variant="body2">{tooldata.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  router.push(`/tools/${category.toLowerCase()}/${toolTag}`);
                }}
                size="small"
              >
                Open
              </Button>
            </CardActions>
          </Card>
        </Box>{" "}
      </Grid>
    );
  }
  function handleSearch(e: any) {
    setSearchQuery(e.target.value);
    if (true) {
      setTools(
        filter(allTools, (item) => {
          return item["name"].startsWith(e.target.value.replaceAll(" ", "-"));
        })
      );
    }
  }
  useEffect(() => {
    if (params !== undefined) {
      setTools(
        filter(allTools, (item) => {
          //@ts-ignore
          return item["category"] === params.category;
        })
      );
    }
  }, [params]);

  return (
    <div>
      <div style={{ margin: "auto 10vw 10vh 10vw" }}>
        <div
          style={{
            margin: "5vh 20px 5vh 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">All Tools</Typography>
          <TextField
            label="Search"
            value={searchQuery}
            onChange={handleSearch}
          ></TextField>
        </div>
        <Divider></Divider>
        <Box sx={{ m: 6 }}></Box>
        <Grid spacing="30" container>
          {tools.map((tool: any) => makeTool(tool.name, tool.category))}
        </Grid>
      </div>
      <DonateBanner></DonateBanner>
    </div>
  );
}

export default Alltools;
