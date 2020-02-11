import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div className="text-size-2 text-color-primary text-font-bold margin-normal">
        {this.props.title}
      </div>
    );
  }
}

export default Title;