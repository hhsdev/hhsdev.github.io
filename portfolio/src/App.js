import React from "react";
import "./App.css";
import { appTheme } from "./theme.jsx";
import ShowCaseContainer from "./showcase/container.jsx";
import AboutMeContainer from "./aboutme/container.jsx";

const dataArray = [
  {
    title: "TTT: Machine Learning explained with tic-tac-toe",
    thumbnail: "ttt.jpg",
    tags: [
      { avatar: "js.png", name: "javascript" },
      { avatar: "css3.png", name: "css" },
      { avatar: "html.png", name: "html" }
    ],
    description: "Machine learning is a complicated subject, with usage of advanced mathematics and complex software structures. But at its core, it's a fairly simple concept. In this project, you can get a basic idea of how a machine learns."
  },
  {
    title: "Interia-notes: a note taking application, written entirely in C++",
    thumbnail: "ineria-notes.jpg",
    tags: [
      { avatar: "js.png", name: "javascript" },
      { avatar: "css3.png", name: "css" },
      { avatar: "html.png", name: "html" }
    ],
    description: "Tired of browsers disguised as apps taking up half your RAM? Also tired of native apps looking like they came out a decade ago?(Most probably did). Then this app is for you!"
  },
  {
    title: "TTT: Machine Learning explained with AI",
    thumbnail: "https://dummyimage.com/400x150/333333/dddddd",
    tags: [
      { avatar: "js.png", name: "javascript" },
      { avatar: "css3.png", name: "css" },
      { avatar: "html.png", name: "html" }
    ],
    description: "Knock on my door",
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
