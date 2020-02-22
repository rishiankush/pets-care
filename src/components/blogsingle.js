import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import MainHeader from './common/mainHeader';
import SubscribeNow from './common/SubscribeNow';
import Footer from './common/footer';
import ShopRoducts from './common/shopRoducts';
import AllPagesHbanner from './common/allPagesHbanner';
import BreadCrumb from './common/breadCrumb';
import Blogird from './common/blogird';
import Blogsinglec from './common/blogsinglec';

class blogsingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <MainHeader />
      <AllPagesHbanner />
      <BreadCrumb />
      <Blogsinglec />
      <SubscribeNow />
      <Footer />
      </div>
    );
        
  }
}

export default withRouter(blogsingle);
