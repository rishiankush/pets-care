import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Product1 from '../../assets/img/singleproduct/HimalayaHimalay.jpg';
import Product2 from '../../assets/img/singleproduct/Pedigree.jpg';
import Product3 from '../../assets/img/singleproduct/RoyalCanin.jpg';
import Product4 from '../../assets/img/singleproduct/TasteofTheWild.jpg';

class ProductsPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<section id="ProductsPlans">
<div class="eco--pricing--area--1 eco--pd--100">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="eco--sec--title eco--small text-center">
                    <span>Find what you really need</span>
                    <h1>Pricing & plans</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="eco--pricing--wrap--1 eco--mt70">
                    <div class="eco--pricing--main--wrap">
                        <ul class="eco--single--pricing--1 eco--pricing--overview hidden-sm hidden-xs">
                            <li>Preview</li>
                            <li>Price</li>
                            <li>Overview</li>
                            <li>Voice Control</li>
                            <li>Weight</li>
                            <li>Size</li>
                            <li>Purchase</li>
                        </ul>
                        <ul class="eco--single--pricing--1">
                            <li><img src={Product1} alt="" /></li>
                            <li>
                                <strong class="pt">Price</strong>
                                starting from <span>$399</span>
                            </li>
                            <li>
                                <strong class="pt">Overview</strong>
                                Bluetooth or 3.5 mm stereo cable
                            </li>
                            <li>
                                <strong class="pt">Voice Control</strong>
                                Far-field (hands-free) voice recognition. Just ask.
                            </li>
                            <li>
                                <strong class="pt">Weight</strong>
                                5.7 oz (163 grams)
                            </li>
                            <li>
                                <strong class="pt">Size</strong>
                                1.3" x 3.3" x 3.3" (32 mm x 84 mm x 84 mm)
                            </li>
                            <li><a href="#" class="eco--btn">Purchase Now</a></li>
                        </ul>
                        <ul class="eco--single--pricing--1">
                            <li><img src={Product2} alt="" /></li>
                            <li>
                                <strong class="pt">Price</strong>
                                starting from <span>$399</span>
                            </li>
                            <li>
                                <strong class="pt">Overview</strong>
                                Bluetooth or 3.5 mm stereo cable
                            </li>
                            <li>
                                <strong class="pt">Voice Control</strong>
                                Far-field (hands-free) voice recognition. Just ask.
                            </li>
                            <li>
                                <strong class="pt">Weight</strong>
                                5.7 oz (163 grams)
                            </li>
                            <li>
                                <strong class="pt">Size</strong>
                                1.3" x 3.3" x 3.3" (32 mm x 84 mm x 84 mm)
                            </li>
                            <li><a href="#" class="eco--btn">Purchase Now</a></li>
                        </ul>
                        <ul class="eco--single--pricing--1">
                            <li><img src={Product3} alt="" /></li>
                            <li>
                                <strong class="pt">Price</strong>
                                starting from <span>$399</span>
                            </li>
                            <li>
                                <strong class="pt">Overview</strong>
                                Bluetooth or 3.5 mm stereo cable
                            </li>
                            <li>
                                <strong class="pt">Voice Control</strong>
                                Far-field (hands-free) voice recognition. Just ask.
                            </li>
                            <li>
                                <strong class="pt">Weight</strong>
                                5.7 oz (163 grams)
                            </li>
                            <li>
                                <strong class="pt">Size</strong>
                                1.3" x 3.3" x 3.3" (32 mm x 84 mm x 84 mm)
                            </li>
                            <li><a href="#" class="eco--btn">Purchase Now</a></li>
                        </ul>
                        <ul class="eco--single--pricing--1">
                            <li><img src={Product4} alt="" /></li>
                            <li>
                                <strong class="pt">Price</strong>
                                starting from <span>$399</span>
                            </li>
                            <li>
                                <strong class="pt">Overview</strong>
                                Bluetooth or 3.5 mm stereo cable
                            </li>
                            <li>
                                <strong class="pt">Voice Control</strong>
                                Far-field (hands-free) voice recognition. Just ask.
                            </li>
                            <li>
                                <strong class="pt">Weight</strong>
                                5.7 oz (163 grams)
                            </li>
                            <li>
                                <strong class="pt">Size</strong>
                                1.3" x 3.3" x 3.3" (32 mm x 84 mm x 84 mm)
                            </li>
                            <li><a href="#" class="eco--btn">Purchase Now</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    );
        
  }
}

export default withRouter(ProductsPlans);
