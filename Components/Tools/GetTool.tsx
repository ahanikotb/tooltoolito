import React, { Suspense } from "react";
import dynamic from "next/dynamic";

function GetTool(name: any, category: any) {
  const DynamicTool = dynamic(
    () =>
      import(
        `./${category.toLowerCase()}/${name.replaceAll(
          "-",
          ""
        )}/${name.replaceAll("-", "")}`
      ),
    {
      suspense: true,
    }
  );
  return (
    <Suspense fallback={"loading..."}>
      <DynamicTool />
    </Suspense>
  );
}

export default GetTool;
