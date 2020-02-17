import React, { Component } from 'react';

// import verifiedLogo from '../assets/images/100-Verified.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Header from './common/header';
import Footer from './common/footer';
import Banner from './common/banner';
import Breadcrumb from './common/breadcrumb';
import MainContent from './common/mainContent';
import HappyClients from './common/happyClientsSection';
import HomeAbout from './common/HomeAbout';
import breadcrumb from './common/breadcrumb';

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
              <Banner />
              <HomeAbout />
              <Footer />
            </div>
    );
        
  }
}

export default withRouter(AppIndex);
