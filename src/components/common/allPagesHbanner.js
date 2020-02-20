import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ProductImg1 from '../../assets/img/singleproduct/shopimgdetail.jpg';
import ProductImg2 from '../../assets/img/singleproduct/shopimg7.jpg';
import ProductImg3 from '../../assets/img/singleproduct/shopimg6.jpg';
import ProductImg4 from '../../assets/img/singleproduct/shopimg2.jpg';
import UserReviewimg from '../../assets/img/team-1.jpg';
import UserReviewimg2 from '../../assets/img/team-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import AddComments from './addComments';


class AllpagesHBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<div>
<section id="AllpagesHBanner">
<div className="contaienr">
    <div className="row">
        <div className="col-md-12">
            <h3>Product Foods</h3>
            <p> Your pet's health and well-being are our top priority. </p>
        </div>
    </div>
</div>
</section>
</div>
    );
        
  }
}

export default withRouter(AllpagesHBanner);
