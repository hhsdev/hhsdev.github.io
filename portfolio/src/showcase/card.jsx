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
  withStyles
} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  },
  media: {
    minHeight: 140
  }
}));

const styles = theme => ({
  root: {
    margin: theme.spacing(1)
  },
  media: {
    minHeight: 140
  }
});

class ShowCaseCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facingFront: true
    };
  }

  startFlip(e) {
    const card = e.currentTarget;
    card.style.animation = "kf-flip-first-half 0.2s ease forwards";
    card.style.height = card.clientHeight + 'px';
    this.inFirstHalfOfFlipping = true;
  }

  midFlip(e) {
    const card = e.currentTarget;
    if (this.inFirstHalfOfFlipping) {
      this.setState({ facingFront: !this.state.facingFront });
      card.style.animation = "kf-flip-second-half 0.2s ease forwards";
    } else {
      card.style.animation = "";
    }
    this.inFirstHalfOfFlipping = false;
  }

  render() {
    const { data, classes } = this.props;
    const frontContents = (
      <CardActionArea ref={div => this.div = div }>
        <CardMedia className={classes.media} image={data.thumbnail} />
        <CardContent>
          <Title title={data.title} />
          <ChipsArray tags={data.tags} />
        </CardContent>
      </CardActionArea>
    );

    const backContents = (
      <p style={{ padding: "8px" }}>{data.description}</p>
    );
    const card = (
      <Card
        className={classes.root}
        onClick={(e) => this.startFlip(e)}
        onAnimationEnd={(e) => this.midFlip(e)}
      >
        {this.state.facingFront ? frontContents : backContents}
      </Card>
    );
    return card;
  }
}

export default withStyles(styles)(ShowCaseCard);