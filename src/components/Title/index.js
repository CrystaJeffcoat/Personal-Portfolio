import React from 'react';
import './style.css';

function Title(props) {
  return (
    <div className= "center" id="title">
      {props.children}
      <hr></hr>
    </div>
  )
}

export default Title;