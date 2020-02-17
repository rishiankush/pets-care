import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import HomeSlide1 from '../../assets/images/home01.jpg';
import HomeSlide2 from '../../assets/images/home02.jpg';
import HomeSlide3 from '../../assets/images/home03.jpg';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section id="Headercarousel">
      <Carousel>
        <Carousel.Item>
          <img src={HomeSlide1} alt="Slider" width="1920" height="500" />
          <Carousel.Caption>
            <h1 class="caption-heading">We Provide The Best<br />Care For Your Pets</h1>
            <p class="">The best pets clinic at melbourne, more than 20.000+ customers happy.</p>
            <a href="#" class="btn btn-primary">More About Us</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={HomeSlide2} alt="Slider" width="1920" height="500" />
          <Carousel.Caption>
              <h1 class="caption-heading">We Provide The Best<br />Care For Your Pets</h1>
              <p class="">The best pets clinic at melbourne, more than 20.000+ customers happy.</p>
              <a href="#" class="btn btn-primary">More About Us</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={HomeSlide3} alt="Slider" width="1920" height="500" />
          <Carousel.Caption>
          <h1 className="caption-heading text-primary">We Provide The Best<br />Care For Your Pets</h1>
            <p className="text-black">The best pets clinic at melbourne, more than 20.000+ customers happy.</p>
            <a href="#" className="btn btn-primary">More About Us</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </section>
    );
        
  }
}

export default withRouter(Banner);
