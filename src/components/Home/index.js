import React, { Component } from 'react';
import Title from '../Title';
import { RiTerminalLine } from 'react-icons/ri'
import './style.css';

class HomeTitle extends Component {

  render() {
    return (
      <div id="homepage">
        <Title>
          <h1 id="homeTitle">Crysta <span>Jeffcoat</span></h1>
          <p id="webDev">full-stack web developer</p>
        </Title>
        <p id="learnmore"><a href="/about"><i><RiTerminalLine size={18}/></i> Learn more</a></p>
        <ul id="titleLi">
          <li></li>
        </ul>
      </div>
    )
  }
}

export default HomeTitle;