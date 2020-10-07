import React, { Component } from 'react'
import { GoMarkGithub, GoMail, GoFilePdf } from 'react-icons/go';
import { RiLinkedinFill, RiAccountCircleLine } from 'react-icons/ri';
import './style.css';

class Collapsible extends Component {

  componentDidMount() {
    const M = window.M
    document.addEventListener('DOMContentLoaded', function () {
      let elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems, {});
    });
  }

  render() {
    return (
      <ul className="collapsible popout">
        <li>
          <div className="collapsible-header"><i><RiAccountCircleLine size={26}/></i>Contact Me</div>
          <div className="collapsible-body">
          <ul>
            <li><a target="blank" href={"mailto:crystajeffcoat@gmail.com"}><i><GoMail size={24} /></i><span className='subheader email'>Email</span></a></li>
            <li><a target="blank" href="https://github.com/CrystaJeffcoat"><i><GoMarkGithub size={24} /></i><span className='subheader'>Github</span></a></li>
            <li><a target="blank" href="https://docs.google.com/document/d/1G_y_nnVFvOSELeFb_yqNKNXBItnUYT91faN1Vq1AuvU/edit?usp=sharing"><i><GoFilePdf size={24} /></i><span className='subheader'>Resume</span></a></li>
            <li><a target="blank" href="https://www.linkedin.com/in/crysta-jeffcoat/"><i><RiLinkedinFill size={24} /></i><span className='subheader'>LinkdIn</span></a></li>
            </ul>
          </div>
        </li>
      </ul>
    )
  }
}

export default Collapsible;