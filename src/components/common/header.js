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
        <div class="header header-1">
            <div class="topbar d-none d-md-block">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-md-6">
                            <p class="mb-0">Welcome to The Best Pets Care at Melboune</p>
                        </div>

                        <div class="col-sm-6 col-md-6">
                            <div class="sosmed-icon d-inline-flex pull-right">
                                <a href="#"><i class="fa fa-facebook"></i></a> 
                                <a href="#"><i class="fa fa-twitter"></i></a> 
                                <a href="#"><i class="fa fa-instagram"></i></a> 
                                <a href="#"><i class="fa fa-pinterest"></i></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="middlebar d-none d-sm-block">
                <div class="container">
                    
                    
                    <div class="contact-info">
                        <div class="box-icon-1">
                            <div class="icon">
                                <div class="fa fa-clock-o"></div>
                            </div>
                            <div class="body-content">
                                <div class="heading">Open Hours :</div>
                                Mon - Fri : 09:00 - 20:00
                            </div>
                        </div>
                        <div class="box-icon-1">
                            <div class="icon">
                                <div class="fa fa-phone"></div>
                            </div>
                            <div class="body-content">
                                <div class="heading">Call Today :</div>
                                +62 7100 1234
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="navbar-main">
                <div class="container">
                    <nav id="navbar-example" class="navbar navbar-expand-lg">
                        <a class="navbar-brand" href="index.html">
                            <img src={require("../../assets/images/logo.png")} alt="" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown dmenu">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    HOME
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="index.html">Pets Care</a>
                                        <a class="dropdown-item" href="pets-shop.html">Pets Shop</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about-us.html">ABOUT US</a>
                                </li>
                                <li class="nav-item dropdown dmenu">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SERVICES
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="services.html">Services</a>
                                        <a class="dropdown-item" href="services-single.html">Single Services</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown dmenu active">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PAGES
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="page-faq.html">Faqs</a>
                                        <a class="dropdown-item" href="page-our-staff.html">Our Staff</a>
                                        <a class="dropdown-item" href="page-single-staff.html">Single Staff</a>
                                        <a class="dropdown-item" href="page-appointment-form.html">Appointment Form</a>
                                        <a class="dropdown-item" href="page-pricing-tables.html">Pricing Tables</a>
                                        <a class="dropdown-item" href="page-404.html">404 Page</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="gallery.html">GALLERY</a>
                                </li>
                                <li class="nav-item dropdown dmenu">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    BLOG
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="blog.html">Blog List</a>
                                        <a class="dropdown-item" href="blog-single.html">Single Blog</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown dmenu">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SHOP
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="shop.html">Shop</a>
                                        <a class="dropdown-item" href="shop-list.html">Product List</a>
                                        <a class="dropdown-item" href="shop-single.html">Single Product</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">CONTACT</a>
                                </li>

                            </ul>
                            <a href="#" class="btn btn-secondary btn-nav btn-rect ml-auto">GET AN APPOINTMENT</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
        
  }
}

export default withRouter(Header);
