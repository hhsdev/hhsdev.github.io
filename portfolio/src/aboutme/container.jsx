import React from "react";
import { withStyles } from "@material-ui/core";
import AboutMeBackground from './background.jsx';
const styles = {
  root: {
    height: '100vh',
    background: '#474350',
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
    this.setState({height: this.div.clientHeight});
  }

  render() {
    return (
      <div className={this.props.classes.root} ref={div => this.div = div} onChange={this.updateHeight}>
        <AboutMeBackground height={this.state.height}/>
      </div>
    )
  }
}

export default withStyles(styles)(AboutMeContainer);