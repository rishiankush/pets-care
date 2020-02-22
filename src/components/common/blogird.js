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
import Blogimg1 from '../../assets/img/blog/blogimg1.jpg';
import Blogimg2 from '../../assets/img/blog/blogimg2.jpg';
import Blogimg3 from '../../assets/img/blog/blogimg3.jpg';
import Blogimg4 from '../../assets/img/blog/blogimg4.jpg';
import Blogimg5 from '../../assets/img/blog/blogimg5.jpg';
import Blogimg6 from '../../assets/img/blog/blogimg6.jpg';
import Breadcrumb from './breadCrumb';

class blogrid extends Component {
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
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="rs-news-1 mb-5">
                                    <div className="media">
									<a onClick={()=>this.props.history.push("/blogsingle")}>
                                            <img src={Blogimg1} alt="" className="img-fluid" />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <div className="title"><a href="blog-single.html">Dog sitting on the floor</a></div>
                                        <div className="meta-date">May 12, 2017</div>
                                        <p>Dignissimos ccusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores....</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-sm-6 col-md-4">
						<div class="rs-news-1 mb-5">
							<div class="media">
							<a onClick={()=>this.props.history.push("/blogsingle")}>
									<img src={Blogimg2} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="body">
								<div class="title"><a href="blog-single.html">Persian Cat with new</a></div>
								<div class="meta-date">May 12, 2017</div>
								<p>Dignissimos ccusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores....</p>
							</div>
						</div>
					</div>

                    <div class="col-12 col-sm-6 col-md-4">
						<div class="rs-news-1 mb-5">
							<div class="media">
								<a onClick={()=>this.props.history.push("/blogsingle")}>
									<img src={Blogimg3} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="body">
								<div class="title"><a href="blog-single.html">Make pet comportable</a></div>
								<div class="meta-date">May 12, 2017</div>
								<p>Dignissimos ccusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores....</p>
							</div>
						</div>
					</div>

                    <div class="col-12 col-sm-6 col-md-4">
						<div class="rs-news-1 mb-5">
							<div class="media">
							<a onClick={()=>this.props.history.push("/blogsingle")}>
									<img src={Blogimg4} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="body">
								<div class="title"><a href="blog-single.html">Find a way pet problem</a></div>
								<div class="meta-date">May 12, 2017</div>
								<p>Dignissimos ccusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores....</p>
							</div>
						</div>
                    </div>
                    
                    <div class="col-12 col-sm-6 col-md-4">
						<div class="rs-news-1 mb-5">
							<div class="media">
							<a onClick={()=>this.props.history.push("/blogsingle")}>
									<img src={Blogimg5} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="body">
								<div class="title"><a href="blog-single.html">Give vaccine 3 month</a></div>
								<div class="meta-date">Jun 02, 2017</div>
								<p>Dignissimos ccusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores....</p>
							</div>
						</div>
					</div>

                    <div class="col-12 col-sm-6 col-md-4">
						<div class="rs-news-1 mb-5">
							<div class="media">
							<a onClick={()=>this.props.history.push("/blogsingle")}>
									<img src={Blogimg6} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="body">
								<div class="title"><a href="blog-single.html">Dog playing at ground</a></div>
								<div class="meta-date">Jun 12, 2017</div>
								<p>Dignissimos ccusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores....</p>
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

export default withRouter(blogrid);
