import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Profiles extends Component{
    render() {
        if (!this.props.data) return null;
    
        const bios = this.props.data.bios.map(function (bios) {
          let bioImage = "images/profiles/" + bios.image;
    
          return (
              <div className="row">
                <div className="three columns">
                    <img className="profile-pic" alt={bios.name} src={bioImage} />
                </div> 
                
                <div className="row">
                    <h2>
                        {bios.name}
                    </h2>
                    <h3>
                        {bios.title}
                    </h3>
                    <p>
                        {bios.text}
                    </p>
                </div>

              </div>
          );
        });
    
        return (
          <section id="profiles">
            <Fade left duration={1000} distance="40px">
              <div className="row">
                  <h1>Profiles</h1>
    
                  <div
                    id="portfolio-wrapper"
                    className="bgrid-quarters s-bgrid-thirds cf"
                  >
                    {bios}
                  </div>
                
              </div>
            </Fade>
          </section>
        );
      }
}

export default Profiles;