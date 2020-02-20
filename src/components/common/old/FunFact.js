import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import AboutSectionBg from '../../assets/images/about.jpg';

class FunFact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

<div class="bgi-cover-center" id="FunFact">
		<div class="content-wrap">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-6 col-md-3">
						<div class="rs-icon-funfact style-2 text-white">
							<div class="icon">
								<i class="fa fa-smile-o"></i>
							</div>
							<div class="body-content">
								<h2>2700</h2>
								<p class="uk16 text-primary">Happy Customers</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-3">
						<div class="rs-icon-funfact style-2 text-white">
							<div class="icon">
								<i class="fa fa-github"></i>
							</div>
							<div class="body-content">
								<h2>4520</h2>
								<p class="uk16 text-primary">Pets Cure</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-3">
						<div class="rs-icon-funfact style-2 text-white">
							<div class="icon">
								<i class="fa fa-stethoscope"></i>
							</div>
							<div class="body-content">
								<h2>15</h2>
								<p class="uk16 text-primary">Team Doctor</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-3">
						<div class="rs-icon-funfact style-2 text-white">
							<div class="icon">
								<i class="fa fa-trophy"></i>
							</div>
							<div class="body-content">
								<h2>21</h2>
								<p class="uk16 text-primary">Awards Winner</p>
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
  
  export default withRouter(FunFact);
  