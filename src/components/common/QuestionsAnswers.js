import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import Products6 from '../../assets/img/Products6.png';

class QuestionsAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
return (
<section id="QuestionsAnswers">
<div class="eco--faq--area--1 eco--pd--100">
    <div class="container">
        <div class="row">
			<div class="col-md-12">
                <div class="eco--sec--title eco--small text-center">
                    <span>Find what you really need</span>
                    <h1>Questions & Answers</h1>
                </div>
			</div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="eco--faq--1 eco--mt100 eco--pr50">
                    <div class="eco--single--faq">
                        <h4>Would 3 2nd gen echo dots in one 1000 square foot home sync with eachother or would there be issues?</h4>
                        <p>Another solution to avoid multiple devices responding is to use a different wake-up name for each. Currently we are limited to 3 choices: Alexa, Echo and Amazon. I have one Alexa and two first gen Dots. Each of the Dots are using "Echo" as their wake-up word and at opposite ends of the house, no prob.</p>
                    </div>
                    <div class="eco--single--faq">
                        <h4>Would 3 2nd gen echo dots in one 1000 square foot home sync with eachother or would there be issues?</h4>
                        <p>Another solution to avoid multiple devices responding is to use a different wake-up name for each. Currently we are limited to 3 choices: Alexa, Echo and Amazon. I have one Alexa and two first gen Dots. Each of the Dots are using "Echo" as their wake-up word and at opposite ends of the house, no prob.</p>
                    </div>
                    <a class="eco--more--faq" href="#">See more questions and answers</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="eco-faq-img eco--mt100">
                    <img src={Products6} alt="" />
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    );
        
  }
}

export default withRouter(QuestionsAnswers);
