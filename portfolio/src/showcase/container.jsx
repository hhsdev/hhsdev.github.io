import React from "react";
import { Grid } from "@material-ui/core";
import ShowCaseCard from "./card.jsx";

export default function ShowCaseContainer(props) {
  return (
    <div style={{ padding: 8 }}>
      <Grid className="columns" container spacing={3} justify="space-around">
        {props.dataArray.map(data => (
          <Grid xs={10} sm={6} md={4}><ShowCaseCard data={data} /> </Grid>
        ))}
      </Grid>
    </div>
  );
}
