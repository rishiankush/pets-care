import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div class="eco--footer eco--pd--100">
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <div class="widget footer_widget">
                    <div class="eco--inner">
                        <p>Admiration we surrounded possession frequently Remarkably did increasing occasional too its difficulty far especially. You day real less till dear read. Considered use dispatched.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="widget footer_widget">
                   <div class="eco--inner">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Dhrubok</a></li>
                            <li><a href="#">Huuudai</a></li>
                            <li><a href="#">Ux-theme</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="widget footer_widget">
                    <div class="eco--inner">
                        <h4>Important</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="widget footer_widget">
                    <div class="eco--inner">
                        <h4>Contact</h4>
                        <ul>
                            <li>phone: <a href="tel: +313-450-4322">+313-450-4322</a></li>
                            <li>Email: <a href="mailto: eco@sitename.com">eco@sitename.com</a></li>
                            <li>Ny, USA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
        
  }
}

export default withRouter(Footer);
