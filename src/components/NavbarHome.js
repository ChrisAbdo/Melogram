import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import Identicon from 'identicon.js';
import './NavbarHome.css';


class NavbarHome extends Component {
  render() {
      return (
          <div className="navbarHome">
            <nav class="navbar navbar-expand-lg rounded">
                <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <a class="nav-link active font-effect-anaglyph" aria-current="page" href="/"><b>Home</b></a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a class="nav-link" href="/home"><b>Marketplace</b></a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a class="nav-link" href="/contact"><b>Contact</b></a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                <h3 className="navbarAccount">Signed in as: {this.props.account}
                </h3>
              </div>
            </nav>
           </div>
      
      
  );
}
  
}

export default NavbarHome;
