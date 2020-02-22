import React from "react";
import { withStyles } from "@material-ui/core";
import AboutMeBackground from './background.jsx';
import AboutMeDescContainer from './descContainer.jsx';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
};

class AboutMeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    this.updateHeight();
    window.addEventListener('resize', () => this.updateHeight());
  }

  updateHeight() {
    this.setState({height: window.innerHeight });
  }

  render() {
    return (
      <div className={this.props.classes.root} ref={div => this.div = div} style={{ height: this.state.height }}>
        <AboutMeBackground height={this.state.height} />
        <AboutMeDescContainer />
      </div>
    )
  }
}

export default withStyles(styles)(AboutMeContainer);