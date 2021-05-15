import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CustomerAccessPage } from "./components/customerAccessPage";
import { Trailer } from "./components/Trailer";
// import Services from './components/pages/Services';
import { AppProductvagos } from './components/Products/AppProductvagos';
// import Register from './components/pages/Register.js';
// import Signin from './components/pages/Signin.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products/vagos' exact component={AppProductvagos} />
          {/* <Route path='/services' exact component={Services} /> */}
          <Route path='/trailer' exact component={Trailer} />
          <Route path="/customer/access/:action" exact component={CustomerAccessPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
