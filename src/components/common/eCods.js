import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import MakeBeautiful from '../../assets/img/MakeBeautiful.png';

class Ecods extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
<div class="site_wrap">
<div className="eco--promo--1 eco--pd--140 c1-bg eco--bg--ptrn--1">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="eco--sec--title--white text-center">
                    <span>Dogs delivers awesome sounds</span>
                    <h1>Make  <br /> beautiful  <br /> noise</h1>
                </div>
            </div>
        </div>
        <div className="eco--promo--image--1">
            <img src={MakeBeautiful} alt="" />
        </div>
    </div>
</div> 
</div>
    );
        
  }
}

export default withRouter(Ecods);
