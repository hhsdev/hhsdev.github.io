import React from "react";

export default function AboutMeBackground(props) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: props.height,
        background: "#333333",
        zIndex: -1
      }}
    >
      {" "}
    </div>
  );
}
