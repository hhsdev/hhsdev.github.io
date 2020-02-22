import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "../animation.css";
import Title from "./title";
import ChipsArray from "./chipsArray";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
  media: {
    height: 140
  }
}));

export default function ShowCaseCard(props) {
  const classes = useStyle();
  const [state, setState] = useState({
    facingFront: true
  });
  let capturedDiv = null;
  let isStartOfFlip = null;
  const startFlip = e => {
    const card = e.currentTarget;
    card.style.animation = "kf-flip-first-half 0.2s ease forwards";
    isStartOfFlip = true;
  };

  const midFlip = e => {
    const card = e.currentTarget;
    if (isStartOfFlip) {
      setState({ ...state, facingFront: !state.facingFront });
      card.style.animation = "kf-flip-second-half 0.2s ease forwards";
    } else {
      card.style.animation = "";
    }
    isStartOfFlip = false;
  };

  const frontContents = (
    <CardActionArea ref={ div => capturedDiv = div }>
      <CardMedia
        className={classes.media}
        image={props.data.thumbnail}
      />
      <CardContent>
        <Title title={props.data.title} />
        <ChipsArray tags={props.data.tags} />
      </CardContent>
    </CardActionArea>
  );

  const backContents = (
    <p style={{ padding: "8px" }}>{props.data.description}</p>
  );
  const card = (
    <Card className={classes.root} onClick={startFlip} onAnimationEnd={midFlip}>
      {state.facingFront ? frontContents : backContents}
    </Card>
  );
  return card;
}
