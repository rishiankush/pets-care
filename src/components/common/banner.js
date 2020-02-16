import React, { Component } from 'react';
// import '../../assets/css/vendor/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img src={require("../../assets/images/dummy-img-1920x900.jpg")} alt="Slider" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require("../../assets/images/dummy-img-1920x900-2.jpg")} alt="Slider" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require("../../assets/images/dummy-img-1920x900-3.jpg")} alt="Slider" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
        
  }
}

export default withRouter(Banner);
