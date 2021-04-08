import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div style={{boxShadow: '1px 4px 5px #ccc'}} className="nav-wrapper blue accent-3">
            <Link
              to="/"
              className="col s5 brand-logo center white-text"
            >
              DriveBuddy
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;