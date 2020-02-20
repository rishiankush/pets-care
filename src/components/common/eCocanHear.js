import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Products3 from '../../assets/img/Products3.png';

class ECocanHear extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
<div className="eco--promo--2" id="promo2">
    <div className="container">
        <div className="row">

        <div className="col-md-6">
            <img src={Products3} alt="" />
        </div>

            <div className="col-lg-6">
                <div className="eco--inner eco--ml-30">
                    <div className="eco--sec--title">
                        <span>From anywhere of your room</span>
                        <h1>Dogs Can hear you!</h1>
                    </div>
                    <ul className="eco--promo--list--1 eco--mt50">
                        <li>
                            <i className="fa fa-music"></i>
                            Play your favourite music
                        </li>
                        <li>
                            <i className="fa fa-codiepie"></i>
                            Order pizza from Domino’s
                        </li>
                        <li>
                            <i className="fa fa-briefcase"></i>
                            Voice control your home
                        </li>
                        <li>
                            <i className="fa fa-home"></i>
                            Find local business.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>  

    );
        
  }
}

export default withRouter(ECocanHear);
