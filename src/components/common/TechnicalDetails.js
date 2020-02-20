import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import AlexsHdevic5 from '../../assets/img/item-05.jpg';

class TechnicalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<section id="TechnicalDetails">
<div class="eco--specification--1 eco--pd--100">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
                <div class="eco--sec--title eco--small text-center">
                    <span>you will love eco to see</span>
                    <h1>Technical Details</h1>
                </div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="eco--inner">
					<ul class="eco--specification--list--1 eco--mt100">
						<li> 
							<div class="eco--title">Size</div>
							<div class="eco--desc">1.3" x 3.3" x 3.3" (32 mm x 84 mm x 84 mm)</div>
						</li>
						<li> 
							<div class="eco--title">Weight</div>
							<div class="eco--desc">5.7 oz. (163 grams)</div>
						</li>
						<li> 
							<div class="eco--title">Wi-Fi <br /> Connectivity</div>
							<div class="eco--desc">Dual-band Wi-Fi supports 802.11 a/b/g/n (2.4 and 5 GHz) networks. Does not support connecting to ad-hoc (or peer-to-peer) Wi-Fi networks.</div>
						</li>
						<li> 
							<div class="eco--title">Bluetooth <br /> Connectivity</div>
							<div class="eco--desc">Advanced Audio Distribution Profile (A2DP) support for audio streaming from your mobile device to Echo Dot or from Echo Dot to your Bluetooth speaker.</div>
						</li>
						<li> 
							<div class="eco--title">Audio</div>
							<div class="eco--desc">Built-in speaker for voice feedback when not connected to external speakers. 3.5 mm stereo audio output for use with external speakers (audio cable not included).</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
    );
        
  }
}

export default withRouter(TechnicalDetails);
