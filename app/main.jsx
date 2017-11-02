import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './components/Login'

import store from './store';
import Home from './components/Home';
import NotFound from './components/NotFound';

// render(
//   <Provider store={store}>
//     <Router>

//     </Router>
//     <Footer />
//   </Provider>,
//   document.getElementById('app'),
// );


const MeDaily = ({ user, children }) => (
  <div>
    <Navbar />

    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
    </Switch>

    <Footer />
  </div>
)

render(
  <Provider store={store}>
    <Router>
      <MeDaily />
    </Router>
  </Provider>,
  document.getElementById('app')
)
