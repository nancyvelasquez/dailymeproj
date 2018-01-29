import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';



import $ from 'jquery';
window.$ = $;

import { Provider } from 'react-redux';
import Footer from './components/Footer'
import './style/style.scss';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import UserHome from './components/UserHome'

import store from './store';
import Home from './components/Home';
import NotFound from './components/NotFound';

const MeDaily = ({ user, children }) => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/notes" component={UserHome} />
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