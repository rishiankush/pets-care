import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppIndex from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/customStyle.css';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path="/" exact component={AppIndex} />
        <Route path="/singleproduct" component={SingleProduct} />
     </Switch>
    </div>
  </Router>
  );
}

export default App;
