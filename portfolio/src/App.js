import React from "react";
import "./App.css";
import { appTheme } from "./theme.jsx";
import ShowCaseContainer from "./showcase/container.jsx";
import AboutMeContainer from "./aboutme/container.jsx";

const dataArray = [
  {
    title: "TTT: Machine Learning explained with AI",
    thumbnail: "https://dummyimage.com/400x150/333333/dddddd",
    tags: [
      { avatar: "javascript.svg", name: "javascript" },
      { avatar: "css3.svg", name: "css" },
      { avatar: "html5.svg", name: "html" }
    ]
  },
  {
    title: "",
    thumbnail: "https://dummyimage.com/400x150/333333/dddddd",
    tags: [
      { avatar: "javascript.svg", name: "javascript" },
      { avatar: "css3.svg", name: "css" },
      { avatar: "html5.svg", name: "html" }
    ]
  },
  {
    title: "TTT: Machine Learning explained with AI",
    thumbnail: "https://dummyimage.com/400x150/333333/dddddd",
    tags: [
      { avatar: "javascript.svg", name: "javascript" },
      { avatar: "css3.svg", name: "css" },
      { avatar: "html5.svg", name: "html" }
    ]
  },
  {
    title: "TTT: Machine Learning explained with AI",
    thumbnail: "https://dummyimage.com/400x150/333333/dddddd",
    tags: [
      { avatar: "javascript.svg", name: "javascript" },
      { avatar: "css3.svg", name: "css" },
      { avatar: "html5.svg", name: "html" }
    ]
  }
];

function App() {
  return (
    <div>
      <AboutMeContainer />
      <ShowCaseContainer dataArray={dataArray} />
    </div>
  );
}

export default App;
