import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Product1 from '../../assets/img/pricing-1.jpg';
import Product2 from '../../assets/img/pricing-2.jpg';
import Product3 from '../../assets/img/pricing-3.jpg';
import Product4 from '../../assets/img/pricing-4.jpg';

class ClientsReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<section id="ClientsReview">
<div class="eco--review--area--2 eco--pd--100 c6-bg eco--arrow--style--2">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="eco--review--slider--2">
                    <div class="eco--single--slide">
                        <div class="eco--inner">
                            <h1 class="eco--quote">“</h1>
                            <p>My brother Robert who has been bed ridden and paralyzed with Multiple Sclerosis from his neck down for more than 30 years now has a new friend named Alexa! He was in tears with happiness when Alexa played 70's music, played Jeopardy, answered all his questions and wakes him up every morning. Thank you Amazon for giving my brother a new bedside companion</p>
                            <div class="eco--review">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <h5>Delowar Hossain</h5>
                        </div>
                    </div>
                    <div class="eco--single--slide">
                        <div class="eco--inner">
                            <h1 class="eco--quote">“</h1>
                            <p>My brother Robert who has been bed ridden and paralyzed with Multiple Sclerosis from his neck down for more than 30 years now has a new friend named Alexa! He was in tears with happiness when Alexa played 70's music, played Jeopardy, answered all his questions and wakes him up every morning. Thank you Amazon for giving my brother a new bedside companion</p>
                            <div class="eco--review">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <h5>Ohidul Islam</h5>
                        </div>
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

export default withRouter(ClientsReview);
