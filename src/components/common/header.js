import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faclock } from '@fortawesome/fontawesome-svg-core';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="header header-1">
            <div className="topbar d-none d-md-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6 col-md-6">
                            <p className="mb-0">Welcome to The Best Pets Care at Melboune</p>
                        </div>

                        <div className="col-sm-6 col-md-6">
                            <div className="sosmed-icon d-inline-flex pull-right">
                                <a href="#"><i className="fa fa-facebook"></i></a> 
                                <a href="#"><i className="fa fa-twitter"></i></a> 
                                <a href="#"><i className="fa fa-instagram"></i></a> 
                                <a href="#"><i className="fa fa-pinterest"></i></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="middlebar d-none d-sm-block">
                <div className="container">
                    
                    
                    <div className="contact-info">
                        <div className="box-icon-1">
                            <div className="icon">
                                {/* <div className="fa fa-clock-o"></div> */}
                                <FontAwesomeIcon icon="clock" />
                            </div>
                            <div className="body-content">
                                <div className="heading">Open Hours :</div>
                                Mon - Fri : 09:00 - 20:00
                            </div>
                        </div>
                        <div className="box-icon-1">
                            <div className="icon">
                                <div className="fa fa-phone"></div>
                            </div>
                            <div className="body-content">
                                <div className="heading">Call Today :</div>
                                +62 7100 1234
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="navbar-main">
                <div className="container">
                    <nav id="navbar-example" className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#">
                            <img src={require("../../assets/images/logo.png")} alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown dmenu">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    HOME
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Pets Care</a>
                                        <a className="dropdown-item" href="#">Pets Shop</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT US</a>
                                </li>
                                <li className="nav-item dropdown dmenu">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SERVICES
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Services</a>
                                        <a className="dropdown-item" href="#">Single Services</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown dmenu active">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PAGES
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Faqs</a>
                                        <a className="dropdown-item" href="#">Our Staff</a>
                                        <a className="dropdown-item" href="#">Single Staff</a>
                                        <a className="dropdown-item" href="#">Appointment Form</a>
                                        <a className="dropdown-item" href="#">Pricing Tables</a>
                                        <a className="dropdown-item" href="#">404 Page</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">GALLERY</a>
                                </li>
                                <li className="nav-item dropdown dmenu">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    BLOG
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Blog List</a>
                                        <a className="dropdown-item" href="#">Single Blog</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown dmenu">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SHOP
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Shop</a>
                                        <a className="dropdown-item" href="#">Product List</a>
                                        <a className="dropdown-item" href="#">Single Product</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>

                            </ul>
                            <a href="#" className="btn btn-secondary btn-nav btn-rect ml-auto">GET AN APPOINTMENT</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
        
  }
}

export default withRouter(Header);
