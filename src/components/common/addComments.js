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


class LeaveComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<div>
<section id="LeaveComments">
<div class="leave-comment-box">
							<h4 className="title-heading">Add Your Review</h4>
							<div className="row">
								<div className="col-sm-9 col-md-9">
									<form action="#" className="form-comment">
										<div className="row">
											<div className="col-xs-12 col-md-12">
												<div className="form-group">
													<textarea id="message" name="message" className="inputtext form-control" rows="6" placeholder="Your Review*..."></textarea>
												</div>
											</div>
											<div className="col-xs-12 col-md-6">
												<div className="form-group">
													<input type="text" id="name" name="name" value="" className="inputtext form-control" placeholder="Enter Name" />
												</div>
											</div>
											<div className="col-xs-12 col-md-6">
												<div className="form-group">
													<input type="text" id="name" name="name" value="" className="inputtext form-control" placeholder="Enter Email" />
												</div>
											</div>
											<div className="col-xs-12 col-md-12">
												<div className="form-group">
													<button id="send" type="submit" className="eco--btn">Send Review</button>
												</div>
											</div>
										</div>
									</form>
								</div>
								<div className="col-sm-3 col-md-3">
									<p>Choose Rating :</p>
									<div className="form-check">
									  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
									  <label className="form-check-label" for="exampleRadios1">
									    <div className="rating">
                                        <FontAwesomeIcon icon={faStar} color="#F7941D" />
										</div>
									  </label>
									</div>
									<div className="form-check">
									  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
									  <label className="form-check-label" for="exampleRadios2">
									    <div className="rating">
                                        <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                        <FontAwesomeIcon icon={faStar} color="#F7941D" />
										</div>
									  </label>
									</div>
									<div className="form-check">
									  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" />
									  <label className="form-check-label" for="exampleRadios3">
									    <div className="rating">
                                        <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
										</div>
									  </label>
									</div>
									<div className="form-check">
									  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option2" />
									  <label className="form-check-label" for="exampleRadios4">
									    <div className="rating">
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
										</div>
									  </label>
									</div>
									<div className="form-check">
									  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option2" />
									  <label className="form-check-label" for="exampleRadios5">
									    <div className="rating">
                                        <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
                                            <FontAwesomeIcon icon={faStar} color="#F7941D" />
										</div>
									  </label>
									</div>
								</div>
							</div>
							
					
						</div>
</section>
</div>
    );
        
  }
}

export default withRouter(LeaveComments);
