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
import Product1 from '../../assets/img/singleproduct/HimalayaHimalay.jpg';
import Product2 from '../../assets/img/singleproduct/Pedigree.jpg';
import Product3 from '../../assets/img/singleproduct/RoyalCanin.jpg';
import Product4 from '../../assets/img/singleproduct/TasteofTheWild.jpg';

import Breadcrumb from './breadCrumb';


class shopRoducts extends Component {
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
                                    <div className="widget-title">
                                        Categories
                                        </div>
                                    <ul className="category-nav">
                                        <li><a href="#">Foods</a></li>
                                        <li><a href="#">Toys</a></li>
                                        <li><a href="#">Furnitures</a></li>
                                        <li><a href="#">Pets</a></li>
                                    </ul>
                                </div>

                                <div className="widget widget-text">
                                    <div className="widget-title">
                                        Top Seller
                                     </div>
                                    <div className="shop-sidebar">
                                        <div className="shop-item-sidebar">
                                            <div className="media">
                                                <img src={Product1} alt="" className="img-fluid" />
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Leather Belt</a></h4>
                                                <div className="price">$12</div>
                                            </div>
                                        </div>
                                        <div className="shop-item-sidebar">
                                            <div className="media">
                                                <img src={Product2} alt="" className="img-fluid" />
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Traveller Carrier</a></h4>
                                                <div className="price">$59</div>
                                            </div>
                                        </div>
                                        <div className="shop-item-sidebar">
                                            <div className="media">
                                                <img src={Product2} alt="" className="img-fluid" />
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Healthy Food</a></h4>
                                                <div className="price">$79</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- end sidebar --> */}
                            <div className="col-12 col-sm-9 col-md-9">
                                <div className="row">
                                    <div className="col-sm-4 col-md-4">
                                        <div className="rs-shop-box mb-5">
                                            <div className="media">
                                                <a href="shop-single.html"><img src={Product1} alt="" className="img-fluid" /></a>
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Cat & Small Dog Carrier</a></h4>
                                                <div className="meta">
                                                    <div className="price">$29</div>
                                                    <div className="rating">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="rs-shop-box mb-5">
                                            <div className="media">
                                                <a href="shop-single.html"><img src={Product2} alt="" className="img-fluid" /></a>
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Traveller Pet Carrier</a></h4>
                                                <div className="meta">
                                                    <div className="price">$29</div>
                                                    <div className="rating">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="rs-shop-box mb-5">
                                            <div className="media">
                                                <a href="shop-single.html"><img src={Product3} alt="" className="img-fluid" /></a>
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Leather Belt Pink</a></h4>
                                                <div className="meta">
                                                    <div className="price">$29</div>
                                                    <div className="rating">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="rs-shop-box mb-5">
                                            <div className="media">
                                                <a href="shop-single.html"><img src={Product4} alt="" className="img-fluid" /></a>
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Healthy Food</a></h4>
                                                <div className="meta">
                                                    <div className="price">$29</div>
                                                    <div className="rating">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="rs-shop-box mb-5">
                                            <div className="media">
                                                <a href="shop-single.html"><img src={Product1} alt="" className="img-fluid" /></a>
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Big Carrier</a></h4>
                                                <div className="meta">
                                                    <div className="price">$59</div>
                                                    <div className="rating">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="rs-shop-box mb-5">
                                            <div className="media">
                                                <a href="shop-single.html"><img src={Product2} alt="" className="img-fluid" /></a>
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Blank Leather Belt</a></h4>
                                                <div className="meta">
                                                    <div className="price">$12</div>
                                                    <div className="rating">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="rs-shop-box mb-5">
                                            <div className="media">
                                                <a href="shop-single.html"><img src={Product3} alt="" className="img-fluid" /></a>
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Rubber Pink Toy</a></h4>
                                                <div className="meta">
                                                    <div className="price">$9</div>
                                                    <div className="rating">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="rs-shop-box mb-5">
                                            <div className="media">
                                                <a href="shop-single.html"><img src={Product3} alt="" className="img-fluid" /></a>
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Rubber Bone</a></h4>
                                                <div className="meta">
                                                    <div className="price">$7</div>
                                                    <div className="rating">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="rs-shop-box mb-5">
                                            <div className="media">
                                                <a href="shop-single.html"><img src={Product4} alt="" className="img-fluid" /></a>
                                            </div>
                                            <div className="body-text">
                                                <h4 className="title"><a href="shop-single.html">Safety Mask</a></h4>
                                                <div className="meta">
                                                    <div className="price">$19</div>
                                                    <div className="rating">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12">

                                        <nav aria-label="Page navigation">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            </div>
        );

    }
}

export default withRouter(shopRoducts);
