import React, { Component } from "react";
import Fade from "react-reveal";

class Offer extends Component{
    render(){
        if (!this.props.data) return null;

        const offer = this.props.data.whatweoffer;

        return (
            <section id="offer">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <h2>What We Offer</h2>

              <p>{offer}</p>
              
            </div>
          </div>
        </Fade>
      </section>
        );
    }
}

export default Offer