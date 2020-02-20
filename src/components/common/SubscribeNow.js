import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Product5 from '../../assets/img/item-06.jpg';

class SubscribeNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<section id="SubscribeNow">
<div class="eco--newsletter--area--1 c1-bg eco--pd--100">
    <div class="container">
		<div class="row">
			<div class="col-md-12">
                <div class="eco--sec--title--white eco--small text-center">
                    <span>Get latest news in your inbox</span>
                    <h1>Subscribe now</h1>
                </div>
			</div>
		</div>
       <div class="row">
           <div class="col-md-12">
               <form action="//crazycafe.us13.list-manage.com/subscribe/post?u=8b098ef4cf6323e5b448b2b8b&amp;id=43e059c09c" class="eco--mc--form1">
                   <div class="eco--newsletter--1">
                       <div class="eco--inner">
                           <input type="email" placeholder="enter your email address" required="" />
                           <button type="submit">Subscribe Now &nbsp; <i class="fa fa-spinner fa-pulse hidden submitSpinner"></i></button>
                       </div>
                        <span class="col-md-12 eco--btm--txt"><i class="fa fa-lock"></i> &nbsp; we never share your email with others</span>
                   </div>
               </form>
           </div>
       </div>
    </div>
</div>
</section>
    );
        
  }
}

export default withRouter(SubscribeNow);
