import React from 'react';
import './App.css';
// import './assets/css/style.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppIndex from './components/index';
import './assets/js/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/CustomStyle.css';

function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path="/" exact component={AppIndex} />
     </Switch>
    </div>
  </Router>
  );
}

export default App;
