import React from "react";
import "./App.css";
import { appTheme } from "./theme.jsx";
import ShowCaseCard from "./showcase/card.jsx";
import { AppBar, Toolbar, ThemeProvider } from "@material-ui/core";

const dataArray = [
  {
    title: "TTT: Machine Learning explained with AI",
    img: "https://dummyimage.com/400x150/333333/dddddd",
    tags: [
      { avatar: "javascript.svg", name: "javascript" },
      { avatar: "css3.svg", name: "css" },
      { avatar: "html5.svg", name: "html" }
    ]
  },
  {
    title: "",
    img: "https://dummyimage.com/400x150/333333/dddddd",
    tags: [
      { avatar: "javascript.svg", name: "javascript" },
      { avatar: "css3.svg", name: "css" },
      { avatar: "html5.svg", name: "html" }
    ]
  }
];

function App() {
  return dataArray.map(data => <ShowCaseCard data={data} />);
}

export default App;
