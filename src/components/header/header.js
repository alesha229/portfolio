import './header.css';
import React from 'react';
function Header() {
  return (
    <div className="header">
    <h1 className="main_header">Hello, this is my <strong>stack</strong></h1>
    <div className="main_stack">
        <div className="card_stack_down card_stack"> <div className="JS svg_img"></div><p>6 month</p></div>
        <div className="card_stack"><div className="REACT svg_img"></div><p>3 month</p></div>
        <div className="card_stack_down card_stack"><div className="GIT svg_img"></div><p>2 month</p></div>
    </div>
    </div>
  );
}

export default Header;
