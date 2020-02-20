import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ShowCaseCard from "./card.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}));

export default function ShowCaseContainer(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid className="columns" container item xs={11} spacing={4}>
        {props.dataArray.map(data => (
          <Grid item xs={12} sm={6} md={4} lg={3}> <ShowCaseCard data={data} /> </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
