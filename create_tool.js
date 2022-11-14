// script to init a new tool to tooltoolito
const fs = require("fs");

const category = process.argv[2];
const toolName = process.argv[3];

if (
  fs.existsSync(
    `./Components/Tools/${category.toLowerCase().replaceAll(" ", "")}`
  )
) {
} else {
  fs.mkdirSync(
    `./Components/Tools/${category.toLowerCase().replaceAll(" ", "")}`
  );
}

const jsonTemplate = {
  name: "",
  toolType: "",
  toolCategory: "",
  description: "",
  siteTitle: "",
  seoDescription: "",
  articleTitle: "",
  articleAuthor: "TOOLTOOLITO Team",
  article: [
    {
      t2: "",
      p1: "",
      p2: "",
    },
  ],
};

if (
  fs.existsSync(
    `./Components/Tools/${category
      .toLowerCase()
      .replaceAll(" ", "")}/${toolName}`
  )
) {
} else {
  //write json file
  fs.mkdirSync(
    `./Components/Tools/${category
      .toLowerCase()
      .replaceAll(" ", "")}/${toolName}`
  );
  fs.writeFileSync(
    `./Components/Tools/${category
      .toLowerCase()
      .replaceAll(" ", "")}/${toolName}/${toolName}.json`,
    JSON.stringify(jsonTemplate)
  );
  //write ts file
  let template = fs.readFileSync("./template.tsx", "utf8");
  template = template.replaceAll("template", toolName);
  fs.writeFileSync(
    `./Components/Tools/${category
      .toLowerCase()
      .replaceAll(" ", "")}/${toolName}/${toolName}.tsx`,
    template
  );
}
const updateCategories = (category, name) => {
  let categories = fs.readFileSync("./Components/Tools/categories.json");
  categories = JSON.parse(categories);
  for (let i of categories) {
    if (i.name == category) {
      return;
    }
  }
  categories.push({
    name: category,
    description: "",
    seoDescription: "",
  });
  fs.writeFileSync(
    "./Components/Tools/categories.json",
    JSON.stringify(categories)
  );
};

const updateTools = (category, name) => {
  let tools = fs.readFileSync("./Components/Tools/tools.json");
  tools = JSON.parse(tools);
  for (let i of tools) {
    if (i.name == name) {
      return;
    }
  }
  tools.push({
    name,
    category,
  });
  fs.writeFileSync("./Components/Tools/tools.json", JSON.stringify(tools));
};

updateCategories(category, toolName);
updateTools(category, toolName);
