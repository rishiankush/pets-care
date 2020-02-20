import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
<div className="section bg-breadcrumb">
		<div className="content-wrap py-0 pos-relative">
			<div className="container">
			    <nav aria-label="breadcrumb">
				  <ol className="breadcrumb ">
				    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
				    <li className="breadcrumb-item active" aria-current="page">Product Foods</li>
				  </ol>
				</nav>					
			</div>
		</div>
	</div>
    );
        
  }
}

export default withRouter(MainHeader);