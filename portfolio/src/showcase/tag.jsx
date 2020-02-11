import React from 'react';
import { Avatar, Chip, makeStyles } from '@material-ui/core';

export default function Tag(props) {
  return (
    <Chip
      avatar={<Avatar src={props.avatar} />}
      size="small"
      onClick={props.onClick}
      label={props.name}/>
  );
}

