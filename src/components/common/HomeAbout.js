import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import AboutSectionBg from '../../assets/images/about.jpg';

class HomeAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

	<div id="HomeAboutSection" class="section bgi-left bgi-hide-xs">
		<div class="content-wrap">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-8 offset-md-4">

						<h2 class="section-heading text-primary no-after mb-4">
							Welcome to Pets Care
						</h2>
						<p class="subheading mb-4">Your pet's health and well-being are our top priority.</p>

						<p>Quisque ut dolor gravida, placerat libero vel, euismod. Ut enim ad minim veniam, quis nostrud exercitation. Quam temere in vitiis, legem sancimus haerentia. Pellentesque habitant morbi tristique senectus et netus.</p> 

						
						<div class="row mt-5">
							<div class="col-sm-6 col-md-6">
								<div class="rs-icon-info-3 mb-5">
									<div class="info-icon">
										<i class="fa fa-scissors"></i>
									</div>
									<div class="info-text">
										<h3 class="text-secondary">Pet Grooming</h3>
										Dolor sit amet, dolor gravida, placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-md-6">
								<div class="rs-icon-info-3 mb-5">
									<div class="info-icon">
										<i class="fa fa-home"></i>
									</div>
									<div class="info-text">
										<h3 class="text-secondary">Pet Hotel</h3>
										Dolor sit amet, dolor gravida, placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-md-6">
								<div class="rs-icon-info-3 mb-5">
									<div class="info-icon">
										<i class="fa fa-shield"></i>
									</div>
									<div class="info-text">
										<h3 class="text-secondary">Vaccination</h3>
										Dolor sit amet, dolor gravida, placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-md-6">
								<div class="rs-icon-info-3 mb-5">
									<div class="info-icon">
										<i class="fa fa-medkit"></i>
									</div>
									<div class="info-text">
										<h3 class="text-secondary">Pet Care</h3>
										Dolor sit amet, dolor gravida, placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</div>
		</div>
	</div>

        );
        
    }
  }
  
  export default withRouter(HomeAbout);
  