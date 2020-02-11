import React from "react";
import Tag from './tag.jsx';
import { Chip, makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

export default function ChipsArray(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>{renderTags(props.tags, handleClick)}</div>
  );
}

const handleClick = event => {};

const renderTags = (tags, handler) => {
  return tags.map(tag => {
    return <Tag avatar={tag.avatar} name={tag.name} onClick={handler} />
  });
};
