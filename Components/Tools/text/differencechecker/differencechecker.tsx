import React, { useEffect, useRef, useState } from "react";
import { useClientsideload } from "../../../helper";
import dynamic from "next/dynamic";
import stringSimilarity from "./stringSimilarity";

const RichTextarea = dynamic(
  () =>
    import("rich-textarea").then(({ RichTextarea }) => {
      return RichTextarea;
    }),
  {
    ssr: false,
  }
);
function DifferenceChecker() {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [matches, setMatches] = useState(0);
  const [stringSimilarityPercentage, setStringSimilarityPercentage] =
    useState(0);
  const loadComponent = useClientsideload();

  const checkDifference = () => {
    let first;
    let second;
    let match_buffer = 0;
    first = firstText;
    second = secondText;
    if (firstText.length < secondText.length) {
      first = secondText;
      second = firstText;
    }
    let highlightBuffer = "";
    for (let i in Array.from({ length: first.length }, () => 1)) {
      if (first[i] == second[i]) {
        highlightBuffer += "1";
        match_buffer++;
      } else {
        highlightBuffer += "0";
      }
    }
    setHighlightedText(highlightBuffer);
    setMatches(match_buffer);
    setStringSimilarityPercentage(stringSimilarity(first, second));
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
        >
          <h3>
            {stringSimilarityPercentage.toString().substring(0, 4)}% Similarity
          </h3>
          <h3> {matches} Matches</h3>
        </div>
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
              onChange={(e: any) => {
                setFirstText(e.target.value);
                checkDifference();
              }}
              style={{ width: "600px", minHeight: "60vh" }}
            >
              {(v) => {
                return v.split("").map((t, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor:
                        highlightedText[i] === "1"
                          ? "rgba(243,3,4,0.5)"
                          : undefined,
                    }}
                  >
                    {t}
                  </span>
                ));
              }}
            </RichTextarea>
            <RichTextarea
              style={{ width: "600px", minHeight: "60vh" }}
              value={secondText}
              onChange={(e: any) => {
                setSecondText(e.target.value);
                checkDifference();
              }}
            >
              {(v) => {
                return v.split("").map((t, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor:
                        highlightedText[i] === "1"
                          ? "rgba(243,3,4,0.5)"
                          : undefined,
                    }}
                  >
                    {t}
                  </span>
                ));
              }}
            </RichTextarea>
          </div>
        ) : (
          ""
        )}
        {/* <button onClick={checkDifference}>CLICK ME</button> */}
      </div>
    </div>
  );
}

export default DifferenceChecker;
