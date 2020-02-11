import React from 'react';
import { Card } from '@material-ui/core';
import Title from './title';
import ChipsArray from './chipsArray';

class ShowCaseCard extends React.Component {
  render() {
    return (
      <Card className="showCase margin-2">
        <img src={this.props.data.img} />
        <div style={{ padding: '8px' }}>
          <Title title={this.props.data.title} />
          <ChipsArray tags={this.props.data.tags} />

        </div>
      </Card>
    );
  }
}

export default ShowCaseCard;