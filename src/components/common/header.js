import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

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
                                <div className="fa fa-clock-o"></div>
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
                        <a className="navbar-brand" href="index.html">
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
                                        <a className="dropdown-item" href="index.html">Pets Care</a>
                                        <a className="dropdown-item" href="pets-shop.html">Pets Shop</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about-us.html">ABOUT US</a>
                                </li>
                                <li className="nav-item dropdown dmenu">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SERVICES
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="services.html">Services</a>
                                        <a className="dropdown-item" href="services-single.html">Single Services</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown dmenu active">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PAGES
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="page-faq.html">Faqs</a>
                                        <a className="dropdown-item" href="page-our-staff.html">Our Staff</a>
                                        <a className="dropdown-item" href="page-single-staff.html">Single Staff</a>
                                        <a className="dropdown-item" href="page-appointment-form.html">Appointment Form</a>
                                        <a className="dropdown-item" href="page-pricing-tables.html">Pricing Tables</a>
                                        <a className="dropdown-item" href="page-404.html">404 Page</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="gallery.html">GALLERY</a>
                                </li>
                                <li className="nav-item dropdown dmenu">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    BLOG
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="blog.html">Blog List</a>
                                        <a className="dropdown-item" href="blog-single.html">Single Blog</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown dmenu">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SHOP
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="shop.html">Shop</a>
                                        <a className="dropdown-item" href="shop-list.html">Product List</a>
                                        <a className="dropdown-item" href="shop-single.html">Single Product</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">CONTACT</a>
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
