import React, { Component } from 'react';

// import verifiedLogo from '../assets/images/100-Verified.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Header from './common/header';
import Footer from './common/footer';


class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
        
  }
}

export default withRouter(AppIndex);
