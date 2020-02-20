import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import OurServices1 from '../../assets/images/services01.jpg';
import OurServices2 from '../../assets/images/services02.jpg';
import OurServices3 from '../../assets/images/services03.jpg';

class OurServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

render() {
    return (

<div class="">
		<div className="content-wrap">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<h2 className="section-heading text-center text-primary no-after mb-5">
							Our Services
						</h2>
						<p className="subheading text-center">Your pet's health and well-being are our top priority.</p>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-12 col-sm-6 col-md-4">
						<div className="rs-image-box">
							<div className="media">
								<a href="services-single.html"><img src={OurServices1} alt="" className="img-fluid" /></a>
							</div>
							<div className="body-text">
								<h3 className="title"><a href="services-single.html">Pet Barber Services</a></h3>
								Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-4">
						<div className="rs-image-box">
							<div className="media">
								<a href="services-single.html"><img src={OurServices2} alt="" className="img-fluid" /></a>
							</div>
							<div className="body-text">
								<h3 className="title"><a href="services-single.html">Vaccination Supply</a></h3>
								Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-4">
						<div className="rs-image-box">
							<div className="media">
								<a href="services-single.html"><img src={OurServices3} alt="" className="img-fluid" /></a>
							</div>
							<div className="body-text">
								<h3 className="title"><a href="services-single.html">Pet Analysist</a></h3>
								Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-md-12 text-center">
						<a href="#" className="btn btn-secondary mt-5">Check More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
        );
        
    }
  }
  
  export default withRouter(OurServices);
  