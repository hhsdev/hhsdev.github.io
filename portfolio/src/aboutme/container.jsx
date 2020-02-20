import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: '300px',
    background: 'red',
  }
}));

export default function AboutMeContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}></div>
  );
}