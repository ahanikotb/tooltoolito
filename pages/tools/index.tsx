import React from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Navigation/Nav";
import { filter, some } from "lodash";
import Alltools from "../../Components/Tools/Alltools";

function ToolsPage({ tooldata, categoryData }: any) {
  return (
    <>
      <Nav></Nav>
      <Alltools></Alltools>
      <Footer></Footer>
    </>
  );
}

export default ToolsPage;

// export async function getServerSideProps(context: any) {
//   const categoryData = require(`../../Components/tools/categories.json`);

//   const tooldata = require(`../../Components/tools/tools.json`);
//   return {
//     props: {
//       tooldata,
//       categoryData,
//     },
//   };
// }
