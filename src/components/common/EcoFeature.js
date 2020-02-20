import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Products4 from '../../assets/img/Products4.png';

class EcoFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
<section id="EcoFeature">
<div class="eco--feature--area--1 eco--pd--100">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="eco--feature--1">
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">01</span>
						<div class="eco--feature--right">
							<h3>The best quality sound</h3>
							<p>In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively.</p>
						</div> 
					</div>
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">02</span>
						<div class="eco--feature--right">
							<h3>Voice recognization</h3>
							<p>In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively.</p>
						</div> 
					</div>
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">03</span>
						<div class="eco--feature--right">
							<h3>Super bass</h3>
							<p>In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively.</p>
						</div> 
					</div>
				</div>
			</div>
		</div>
        <div class="eco--feature--image--1">
            <img src={Products4} alt="" />
        </div>
	</div>
</div>
</section>
    );
        
  }
}

export default withRouter(EcoFeature);
