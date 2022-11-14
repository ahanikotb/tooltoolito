import React, { useEffect, useRef, useState } from "react";
import { useClientsideload } from "../../../helper";
import dynamic from "next/dynamic";
// import stringSimilarity from "./stringSimilarity";
import reactElementToJSXString from "react-element-to-jsx-string";
import htmr from "htmr";
const RichTextarea = dynamic(
  () =>
    import("rich-textarea").then(({ RichTextarea }) => {
      return RichTextarea;
    }),
  {
    ssr: false,
  }
);
function HtmlToReactComponent() {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  // const [highlightedText, setHighlightedText] = useState("");
  // const [matches, setMatches] = useState(0);

  const loadComponent = useClientsideload();

  const convertHTML = (text: string) => {
    try {
      //@ts-ignore
      const html = reactElementToJSXString(htmr(text));
      setSecondText(html);
    } catch {}
  };

  return (
    <div>
      <div
        style={{
          width: "80vw",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        ></div>
        {loadComponent ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <RichTextarea
              value={firstText}
              style={{ width: "600px", minHeight: "60vh" }}
              onChange={(e) => {
                setFirstText(e.target.value);
                convertHTML(e.target.value);
              }}
            ></RichTextarea>
            <RichTextarea
              style={{ width: "600px", minHeight: "60vh" }}
              value={secondText}
              onChange={(e: any) => {
                setSecondText(e.target.value);
              }}
            ></RichTextarea>
          </div>
        ) : (
          ""
        )}
        {/* <button onClick={checkDifference}>CLICK ME</button> */}
      </div>
    </div>
  );
}

export default HtmlToReactComponent;
