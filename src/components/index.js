import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Header from './common/header';
import Footer from './common/footer';
import Banner from './common/banner';
import HomeAbout from './common/HomeAbout';
import FunFact from './common/FunFact';
import OurServices from './common/OurServices';
import DoPets from './common/DoPets';

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
              <FunFact />
              <OurServices />
              <DoPets />
              <Footer />
            </div>
    );
        
  }
}

export default withRouter(AppIndex);
