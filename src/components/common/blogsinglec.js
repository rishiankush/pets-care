import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ProductImg1 from '../../assets/img/singleproduct/shopimgdetail.jpg';
import ProductImg2 from '../../assets/img/singleproduct/shopimg7.jpg';
import ProductImg3 from '../../assets/img/singleproduct/shopimg6.jpg';
import ProductImg4 from '../../assets/img/singleproduct/shopimg2.jpg';
import UserReviewimg from '../../assets/img/team-1.jpg';
import UserReviewimg2 from '../../assets/img/team-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AddComments from './addComments';
import Blogpreviewimg from '../../assets/img/blog/blogpreviewimg.jpg';
import Testimonythumb3 from '../../assets/img/blog/testimonythumb3.jpg';
import Testimonythumb2 from '../../assets/img/blog/testimonythumb2.jpg';
import Testimonythumb4 from '../../assets/img/blog/testimonythumb4.jpg';




class blogsinglec extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <section id="shoproducts">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-3">

                                <div className="widget categories">
                                    <ul className="category-nav">
                                        <li className="active"><a href="#">Pet Barber Services</a></li>
                                        <li><a href="#">Pet Vaccination</a></li>
                                        <li><a href="#">Pet Consultation</a></li>
                                        <li><a href="#">Preventive Medicine</a></li>
                                        <li><a href="#">Pet Diagnostics</a></li>
                                        <li><a href="#">Patient Departement</a></li>
                                    </ul>
                                </div>

                                <div className="widget widget-text">
                                    <div className="widget-title">
                                        Text Widget
    </div>
                                    <p><strong>Pets is responsive multi-purpose HTML5 template compatible with Bootstrap 4. Take your Startup business website to the next level. it is designed for pet care, clinic, veterinary, shop, store, adopt, food, pets, businesses or any type of person or business who wants to showcase their work, services and professional way.</strong></p>
                                    <p>Nam efficitur orci quis leo tincidunt, ac lacinia purus aliquet. Nam pellentesque pretium nibh cursus diam dapibus a.</p>
                                </div>

                                <div className="widget widget-archive">
                                    <div className="widget-title">
                                        Archive
    </div>
                                    <select className="form-control">
                                        <option>April 2017</option>
                                        <option>March 2017</option>
                                        <option>February 2017</option>
                                        <option>January 2017</option>
                                    </select>
                                </div>

                                <div className="widget tags">
                                    <div className="widget-title">
                                        Tags
    </div>
                                    <div className="tagcloud">
                                        <a href="#" title="3 topics">animals</a>
                                        <a href="#" title="1 topic" >business</a>
                                        <a href="#" title="1 topic" >cats</a>
                                        <a href="#" title="4 topics" >dogs</a>
                                        <a href="#" title="2 topics" >ecommerce</a>
                                        <a href="#" title="1 topic" >pet care</a>
                                        <a href="#" title="2 topics" >pet services</a>
                                        <a href="#" title="1 topic" >pet shop</a>
                                        <a href="#" title="2 topics" >pet sitting</a>
                                        <a href="#" title="5 topics">pets</a>
                                        <a href="#" title="2 topics">themeforest</a>
                                        <a href="#" title="1 topic" >shelter animals</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-sm-9 col-md-9">

                                <div className="single-news">
                                    <div className="media">
                                        <img src={Blogpreviewimg} alt="" className="img-fluid" />
                                    </div>
                                    <h2 className="title"> Dog sitting on the floor </h2>
                                    <div className="meta-date">May 12, 2017</div>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <blockquote>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							<footer>Carol Mongol</footer></blockquote>
                                    <div className="margin-bottom-50"></div>
                                    <p><strong>Ut enim ad minim veniam</strong></p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="author-box">
                                    <div className="media">
                                        <img src={Testimonythumb3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="body">
                                        <h4 className="media-heading"><span>Author :</span>John Doel</h4>
                                        We are also create and designing template for categories Graphic template and Game asset. in November 2014, we have won big contest Envato most wanted for categories game assets.
	                      	</div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="comments-box">
                                    <h4 className="title-heading">Comments <span>(3)</span></h4>

                                    <div className="media comment">
                                        <img className="mr-3" alt="80x80" src={Testimonythumb4}/>
                                        <div className="media-body">
                                            <h5 className="media-heading mt-0 mb-1">Susi Doel<small className="date">August 24, 2014</small>
                                            </h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							    </div>
                                    </div>
                                    <div className="media reply-comment">
                                        <img className="mr-3" alt="80x80" src={Testimonythumb2}/>
                                        <div className="media-body">
                                            <h5 className="media-heading mt-0 mb-1">Susi Doel<small className="date">August 24, 2014</small>
                                            </h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							    </div>
                                    </div>
                                    <div className="media comment">
                                        <img className="mr-3" alt="80x80" src={Testimonythumb3}/>
                                        <div className="media-body">
                                            <h5 className="media-heading mt-0 mb-1">Susi Doel<small className="date">August 24, 2014</small>
                                            </h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							    </div>
                                    </div>

                                </div>

                                <div className="leave-comment-box">
                                    <h4 className="title-heading">Leave Comments</h4>
                                    <form action="#" className="form-comment">
                                        <div className="row">
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
                                                    <input type="text" id="name" name="name" value="" className="inputtext form-control" placeholder="Enter Website" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea id="message" name="message" className="inputtext form-control" rows="6" placeholder="Enter Your Message..."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-md-12">
                                                <div className="form-group">
                                                    <button id="send" type="submit" class="btn btn-primary">Post Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );

    }
}

export default withRouter(blogsinglec);
