import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Products5 from '../../assets/img/Products5.png';

class Osho extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<section id="The_best_home">
<div class="eco--promo--3 eco--pd--140 eco--pd--140 c1-bg eco--bg--ptrn--2">
    <div class="container">
        <div class="row">

        <div class="col-md-6">
            <img src={Products5} alt="" />
        </div>
            
            <div class="col-lg-6 col-md-6">
                <div class="eco--inner eco--ml-50">
                    <div class="eco--sec--title--white eco--small">
                        <span>Dogs delivers awesome sounds</span>
                        <h1>The best one for your home.</h1>
                    </div>
                    <div class="eco--content eco--mt35">
                       <p>Now residence dashwoods she excellent you. Shade being under his bed her. Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend.</p>
                        <div class="eco--btn--wrap eco--mt70">
                            <a href="#" class="eco--btn eco--bordered--white">Purchase Dogs <i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    );
        
  }
}

export default withRouter(Osho);
