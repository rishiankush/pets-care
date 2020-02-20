import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import MainHeader from './common/mainHeader';
import HeaderBanner from './common/HeaderBanner';
import ECods from './common/eCods';
import ECocanHear from './common/eCocanHear';
import ClientsTestimonial from './common/clientstestimonial';
import EcoFeature from './common/EcoFeature';
import Osho from './common/Osho';
import TechnicalDetails from './common/TechnicalDetails';
import VoiceControl from './common/VoiceControl';
import ProductsPlans from './common/ProductsPlans';
import ClientsReview from './common/ClientsReview';
import QuestionsAnswers from './common/QuestionsAnswers';
import SubscribeNow from './common/SubscribeNow';
import Footer from './common/footer';

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <MainHeader />
      <HeaderBanner />
      <ECods />
      <ECocanHear />
      <ClientsTestimonial />
      <EcoFeature />
      <Osho />
      <TechnicalDetails />
      <VoiceControl />
      <ProductsPlans />
      <ClientsReview />
      <QuestionsAnswers />
      <SubscribeNow />
      <Footer />
      </div>
    );
        
  }
}

export default withRouter(AppIndex);
