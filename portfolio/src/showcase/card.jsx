import React from "react";
import 'bulma/css/bulma.min.css';
import { Card, makeStyles } from "@material-ui/core";
import Title from "./title";
import ChipsArray from "./chipsArray";

const useStyle = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    margin: theme.spacing(1)
  }
}));

export default function ShowCaseCard(props) {
  const classes = useStyle();
  return (
    <Card style={{ margin: 8}}>
      <img src={props.data.img} style={{ width: '100%' }}/>
      <div style={{ padding: "8px" }}>
        <Title title={props.data.title} />
        <ChipsArray tags={props.data.tags} />
      </div>
    </Card>
  );
}
