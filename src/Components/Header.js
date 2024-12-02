import React, {useState, Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

class Header extends Component {
  
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const visionstatement= this.props.data.visionstatement;
    
    

    return (
      <header id="home">
        <ParticlesBg color="#F08080" type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#profiles">
                Profiles
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h2>Vision Statement</h2>
                <h3>{visionstatement}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <Popup trigger={
                  <a className="button btn project-btn">
                    <i className="fa fa-book"></i>Member Portal
                  </a>
                }
                modal
                >
                  <div className="modal">
                    <div className="content">
                      <input 
                        type={"password"}
                        placeholder="Password"
                        className="input"
                      />
                      
                    </div>
                    <button>
                      Sign in
                    </button>
                  </div>
                </Popup>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
