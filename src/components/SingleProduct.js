import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import MainHeader from './common/mainHeader';
import SubscribeNow from './common/SubscribeNow';
import Footer from './common/footer';
import SingleProductc from './common/singleProductc';

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <MainHeader />
      <SingleProductc />
      <SubscribeNow />
      <Footer />
      </div>
    );
        
  }
}

export default withRouter(SingleProduct);
