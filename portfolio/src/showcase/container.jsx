import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ShowCaseCard from "./card.jsx";

export default function ShowCaseContainer(props) {
  return (
    <Grid container justify="center">
      <Grid className="columns" container item xs={11} spacing={4} justify="center">
        {props.dataArray.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}> <ShowCaseCard data={data} /> </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
