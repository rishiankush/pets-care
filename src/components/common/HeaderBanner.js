import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import HeaderBannerImg from '../../assets/img/HeaderBannerImg.png';

class HeaderBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section id="Headercarousel">
        <div class="eco--home--area--1">
          <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-7">
                    <div class="eco--home--content--1">
                        <div class="eco--sec--title">
                            <span>faster loads - conversion targetted</span>
                            <h1>Landing page for <span>Pet Care</span></h1>
                        </div>
                        <div class="eco--video--button">
                            <a href="https://vimeo.com/91530315" class="eco--popup">
                                <i class="fa fa-play"></i>
                                <span>Watch review</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="eco--home--image--1">
                <img src={HeaderBannerImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
        
  }
}

export default withRouter(HeaderBanner);
