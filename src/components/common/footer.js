import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="footer bg-overlay-secondary" data-background={require("../../assets/images/dummy-img-1920x900-3.jpg")}>
            <div className="content-wrap">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="footer-item">
                                <img src={require("../../assets/images/logo_w.png")} alt="logo bottom" className="logo-bottom" />
                                <div className="spacer-20"></div>
                                <p>We are pets center at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                                <div className="spacer-20"></div>
                                <img src={require("../../assets/images/payment.png")} alt="" />
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="footer-item">
                                <div className="footer-title">
                                    Opening Hours
                                </div>
                                <p>Our support available to help you 24 hours a day. We provide our best.</p>
                                <ul className="list">
                                    <li>
                                        Mon - Fri : 08.00 am - 20.00 pm
                                    </li>
                                    <li>
                                        Saturday : 09.00 am - 20.00 pm
                                    </li>
                                    <li>
                                        Sunday :  We Are Closed
                                    </li>
                                </ul>

                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-md-4">
                            <div className="footer-item">
                                <div className="footer-title">
                                    Contact Info
                                </div>
                                <p>Lit sed The Best in dolor sit amet consectetur</p>
                                <ul className="list-info">
                                    <li>
                                        <div className="info-icon text-primary">
                                            <span className="fa fa-map-marker"></span>
                                        </div>
                                        <div className="info-text">99 S.t Jomblo Park Pekanbaru 28292. Indonesia</div> 
                                    </li>
                                    <li>
                                        <div className="info-icon text-primary">
                                            <span className="fa fa-phone"></span>
                                        </div>
                                        <div className="info-text">(0761) 654-123987</div>
                                    </li>
                                    <li>
                                        <div className="info-icon text-primary">
                                            <span className="fa fa-envelope"></span>
                                        </div>
                                        <div className="info-text">mail@hellopets.com</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="fcopy">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <p className="ftex">&copy; 2019 Your Company. All Rights Reserved. Designed By <span className="text-primary">Rometheme</span></p> 
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="sosmed-icon d-inline-flex float-right">
                                <a href="#"><i className="fa fa-facebook"></i></a> 
                                <a href="#"><i className="fa fa-twitter"></i></a> 
                                <a href="#"><i className="fa fa-instagram"></i></a> 
                                <a href="#"><i className="fa fa-pinterest"></i></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
        
  }
}

export default withRouter(Footer);
