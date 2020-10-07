import React, { Component } from "react";
import { Link } from 'react-router-dom';
import CollapsibleContact from '../CollapsibleContact';
import 'materialize-css/dist/css/materialize.min.css';
import { RiCodeSSlashLine, RiAccountCircleFill, RiHome2Fill } from 'react-icons/ri';
import './style.css';

class Sidenav extends Component {

  componentDidMount() {
    const M = window.M
    let sidenav = M.Sidenav.init(this.Sidenav, {draggable: true,});
    sidenav.close();
  }

  render() {
    return (
      <div>
        <nav>
          <a href="slide-out" data-target="slide-out" className="sidenav-trigger z-depth-4"><i className="material-icons">menu</i></a>
        </nav>
        <ul ref={Sidenav => { this.Sidenav = Sidenav; }} id="slide-out" className="sidenav sidenav-fixed z-depth-4">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={require('../../utils/img/sidenav.jpg')} alt='background' />
              </div>
              <Link href="#user"><img className="circle z-depth-1" src={require('../../utils/img/profile.jpg')} alt='profile' /></Link>
              <Link href="#name"><span className="subheader name">Crysta Jeffcoat</span></Link>
            </div>
          </li>
          <br></br>
          <CollapsibleContact />
          <li><div className="divider"></div></li>
          <li><Link className="subheader"><i className="material-icons">navigate_next</i>Directory</Link></li>
          <li><Link className="waves-effect" to="/"><i><RiHome2Fill size={24} /></i>Home</Link></li>
          <li><Link className="waves-effect" to="/about"><i><RiAccountCircleFill size={24} /></i>About</Link></li>
          <li><Link className="waves-effect" to="/projects"><i><RiCodeSSlashLine size={24} /></i>Projects</Link></li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;