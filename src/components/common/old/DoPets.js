import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import ImgVideo from '../../assets/images/home01.jpg';

class OurServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

render() {
    return (

<div className="section bgi-cover-center" id="dopets">
		<div className="content-wrap">
			<div className="container">
				
				<div className="row">
					<div className="col-sm-6 col-md-6">
						<div className="wrap-form">
							<h2 className="text-primary mb-2">
								Do Pets Have Allergies?
							</h2>
							<p className="uk21 text-white">We are pets clinic dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							
							<p className="text-white">Quisque ut dolor gravida, placerat libero vel, euismod. Ut enim ad minim veniam, quis nostrud exercitation. Quam temere in vitiis, legem sancimus haerentia. Pellentesque habitant morbi tristique senectus et netus.</p>
							<div className="spacer-30"></div>
							<a href="#" className="btn btn-primary">Learn More</a>
							<div className="spacer-30"></div>
							<div className="row">
								<div className="col-sm-8 col-md-8">
									<div className="img-video">
										<a href="https://www.youtube.com/watch?v=vNDrLjOmUY4" className="popup-youtube play-video"><i className="fa fa-play fa-2x"></i></a>
										<img src={ImgVideo} alt="" className="shadow img-fluid" />
										<div className="ripple"></div>
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
  
  export default withRouter(OurServices);
  