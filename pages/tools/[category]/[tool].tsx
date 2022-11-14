import React, { useEffect } from "react";
import { Typography, Divider, Box } from "@mui/material";
import Article from "../../../Components/Blog/Article";
import DonateBanner from "../../../Components/DonateBanner";
import { useRouter } from "next/router";
import GetTool from "../../../Components/Tools/GetTool";
import Nav from "../../../Components/Navigation/Nav";
import Footer from "../../../Components/Footer/Footer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Head from "next/head";
const getCategoriesFromPath = (
  path: string
): { name: string; category: string } => {
  let name = path.split("/")[3].split("?")[0];
  let category = path.split("/")[2].split("?")[0];
  return { name, category };
};
function ToolPage({ tooldata, toolCategory, toolName }: any) {
  return (
    <>
      <Head>
        <title>{`${tooldata.siteTitle} -  TOOLTOOLITO.COM FREE TOOLS AND CALCULATORS`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={tooldata.seoDescription}></meta>
        <meta
          name="keywords"
          content={"Tools, Calculators, Free, " + tooldata.toolKeywords}
        ></meta>
      </Head>
      <Nav></Nav>
      <div>
        <Box sx={{ padding: "3vh 10vw 0 10vw" }}>
          <Typography variant="h3">
            {tooldata.name}
            <Box sx={{ m: 3 }} />
          </Typography>
          <Box sx={{ m: 2 }}></Box>
          <Divider />
          <Box sx={{ m: 3 }} />
          {/* <AdSense.Google client="ca-pub-8551404759580917"></AdSense.Google> */}
          <Typography variant="h5">{tooldata.description}</Typography>
          <Box sx={{ m: 3 }} />
          <DndProvider backend={HTML5Backend}>
            {GetTool(toolName.replaceAll(" ", "").toLowerCase(), toolCategory)}
          </DndProvider>
          <Divider />
          <Box sx={{ m: 2 }}></Box>
          <Article tooldata={tooldata}></Article>
        </Box>
      </div>
      <DonateBanner></DonateBanner>
      <Footer></Footer>
    </>
  );
}

export default ToolPage;

// export async function getServerSideProps(context: any) {
//   const tooldata = require(`../../../Components/Tools/${context.params.category.replaceAll(
//     " ",
//     ""
//   )}/${context.params.tool.replaceAll("-", "")}/${context.params.tool}.json`);
//   return {
//     props: {
//       tooldata: tooldata,
//       toolName: context.params.tool,
//       toolCategory: context.params.category,
//     },
//   };
// }

export async function getStaticProps(context: any) {
  const tooldata = require(`../../../Components/Tools/${context.params.category.replaceAll(
    " ",
    ""
  )}/${context.params.tool.replaceAll("-", "")}/${context.params.tool}.json`);

  return {
    props: {
      tooldata: tooldata,
      toolName: context.params.tool,
      toolCategory: context.params.category,
    },
  };
}

export async function getStaticPaths() {
  const tools = require("../../../Components/Tools/tools.json");
  const allParams: { params: { category: any; tool: any } }[] = [];

  tools.forEach((x: any) => {
    allParams.push({
      params: {
        category: x.category.toLowerCase().replaceAll(" ", ""),
        tool: x.name.replaceAll("-", "").toLowerCase(),
      },
    });
  });

  return {
    paths: allParams,
    fallback: false, // can also be true or 'blocking'
  };
}
