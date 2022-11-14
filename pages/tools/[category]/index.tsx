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

import { filter, some } from "lodash";
import { useRouter } from "next/router";
import DonateBanner from "../../../Components/DonateBanner";
import Nav from "../../../Components/Navigation/Nav";
import Footer from "../../../Components/Footer/Footer";

function Index({ categoryData, allTools }: any) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [tools, setTools] = useState(allTools);

  function makeTool(toolTag: any, toolCategory: any) {
    const tooldata = require(`../../../Components/Tools/${toolCategory.replaceAll(
      " ",
      ""
    )}/${toolTag.replaceAll("-", "")}/${toolTag.replaceAll("-", "")}.json`);

    return (
      <Grid item md={4}>
        <Box
          onClick={() => {
            router.push(
              `/tools/${toolCategory.replaceAll(" ", "")}/${toolTag.replaceAll(
                "-",
                ""
              )}`
            );
          }}
          sx={{ m: 3 }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography
                onClick={() =>
                  router.push("/tools/" + tooldata.toolCategory + "/")
                }
                sx={{ fontSize: 12 }}
                color="text.secondary"
                gutterBottom
              >
                {tooldata.toolCategory}
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
                  router.push(
                    `/tools/${toolCategory.replaceAll(
                      " ",
                      ""
                    )}/${toolTag.replaceAll(" ", "")}`
                  );
                }}
                size="small"
              >
                Open
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    );
  }
  function handleSearch(e: any) {
    setSearchQuery(e.target.value);
    if (true) {
      setTools(
        filter(allTools, (item) => {
          return item.name.startsWith(e.target.value.replaceAll(" ", "-"));
        })
      );
      // filter(allTools, (item: any): any => {
      //   return item["name"].startsWith(e.target.value.replaceAll(" ", "-"));
      // })
    }
  }
  return (
    <>
      <Nav></Nav>
      <div style={{ margin: "auto 10vw 0 10vw", height: "80vh" }}>
        <div
          style={{
            margin: "5vh 20px 5vh 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">{categoryData.name}</Typography>
          <TextField
            label="Search"
            value={searchQuery}
            onChange={handleSearch}
          ></TextField>
        </div>
        <Box sx={[{ m: 3 }]}></Box>
        <Typography variant="h5">{categoryData.description}</Typography>
        <Box sx={[{ m: 3 }]}></Box>
        <Divider></Divider>
        {/* <AdSense.Google client="ca-pub-8551404759580917"></AdSense.Google> */}

        <Grid container>
          {tools.map((tool: any) =>
            makeTool(tool.name, tool.category.toLowerCase())
          )}
        </Grid>
      </div>
      <DonateBanner></DonateBanner>
      <Footer></Footer>
    </>
  );
}

export default Index;

// export async function getServerSideProps(context: any) {
//   const categoryData = filter(
//     require(`../../../Components/Tools/categories.json`),
//     (item) =>
//       item.name.toLowerCase().replaceAll(" ", "") == context.params.category
//   )[0];
//   const allTools = filter(
//     require("../../../Components/Tools/tools.json"),
//     (item) =>
//       item.category.toLowerCase().replaceAll(" ", "") == context.params.category
//   );
//   return {
//     props: { categoryData, allTools },
//   };
// }

export async function getStaticProps(context: any) {
  const categoryData = filter(
    require(`../../../Components/Tools/categories.json`),
    (item) =>
      item.name.toLowerCase().replaceAll(" ", "") == context.params.category
  )[0];
  const allTools = filter(
    require("../../../Components/Tools/tools.json"),
    (item) =>
      item.category.toLowerCase().replaceAll(" ", "") == context.params.category
  );
  return {
    props: { categoryData, allTools },
  };
}

export async function getStaticPaths() {
  const categories = require("../../../Components/Tools/categories.json");

  const allParams: { params: { category: any } }[] = [];
  categories.map((x: any) => {
    allParams.push({
      params: {
        category: x.name.toLowerCase().replaceAll(" ", ""),
      },
    });
  });

  return {
    paths: allParams,
    fallback: false, // can also be true or 'blocking'
  };
}
