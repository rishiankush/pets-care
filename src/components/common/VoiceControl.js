import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class VoiceControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<section id="VoiceControl">
<div class="eco--video--area--1 eco--pd--100 eco--overlay--1">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="eco--sec--title--white eco--small text-center">
					<h1>Voice control your smart home</h1>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 text-center">
				<div class="eco--btn--wrap eco--mt120">
					<a href="https://vimeo.com/91530315" class="eco--video--btn--1 eco--popup fa fa-play"></a>
					<span>Watch the promo video</span>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
    );
        
  }
}

export default withRouter(VoiceControl);
