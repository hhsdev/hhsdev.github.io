import React from "react";
import * as PIXI from "pixi.js";
import jss from "jss";

class AboutMeBackground extends React.Component {
  constructor(props) {
    super(props);
    this.app = new PIXI.Application({width: 300, height: 300, antialias: true });
    this.app.renderer.backgroundColor = 0x061639;
    this.app.renderer.autoResize = true;
    this.firstRender = true;
  }

  componentDidMount() {
    this.div.appendChild(this.app.view);
    window.addEventListener('pointermove', (e) => this.renderBackground(e));
    this.renderBackground();
  }

  componentDidUpdate() {
    this.app.renderer.resize(this.div.clientWidth, this.div.clientHeight);
    this.renderBackground();
  }

  renderBackground(e) {
    const width = this.div.clientWidth;
    const height = this.div.clientHeight;
    this.app.stage.removeChildren();
    for (let x = 20; x <= width + 40; x += 120) {
      for (let y = 20; y <= height + 40; y += 120) {
        const circle = new PIXI.Graphics();
        circle.beginFill(0xa50c0e);
        let distance = 40;
        if (e !== undefined)
          distance = Math.hypot(x - e.clientX, y - e.clientY);
        circle.drawCircle(x, y, distance / 16);
        this.app.stage.addChild(circle);
      }
    }
  }

  render() {
    return (
      <div
        ref={div => (this.div = div)}
        style={{
          position: "absolute",
          width: "100%",
          height: this.props.height,
          zIndex: -1
        }}
      ></div>
    );
  }
}

export default AboutMeBackground;
