import React from "react";
import "../stylesheet/reset.css";
import "../stylesheet/style.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="nav">
        <h1 className="logo">COVID - 19</h1>
      </nav>
    );
  }
}

export default Header;
