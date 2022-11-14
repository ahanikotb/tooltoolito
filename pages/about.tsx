import React from "react";
import DonateBanner from "../Components/DonateBanner";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navigation/Nav";

function about() {
  return (
    <div>
      <Nav></Nav>
      <DonateBanner></DonateBanner>
      <Footer></Footer>
    </div>
  );
}

export default about;
