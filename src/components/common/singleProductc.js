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
import AllPagesHbanner from './allPagesHbanner';
import Breadcrumb from './breadCrumb';


class singleProductsc extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<div>
<AllPagesHbanner />
<Breadcrumb />
<section id="SingleProduct">
    <div className="container">
        <div className="row">
        <div class="col-12 col-sm-6 col-md-6">
					<div class="media-detail">
						<img src={ProductImg1} alt="" class="img-fluid" />
					</div>
					<div class="productSmallMedia row mt-3">
						<div class="col">
							<a href="#"><img src={ProductImg1} alt="" class="border-img img-fluid" /></a>
						</div>
						<div class="col">
							<a href="#"><img src={ProductImg2} alt="" class="border-img img-fluid" /></a>
						</div>
						<div class="col">
							<a href="#"><img src={ProductImg3} alt="" class="border-img img-fluid" /></a>
						</div>
						<div class="col">
							<a href="#"><img src={ProductImg4} alt="" class="border-img img-fluid" /></a>
						</div>
					</div>
					</div>
					<div class="col-12 col-sm-6 col-md-6">
						<div class="single-shop">
							<p class="title-heading">
								Leather Belt
							</p>
							<div class="price">Price : $29</div>
							<div class="rating">
								<FontAwesomeIcon icon={faStar} color="#F7941D" />
								<FontAwesomeIcon icon={faStar} color="#F7941D" />
								<FontAwesomeIcon icon={faStar} color="#F7941D" />
								<FontAwesomeIcon icon={faStar} color="#F7941D" />
								<FontAwesomeIcon icon={faStar} color="#F7941D" />
							</div>
								
							<p class="mt-4">This is a Demo Product Online Store Product with Gumroad. Gumroad is a secure and very effective tool solution for E-commerce. With Gumroad it becomes easy to keep track of your sales and incomes. No matter what you wish to sell (whether it’s clothes, or downloadable products), it is extremely easy to do if you do it with  Gumroad. Just create your own account and upload your products.</p>
							<a href="#" class="eco--btn">Buy Now</a> <a href="#" class="eco--btn">Add to Cart</a>

							<p>SKU : N/A <br />Categories : Dog <br />Product ID : 01254</p>
							<div class="spacer-50"></div>
						</div>
					</div>
					<div className="col-12 col-sm-6 col-md-12">
					<div className="productsTabsArea">
					<Tabs defaultActiveKey="description" transition={false} id="noanim-tab-example">
					<Tab eventKey="description" title="Description">
						<h4>Product Description :</h4>
						<p>This is Demo Product with Gumroad. Gumroad is a secure and very effective tool solution for e-commerce. It lets you sell anything online as easily as you can share a link to it. Just create your own account and upload your products.</p>
							<ul className="Productinfolist">
							<li>Steel and plastic construction for enhanced strength, safety and visibility.</li>
							<li>2-door carrier design allows for easy access to pets.</li>
							<li>Durable ergonomic carry handle for safer pet transport.</li>
							<li>Water cup NOT included.</li>
							<li>Two door construction.</li>
							<li>Steel wire & plastic combine for strength, safety, & visibility.</li>
							<li>Steel front door with secure latch.</li>
							<li>Secure wing nut & bolt design.</li>
							<li>Comfort carry handle.</li>
							</ul>
					</Tab>
					<Tab eventKey="information" title="Information">
						<h4>Product details :</h4>
							Product Dimensions: 24 x 16.8 x 14.5 inches.
							Shipping Weight: 5.8 pounds.
							Domestic Shipping: Item can be shipped within U.S.
							International Shipping: This item can be shipped to select countries outside of the U.S.
							Shipping Advisory: This item must be shipped separately from other items in your order. Additional shipping charges will not apply.
							Item model number: 294144.
					</Tab>
					<Tab eventKey="review" title="review">
					<div class="reviews">
					<div class="media media-review">
					<img src={UserReviewimg} alt="" class="img-fluid mr-3" />
					<div class="media-body">
					<div class="rating d-inline">
					<FontAwesomeIcon icon={faStar} color="#F7941D" />
					<FontAwesomeIcon icon={faStar} color="#F7941D" />
					<FontAwesomeIcon icon={faStar} color="#F7941D" />
					<FontAwesomeIcon icon={faStar} color="#F7941D" />
					<FontAwesomeIcon icon={faStar} />
					</div>
					<div class="rating-for d-inline ml-1">for <strong>Flexibility</strong></div>
					<div class="rating-by mb-3">by <span class="text-primary">Ernest Doel</span></div>
					<p>Vivamus urna elit, rhoncus vel fringilla ac, vestibulum non arcu. Sed quis vulputate enim. Nunc a erat sollicitudin, finibus augue vitae, facilisis turpis. Vivamus quam ex, ultricies et blandit sed, accumsan a augue. Mauris nibh leo, euismod eu vulputate et, sagittis ut nunc. Vivamus eu ultricies sapien.</p>
					</div>
					</div>

					<div class="media media-review">
					<img src={UserReviewimg2} alt="" class="img-fluid mr-3" />
					<div class="media-body">
					<div class="rating d-inline">
					<FontAwesomeIcon icon={faStar} color="#F7941D" />
					<FontAwesomeIcon icon={faStar} color="#F7941D" />
					<FontAwesomeIcon icon={faStar} color="#F7941D" />
					<FontAwesomeIcon icon={faStar} color="#F7941D" />
					<FontAwesomeIcon icon={faStar} />
					</div>
					<div class="rating-for d-inline ml-1">for <strong>Flexibility</strong></div>
					<div class="rating-by mb-3">by <span class="text-primary">Mellisa Doel</span></div>
					<p>Vivamus urna elit, rhoncus vel fringilla ac, vestibulum non arcu. Sed quis vulputate enim. Nunc a erat sollicitudin, finibus augue vitae, facilisis turpis. Vivamus quam ex, ultricies et blandit sed, accumsan a augue. Mauris nibh leo, euismod eu vulputate et, sagittis ut nunc. Vivamus eu ultricies sapien.</p>
					</div>
					</div>
					</div>
					</Tab>
					</Tabs>
					</div>
					</div>

					<div className="col-md-12">
						<AddComments />
					</div>
        </div>
    </div>
</section>
</div>
    );
        
  }
}

export default withRouter(singleProductsc);
