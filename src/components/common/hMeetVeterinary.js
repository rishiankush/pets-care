import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class hMeetVeterinary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

render() {
    return (

<div class="">
		<div class="content-wrap">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-12">
						<h2 class="section-heading text-center text-primary no-after mb-5">
							Meet Veterinary
						</h2>
						<p class="subheading text-center">Your pet's health and well-being are our top priority.</p>
					</div>
				</div>
				<div class="row mt-4">
					<div class="col-12 col-sm-6 col-md-4">
						<div class="rs-team-1">
							<div class="media">
								<img src="images/vet05.jpg" alt="" class="img-fluid" />
								<div class="sosmed-icon">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-google-plus"></i></a>
								</div>
							</div>
							<div class="body">
								<div class="title">Dr. John Doel</div>
								<div class="text-primary">Veterinary</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4">
						<div class="rs-team-1">
							<div class="media">
								<img src="images/vet06.jpg" alt="" class="img-fluid" />
								<div class="sosmed-icon">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-google-plus"></i></a>
								</div>
							</div>
							<div class="body">
								<div class="title">Dr. Mellisa Doel</div>
								<div class="text-primary">Veterinary</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4">
						<div class="rs-team-1">
							<div class="media">
								<img src="images/vet07.jpg" alt="" class="img-fluid" />
								<div class="sosmed-icon">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-google-plus"></i></a>
								</div>
							</div>
							<div class="body">
								<div class="title">Dr. Aldizza Doel</div>
								<div class="text-primary">Veterinary</div>
							</div>
						</div>
					</div>

				</div>

				<div class="row">
					<div class="col-sm-12 col-md-12 text-center">
						<a href="#" class="btn btn-secondary mt-5">Check More</a>
					</div>
				</div>

			</div>
		</div>
	</div>
        );
        
    }
  }
  
  export default withRouter(hMeetVeterinary);
  