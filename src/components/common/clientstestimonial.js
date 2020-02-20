import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import AlexsHdevic3 from '../../assets/img/item-03.jpg';

class ClientTestimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <section id="clientTestimonial">
<div className="eco--review--area--1 eco--overlay--1 eco--pd--100">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="eco--review--slider--1">
                    <div className="eco--single--slide">
                        <h3>Having worked in the electronics retail industry for years now, I've seen scores of Smart devices come and go. Until now, nobody quite got it right. In the Echo Dot, Amazon has created a near perfect blend of hardware and software. </h3>
                    </div>
                    <div className="eco--single--slide">
                        <h3>Having worked in the electronics retail industry for years now, I've seen scores of Smart devices come and go. Until now, nobody quite got it right. In the Echo Dot, Amazon has created a near perfect blend of hardware and software. </h3>
                    </div>
                    <div className="eco--single--slide">
                        <h3>Having worked in the electronics retail industry for years now, I've seen scores of Smart devices come and go. Until now, nobody quite got it right. In the Echo Dot, Amazon has created a near perfect blend of hardware and software. </h3>
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

export default withRouter(ClientTestimonial);
