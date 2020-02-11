import React from "react";
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
    <div className={classes.root}>{renderChip(props.tags, handleClick)}</div>
  );
}

const handleClick = event => {};

const renderChip = (tags, handler) => {
  return tags.map(tag => {
    return (
      <Chip
        avatar={<Avatar src="javascript.svg" />}
        className="margin-normal"
        onClick={handler}
        size="small"
        label={tag}
      />
    );
  });
};
