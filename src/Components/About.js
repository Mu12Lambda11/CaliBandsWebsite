import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;


    const missionstatement = this.props.data.missionstatement;


    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <h2>Mission Statement</h2>

              <p>{missionstatement}</p>
              
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
