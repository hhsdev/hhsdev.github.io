import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "../animation.css";

import { Card, makeStyles, FilledInput } from "@material-ui/core";
import Title from "./title";
import ChipsArray from "./chipsArray";

const useStyle = makeStyles(theme => ({
  root: {
    display: "inline-block",
    margin: theme.spacing(1)
  }
}));

export default function ShowCaseCard(props) {
  const classes = useStyle();
  const [state, setState] = useState({
    facingFront: true
  });
  let isStartOfFlip = null;
  const startFlip = e => {
    const card = e.currentTarget;
    card.style.animation = "kf-flip-first-half 0.12s ease forwards";
    isStartOfFlip = true;
  };

  const midFlip = e => {
    const card = e.currentTarget;
    console.log(card.style.border);
    if (isStartOfFlip) {
      setState({ ...state, facingFront: !state.facingFront})
      card.style.animation = "kf-flip-second-half 0.12s ease forwards";
    } else {
      card.style.animation = "";
    }
    isStartOfFlip = false;
  };

  const frontContents = (
    <div>
      <img
        src={props.data.thumbnail}
        style={{ width: "100%", maxHeight: "200px" }}
      />
      <div style={{ padding: "8px" }}>
        <Title title={props.data.title} />
        <ChipsArray tags={props.data.tags} />
      </div>
    </div>
  );

  const backContents = (
    <p style={{ padding: '8px' }}>
      {props.data.description}
    </p>
  )
  const card = (
    <Card
      style={{ margin: 8, height: "100%" }}
      onClick={startFlip}
      onAnimationEnd={midFlip}
    >
      {state.facingFront ? frontContents : backContents }
    </Card>
  );
  return card;
}
