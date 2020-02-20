import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    font: 'bold 1.2em Roboto, sans-serif'
  }
}));

export default function Title(props) {
  const classes = useStyles();
  return <div className={classes.root}>{props.title}</div>;
}
